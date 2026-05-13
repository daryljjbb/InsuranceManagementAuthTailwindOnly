from django.shortcuts import render
from rest_framework import viewsets

from rest_framework.permissions import (
    IsAuthenticated
)

from .models import Invoice

from .serializers import (
    InvoiceSerializer
)

from auditlogs.utils import (
    create_audit_log
)


class InvoiceViewSet(
    viewsets.ModelViewSet
):

    queryset = (
        Invoice.objects.all()
    )

    serializer_class = (
        InvoiceSerializer
    )

    permission_classes = [
        IsAuthenticated
    ]

    def perform_create(
        self,
        serializer
    ):

        invoice = serializer.save()

        create_audit_log(

            user=self.request.user,

            action="create",

            model_name="Invoice",

            description=(
                f"Created invoice "
                f"for policy "
                f"{invoice.policy.policy_number}"
            ),
        )

    def perform_update(
        self,
        serializer
    ):

        invoice = serializer.save()

        create_audit_log(

            user=self.request.user,

            action="update",

            model_name="Invoice",

            description=(
                f"Updated invoice "
                f"#{invoice.id}"
            ),
        )

    def perform_destroy(
        self,
        instance
    ):

        create_audit_log(

            user=self.request.user,

            action="delete",

            model_name="Invoice",

            description=(
                f"Deleted invoice "
                f"#{instance.id}"
            ),
        )

        instance.delete()