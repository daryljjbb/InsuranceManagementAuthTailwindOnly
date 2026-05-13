from rest_framework import serializers

from .models import Payment


class PaymentSerializer(
    serializers.ModelSerializer
):

    invoice_id = serializers.IntegerField(
        source="invoice.id",
        read_only=True
    )

    customer_name = serializers.CharField(
        source=
        "invoice.policy.customer.first_name",
        read_only=True
    )

    policy_number = serializers.CharField(
        source=
        "invoice.policy.policy_number",
        read_only=True
    )

    class Meta:

        model = Payment

        fields = "__all__"