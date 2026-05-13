from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import Policy
from .serializers import PolicySerializer

from django.http import HttpResponse

from reportlab.pdfgen import canvas

from auditlogs.utils import (
    create_audit_log
)


class PolicyViewSet(viewsets.ModelViewSet):

    queryset = Policy.objects.all().order_by(
        '-created_at'
    )

    serializer_class = PolicySerializer

    permission_classes = [IsAuthenticated]


def policy_pdf(request, pk):

    policy = Policy.objects.get(id=pk)

    response = HttpResponse(
        content_type='application/pdf'
    )

    response[
        'Content-Disposition'
    ] = (
        f'attachment; '
        f'filename="policy_{pk}.pdf"'
    )

    pdf = canvas.Canvas(response)

    pdf.drawString(
        100,
        800,
        f"Policy Number: "
        f"{policy.policy_number}"
    )

    pdf.drawString(
        100,
        780,
        f"Customer: "
        f"{policy.customer.first_name}"
    )

    pdf.drawString(
        100,
        760,
        f"Type: "
        f"{policy.policy_type}"
    )

    pdf.drawString(
        100,
        740,
        f"Status: "
        f"{policy.status}"
    )

    pdf.save()

    def perform_create(
        self,
        serializer
    ):

        policy = serializer.save()

        create_audit_log(

            user=self.request.user,

            action="create",

            model_name="Policy",

            description=(
                f"Created policy "
                f"{policy.policy_number}"
            ),
        )

        return response