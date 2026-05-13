
from rest_framework import viewsets

from rest_framework.permissions import (
    IsAuthenticated
)

from .models import Payment

from .serializers import PaymentSerializer


class PaymentViewSet(
    viewsets.ModelViewSet
):

    queryset = Payment.objects.all().order_by(
        '-created_at'
    )

    serializer_class = PaymentSerializer

    permission_classes = [
        IsAuthenticated
    ]