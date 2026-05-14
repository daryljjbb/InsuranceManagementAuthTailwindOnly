from django.db import models

from invoices.models import Invoice

from claims.models import Claim

from django.db.models import Sum


class Payment(models.Model):

    invoice = models.ForeignKey(
        Invoice,
        on_delete=models.CASCADE,
        related_name="payments"
    )

    claim = models.ForeignKey(
        Claim,
        on_delete=models.SET_NULL,
        related_name="payments",
        null=True,
        blank=True
    )

    amount = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    payment_method = models.CharField(
        max_length=50,
        default="card"
    )

    reference_number = models.CharField(
        max_length=100,
        blank=True,
        null=True
    )

    payment_date = models.DateField(
        auto_now_add=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def save(self, *args, **kwargs):

        # SAVE PAYMENT FIRST
        super().save(*args, **kwargs)

        # CALCULATE TOTAL PAID
        total_paid = (

            self.invoice.payments.aggregate(
                total=Sum("amount")
            )["total"] or 0
        )

        # UPDATE INVOICE STATUS
        if total_paid >= self.invoice.amount:

            self.invoice.status = "paid"

        elif total_paid > 0:

            self.invoice.status = "partial"

        else:

            self.invoice.status = "pending"

        self.invoice.save()

    def __str__(self):

        return f"Payment #{self.id}"