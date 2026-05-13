from django.urls import path

from .views import (

    DashboardMetricsView,

    RevenueAnalyticsView,

    ClaimsAnalyticsView,

    PolicyAnalyticsView,

    InvoiceAnalyticsView,
)

urlpatterns = [

    path(
        "metrics/",
        DashboardMetricsView.as_view()
    ),

    path(
        "revenue/",
        RevenueAnalyticsView.as_view()
    ),

    path(
        "claims/",
        ClaimsAnalyticsView.as_view()
    ),

    path(
        "policies/",
        PolicyAnalyticsView.as_view()
    ),

    path(
    "invoices/",
    InvoiceAnalyticsView.as_view()
    ),
]