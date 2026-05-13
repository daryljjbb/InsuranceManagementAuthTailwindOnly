from rest_framework import serializers

from .models import Policy
from invoices.serializers import InvoiceSerializer
from claims.serializers import (
    ClaimSerializer
)
class PolicySerializer(
    serializers.ModelSerializer
):

    invoices = InvoiceSerializer(
    many=True,
    read_only=True
)
    
    claims = ClaimSerializer(
            many=True,
            read_only=True
        )
    customer_name = serializers.CharField(
            source=
            'customer.first_name',
            read_only=True
        )

    class Meta:

        model = Policy

        fields = '__all__'