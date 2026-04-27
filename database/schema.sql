-- Devopstrio Azure Enterprise Landing Zone Starter
-- Core Platform Governance & Subscription Orchestration Database Schema
-- Target: PostgreSQL 15+

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Identity & Tenancy
CREATE TABLE IF NOT EXISTS tenants (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    azure_tenant_id VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id),
    email VARCHAR(255) UNIQUE NOT NULL,
    role VARCHAR(50) DEFAULT 'CloudArchitect', -- PlatformEngineer, CloudArchitect, Auditor
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Management Hierarchy
CREATE TABLE IF NOT EXISTS management_groups (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id),
    name VARCHAR(255) NOT NULL,
    external_id VARCHAR(255) UNIQUE NOT NULL, -- Azure Resource ID
    parent_id UUID REFERENCES management_groups(id),
    archetype VARCHAR(50) NOT NULL, -- Platform, LandingZone, Sandbox
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS subscriptions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    management_group_id UUID REFERENCES management_groups(id),
    name VARCHAR(255) NOT NULL,
    subscription_id VARCHAR(100) UNIQUE NOT NULL,
    status VARCHAR(50) DEFAULT 'Active', -- Active, Decommissioned, Warning
    archetype VARCHAR(50) NOT NULL, -- Corp, Online, Data
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Governance & Policy
CREATE TABLE IF NOT EXISTS policies (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    definition_id VARCHAR(255) NOT NULL,
    assignment_scope VARCHAR(255) NOT NULL,
    compliance_state VARCHAR(50) DEFAULT 'Compliant', -- Compliant, NonCompliant, Unknown
    last_audit TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Cost & Budget Management
CREATE TABLE IF NOT EXISTS budgets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    subscription_id UUID REFERENCES subscriptions(id) ON DELETE CASCADE,
    amount FLOAT NOT NULL,
    currency VARCHAR(10) DEFAULT 'GBP',
    alert_threshold INT DEFAULT 80, -- Percentage
    status VARCHAR(50) DEFAULT 'Normal', -- Normal, Exceeded
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS cost_records (
    id BIGSERIAL PRIMARY KEY,
    subscription_id UUID REFERENCES subscriptions(id) ON DELETE CASCADE,
    amount FLOAT NOT NULL,
    usage_date DATE NOT NULL,
    service_category VARCHAR(100),
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. Infrastructure & Regions
CREATE TABLE IF NOT EXISTS regions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) UNIQUE NOT NULL, -- uksouth, eastus
    display_name VARCHAR(100),
    is_enabled BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 6. Audit & Analytics
CREATE TABLE IF NOT EXISTS metrics (
    id BIGSERIAL PRIMARY KEY,
    metric_name VARCHAR(100) NOT NULL, -- Subscription_Growth, Policy_Compliance_Score, Average_Latency
    value FLOAT NOT NULL,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    action VARCHAR(255) NOT NULL,
    payload JSONB,
    resource_id VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Strategic Landing Zone Indexes
CREATE INDEX idx_sub_mg ON subscriptions(management_group_id);
CREATE INDEX idx_sub_status ON subscriptions(status);
CREATE INDEX idx_mg_parent ON management_groups(parent_id);
CREATE INDEX idx_cost_sub ON cost_records(subscription_id);
CREATE INDEX idx_cost_date ON cost_records(usage_date);
CREATE INDEX idx_audit_time ON audit_logs(created_at);
