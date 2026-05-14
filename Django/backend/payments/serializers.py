from decimal import Decimal

from django.db.models import Sum

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

    def validate(self, data):

        invoice = data["invoice"]

        payment_amount = Decimal(
            data["amount"]
        )

        total_paid = (

            invoice.payments.aggregate(
                total=Sum("amount")
            )["total"] or 0
        )

        remaining_balance = (
            invoice.amount - total_paid
        )

        # BLOCK OVERPAYMENT
        if payment_amount > remaining_balance:

            raise serializers.ValidationError(

                {
                    "amount":

                    f"Payment exceeds remaining balance of ${remaining_balance}."
                }
            )

        return data