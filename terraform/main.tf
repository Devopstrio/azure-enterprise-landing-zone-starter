# Devopstrio Azure Enterprise Landing Zone Starter
# Core Foundation Infrastructure (Terraform)
# Target: Microsoft Azure (ALZ / CAF Alignment)

terraform {
  required_version = ">= 1.5.0"
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.90"
    }
  }
}

provider "azurerm" {
  features {}
}

# 1. Management Group Hierarchy
resource "azurerm_management_group" "alz_root" {
  display_name               = "Enterprise Foundation (contoso)"
  name                       = "contoso"
  parent_management_group_id = "/providers/Microsoft.Management/managementGroups/your-root-id"
}

resource "azurerm_management_group" "platform" {
  display_name               = "Platform"
  name                       = "contoso-platform"
  parent_management_group_id = azurerm_management_group.alz_root.id
}

resource "azurerm_management_group" "landingzones" {
  display_name               = "Landing Zones"
  name                       = "contoso-landingzones"
  parent_management_group_id = azurerm_management_group.alz_root.id
}

# 2. Shared Services Resource Group (Management Hub)
resource "azurerm_resource_group" "mgmt_hub" {
  name     = "rg-mgmt-hub-uks-01"
  location = "uksouth"
  tags = {
    Environment = "Platform"
    Unit        = "Cloud-Ops"
  }
}

# 3. Centralized Log Analytics Workspace (Master Telemetry)
resource "azurerm_log_analytics_workspace" "central_law" {
  name                = "law-central-uks-01"
  location            = azurerm_resource_group.mgmt_hub.location
  resource_group_name = azurerm_resource_group.mgmt_hub.name
  sku                 = "PerGB2018"
  retention_in_days   = 30
}

# 4. Azure Policy Assignments (Enterprise Baseline)
resource "azurerm_management_group_policy_assignment" "audit_tagging" {
  name                 = "audit-tagging"
  management_group_id  = azurerm_management_group.alz_root.id
  policy_definition_id = "/providers/Microsoft.Authorization/policyDefinitions/1e30110a-5ceb-460c-a204-c1a3619c3d21" # Inherit Tag
  display_name         = "Audit Missing Resource Tags"
}

# 5. Connectivity Hub Network (Global VNET)
resource "azurerm_virtual_network" "hub_vnet" {
  name                = "vnet-hub-uks-01"
  address_space       = ["10.100.0.0/16"]
  location            = azurerm_resource_group.mgmt_hub.location
  resource_group_name = azurerm_resource_group.mgmt_hub.name
}

# 6. Azure Firewall (Centralized Perimeter)
resource "azurerm_firewall" "hub_fw" {
  name                = "afw-hub-uks-01"
  location            = azurerm_resource_group.mgmt_hub.location
  resource_group_name = azurerm_resource_group.mgmt_hub.name
  sku_name            = "AZFW_VNet"
  sku_tier            = "Premium"

  ip_configuration {
    name                 = "configuration"
    subnet_id            = azurerm_subnet.fw_subnet.id
    public_ip_address_id = azurerm_public_ip.fw_pip.id
  }
}

resource "azurerm_subnet" "fw_subnet" {
  name                 = "AzureFirewallSubnet"
  resource_group_name  = azurerm_resource_group.mgmt_hub.name
  virtual_network_name = azurerm_virtual_network.hub_vnet.name
  address_prefixes     = ["10.100.1.0/24"]
}

resource "azurerm_public_ip" "fw_pip" {
  name                = "pip-afw-hub-uks-01"
  location            = azurerm_resource_group.mgmt_hub.location
  resource_group_name = azurerm_resource_group.mgmt_hub.name
  allocation_method   = "Static"
  sku                 = "Standard"
}

# 7. PostgreSQL Platform DB (Internal Registry)
resource "azurerm_postgresql_flexible_server" "platform_db" {
  name                   = "psql-alz-starter-prd"
  resource_group_name    = azurerm_resource_group.mgmt_hub.name
  location               = azurerm_resource_group.mgmt_hub.location
  version                = "13"
  administrator_login    = "alz_admin"
  administrator_password = "secure-password-from-kv"
  storage_mb             = 32768
  sku_name               = "GP_Standard_D2s_v3"
}

# Outputs
output "root_management_group_id" {
  value = azurerm_management_group.alz_root.id
}

output "log_analytics_id" {
  value = azurerm_log_analytics_workspace.central_law.id
}
