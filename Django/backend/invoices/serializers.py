from rest_framework import serializers

from .models import Invoice


class InvoiceSerializer(
    serializers.ModelSerializer
):

    customer_name = serializers.CharField(
            source=
            "policy.customer.first_name",
            read_only=True
        )

    policy_number = serializers.CharField(
            source=
            "policy.policy_number",
            read_only=True
        )

    class Meta:

        model = Invoice

        fields = "__all__"