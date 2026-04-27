<div align="center">

<img src="https://raw.githubusercontent.com/Devopstrio/.github/main/assets/Browser_logo.png" height="90" alt="Devopstrio Logo" />

<h1>Azure Enterprise Landing Zone Starter</h1>

<p><strong>Secure, Scalable, Policy-Driven Multi-Subscription Cloud Foundation for Global Organizations</strong></p>

[![Solution](https://img.shields.io/badge/Stack-Azure_Foundation-0078d4?style=for-the-badge&logo=microsoftazure&labelColor=000000)](https://devopstrio.co.uk/)
[![Governance](https://img.shields.io/badge/Policy-Azure_Policy-522c72?style=for-the-badge&labelColor=000000)](https://devopstrio.co.uk/)
[![Automation](https://img.shields.io/badge/Capability-Subscription_Vending-success?style=for-the-badge&labelColor=000000)](https://devopstrio.co.uk/)
[![Logic](https://img.shields.io/badge/Engine-Platform_Engineering-962964?style=for-the-badge&labelColor=000000)](/apps/governance-engine)

</div>

---

## 🏛️ Executive Summary

The **Azure Enterprise Landing Zone Starter** is a flagship platform designed to architect and deliver a world-class cloud foundation for large-scale organizations. Transitioning to Azure at scale requires more than just resource creation; it demands a strategic alignment of **governance**, **networking**, **identity**, and **security** within a multi-subscription hierarchy. This platform codifies the **Microsoft Cloud Adoption Framework (CAF)** and **Azure Landing Zone (ALZ)** principles into a production-ready repository.

By leveraging sophisticated **Governance, Subscription, and Network Engines**, the platform automates the deployment of secure hub-spoke topologies, enforces global compliance through **Azure Policy-as-Code**, and manages the entire lifecycle of subscription vending. It provides a boardroom-ready Command Tower that gives platform engineering teams real-time visibility into governance drift, network health, and multi-region cost distribution, ensuring a secure and optimized cloud estate from the first subscription.

### Strategic Business Outcomes
- **Rapid Readiness at Scale**: Deploy a fully governed cloud foundation in hours, enabling business units to onboard workloads faster without compromising security.
- **Automated Governance-as-Code**: Prevent compliance drift through automated Azure Policy enforcement, tagging standards, and resource name validation.
- **Enterprise-Grade Networking**: Standardize connectivity through automated Hub-Spoke deployments, Private DNS management, and Private Endpoint readiness.
- **Optimized Cloud Economics**: Implement granular budget controls and cost attribution from day one, allowing for transparent chargeback and finance alignment.

---

## 🏗️ Technical Architecture Details

### 1. High-Level Azure Foundation Architecture
```mermaid
graph TD
    Root[Tenant Root Group] --> Platform[Platform Group]
    Root --> LZ[Landing Zones Group]
    Root --> Sandbox[Sandbox Group]
    
    subgraph "Platform Services"
        Platform --> Hub[Connectivity Hub]
        Platform --> Identity[Identity Hub]
        Platform --> Mgmt[Management Hub]
    end
    
    subgraph "Landing Zone Archetypes"
        LZ --> Corp[Corp Zone]
        LZ --> Online[Online Zone]
        LZ --> SAP[SAP Zone]
    end
    
    subgraph "Orchestration Layer"
        Gov[Governance Engine]
        Vend[Subscription Engine]
        Net[Network Engine]
    end
    
    Gov --> LZ
    Vend --> LZ
    Net --> Hub
```

### 2. Subscription Vending Workflow
```mermaid
sequenceDiagram
    participant App as App Team
    participant Engine as Subscription Engine
    participant Azure as Azure ARM / Graph
    participant Net as Network Engine

    App->>Engine: Request Sub (Archetype: Corp)
    Engine->>Azure: Create Subscription
    Engine->>Azure: Place in Mgmt Group
    Engine->>Azure: Assign RBAC & Policy
    Engine->>Net: Peer to Regional Hub
    Net-->>Engine: Networking Operational
    Engine-->>App: Sub Ready (15m)
```

### 3. Management Group Hierarchy
```mermaid
graph TD
    Root[Root: Contoso]
    Root --> Plat[Platform]
    Root --> LZ[Landing Zones]
    Root --> Decom[Decommissioned]
    
    Plat --> ID[Identity]
    Plat --> Conn[Connectivity]
    Plat --> Mgmt[Management]
```

### 4. Policy Enforcement Lifecycle
```mermaid
graph LR
    Code[Policy Definition] --> Assign[Policy Assignment]
    Assign --> Audit[Non-Complaint Resource]
    Audit --> Remediate[Automated Remediation]
```

### 5. Hub-Spoke Topology
```mermaid
graph LR
    Hub[Regional Hub VPC] <--> |Peering| SpokeA[App Spoke A]
    Hub <--> |Peering| SpokeB[App Spoke B]
    Hub --- FW[Azure Firewall]
```

### 6. Security Trust Boundary
```mermaid
graph TD
    Internet[Internet] --> WAF[Azure WAF]
    WAF --> Front[App Service]
    Front --> PE[Private Endpoint]
    PE --> DB[SQL Database]
```

### 7. API Request Lifecycle
```mermaid
graph TD
    Call[GET /subscriptions] --> Auth[OIDC Verification]
    Auth --> Cache[Redis State]
    Cache --> Logic[Aggregator Service]
    Logic --> Response[Subscription JSON]
```

### 8. Multi-Tenant Capacity Model
```mermaid
graph TD
    Global[Holding Company]
    Global --> BU1[Finance Hub]
    Global --> BU2[Energy Hub]
    BU1 --> Stats[42 Subs]
```

### 9. Monitoring & Observability Flow
```mermaid
graph LR
    Sub[Subscription Actions] --> LAW[Log Analytics Central]
    LAW --> Guard[Defender for Cloud]
    Guard --> Alert[Ops Dashboard]
```

### 10. Disaster Recovery Topology
```mermaid
graph TD
    Primary[UK South Hub] <--> |Global VNET Peering| Secondary[UK West Hub]
    Primary -.->|Regional Outage| DR[Promote UK West Services]
```

### 11. Identity Federation Model
```mermaid
graph LR
    Entra[Microsoft Entra ID] --> PIM[Privileged Identity Mgmt]
    PIM --> Access[Landing Zone Access]
```

### 12. Cost Governance Workflow
```mermaid
graph TD
    Spend[Subscription Usage] --> Budget[Azure Budget Check]
    Budget --> Breach[SLA Alert to Finance]
```

### 13. Workload Onboarding Flow
```mermaid
graph LR
    New[New Project] --> Arch[Select Archetype]
    Arch --> Deploy[Vending Logic]
    Deploy --> Ready[Secure Environment]
```

### 14. CI/CD Foundation Pipeline
```mermaid
graph LR
    Git[IaC Commit] --> Check[Policy Compliance Check]
    Check --> Plan[Terraform Plan]
    Plan --> Apply[Azure Hub Update]
```

### 15. Executive Governance Workflow
```mermaid
graph TD
    Audit[Quarterly Review] --> CISO[CISO Report]
    CISO --> Update[Refine Policy Baselines]
```

### 16. Region Expansion Model
```mermaid
graph TD
    Global[Global Hub]
    Global --> Reg1[EU Node]
    Global --> Reg2[US Node]
```

### 17. Private Endpoint Lifecycle
```mermaid
graph LR
    Request[New PaaS Service] --> Create[PE Creation]
    Create --> DNS[Private DNS Registration]
    DNS --> Access[Secure Internal Access]
```

### 18. Global Region Topology
```mermaid
graph TD
    Central[Management Hub]
    Central --> R1[UK South]
    Central --> R2[East US]
```

### 19. Drift Remediation Workflow
```mermaid
graph LR
    Detect[Config Drift] --> Alert[Platform Engine Notify]
    Alert --> Apply[Terraform Auto-Sync]
```

### 20. Chargeback Model
```mermaid
graph TD
    Usage[Resource Tags] --> Cost[Cost Mgmt Exports]
    Cost --> Bill[Department Chargeback]
```

---

## 🚀 Deployment Guide

### Terraform Platform Rollout
```bash
cd terraform/environments/prd
terraform init
terraform apply -auto-approve
```

---
<sub>&copy; 2026 Devopstrio &mdash; Engineering the Scalable Foundation for the Next-Generation Enterprise Cloud.</sub>
