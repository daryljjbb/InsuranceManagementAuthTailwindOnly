from django.shortcuts import render
from rest_framework import viewsets

from rest_framework.permissions import (
    IsAuthenticated
)

from .models import Claim, ClaimDocument, ActivityLog, ClaimAttachment

from .serializers import ClaimSerializer, ClaimDocumentSerializer, ClaimAttachmentSerializer

from django.core.mail import send_mail


class ClaimViewSet(
    viewsets.ModelViewSet
):

    queryset = Claim.objects.all().order_by(
        '-created_at'
    )

    serializer_class = ClaimSerializer

    permission_classes = [
        IsAuthenticated
    ]

    def perform_create(self, serializer):

        claim = serializer.save()

        ActivityLog.objects.create(

            claim=claim,

            user=self.request.user,

            action='created',

            description='Claim created'
        )

        send_mail(

            subject='Claim Submitted',

            message=(
                f'Your claim '
                f'{claim.claim_number} '
                f'has been submitted.'
            ),

            from_email='admin@insurance.com',

            recipient_list=[
                claim.policy.customer.email
            ],

            fail_silently=True,
        )

class ClaimDocumentViewSet(
    viewsets.ModelViewSet
):

    queryset = ClaimDocument.objects.all()

    serializer_class = ClaimDocumentSerializer

    permission_classes = [
        IsAuthenticated
    ]

class ClaimAttachmentViewSet(

    viewsets.ModelViewSet
):

    queryset = (
        ClaimAttachment.objects.all()
    )

    serializer_class = (
        ClaimAttachmentSerializer
    )

    permission_classes = [
        IsAuthenticated
    ]