import pytest
from fastapi.testclient import TestClient
from backend.src.main import app

# Devopstrio Azure Enterprise Landing Zone Starter
# Integration Tests for Cloud Foundation Orchestration & Subscription Vending

client = TestClient(app)

def test_health_check_operational():
    """Verify that the landing zone gateway is healthy and connected to Azure ARM."""
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json()["azure_arm_connected"] is True

def test_subscription_inventory_retrieval():
    """Ensure the platform can list enterprise subscriptions across the hierarchy."""
    response = client.get("/subscriptions")
    assert response.status_code == 200
    assert len(response.json()) > 0
    assert "fin-prod-uk-01" in [s["name"] for s in response.json()]

def test_landing_zone_deploy_initiation():
    """Verify that a Landing Zone deployment task can be correctly triggered and queued."""
    payload = {
        "name": "project-sap-migration",
        "archetype": "Corp",
        "region": "uksouth",
        "owner_email": "cloud-ops@devopstrio.com"
    }
    response = client.post("/landingzone/deploy", json=payload)
    assert response.status_code == 202
    assert "job_id" in response.json()
    assert response.json()["status"] == "Vending-Queued"

def test_governance_score_aggregation():
    """Ensure the platform retrieves and aggregates governance compliance scores."""
    response = client.get("/governance/score")
    assert response.status_code == 200
    assert response.json()["overall_compliance"] > 90

def test_network_topology_metrics():
    """Verify the platform provides hub-spoke connectivity health metrics."""
    response = client.get("/network/topology")
    assert response.status_code == 200
    assert any(h["status"] == "Connected" for h in response.json())

def test_cost_summary_reporting():
    """Ensure the platform reports monthly cloud spend and budget status."""
    response = client.get("/costs/summary")
    assert response.status_code == 200
    assert "monthly_actual" in response.json()
    assert response.json()["budget_breaches"] == 0
