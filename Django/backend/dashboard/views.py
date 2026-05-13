from django.shortcuts import render
from rest_framework.views import APIView

from rest_framework.response import Response

from rest_framework.permissions import IsAuthenticated

from customers.models import Customer

from policies.models import Policy

from claims.models import Claim

from invoices.models import Invoice

from payments.models import Payment

from django.db.models import Sum

from django.db.models.functions import TruncMonth

from django.db.models import Count

class DashboardMetricsView(APIView):

    permission_classes = [
        IsAuthenticated
    ]

    def get(self, request):

        total_customers = (
            Customer.objects.count()
        )

        total_policies = (
            Policy.objects.count()
        )

        pending_claims = (
            Claim.objects.filter(
                status="pending"
            ).count()
        )

        total_revenue = (
            Payment.objects.aggregate(
                total=Sum("amount")
            )["total"] or 0
        )

        outstanding_invoices = (
            Invoice.objects.filter(
                status="unpaid"
            ).count()
        )

        return Response({

            "customers":
                total_customers,

            "policies":
                total_policies,

            "claims":
                pending_claims,

            "revenue":
                total_revenue,

            "outstanding_invoices":
                outstanding_invoices,
        })
    
class RevenueAnalyticsView(APIView):

    permission_classes = [
        IsAuthenticated
    ]

    def get(self, request):

        revenue = (

            Payment.objects
            .annotate(
                month=TruncMonth(
                    "payment_date"
                )
            )
            .values("month")
            .annotate(
                revenue=Sum("amount")
            )
            .order_by("month")
        )

        data = [

            {
                "month":
                    item["month"].strftime("%b"),

                "revenue":
                    item["revenue"]
            }

            for item in revenue
        ]

        return Response(data)
    
class ClaimsAnalyticsView(APIView):

    permission_classes = [
        IsAuthenticated
    ]

    def get(self, request):

        claims = (

            Claim.objects
            .values("status")
            .annotate(
                total=Count("id")
            )
        )

        return Response(claims)
    

class PolicyAnalyticsView(APIView):

    permission_classes = [
        IsAuthenticated
    ]

    def get(self, request):

        policies = (

            Policy.objects
            .annotate(
                month=TruncMonth(
                    "created_at"
                )
            )
            .values("month")
            .annotate(
                total=Count("id")
            )
            .order_by("month")
        )

        data = [

            {
                "month":
                    item["month"].strftime("%b"),

                "policies":
                    item["total"]
            }

            for item in policies
        ]

        return Response(data)
    

class InvoiceAnalyticsView(APIView):

    permission_classes = [
        IsAuthenticated
    ]

    def get(self, request):

        invoices = (

            Invoice.objects
            .values("status")
            .annotate(
                total=Count("id")
            )
        )

        return Response(invoices)