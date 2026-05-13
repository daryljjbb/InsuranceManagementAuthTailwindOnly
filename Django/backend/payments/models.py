from django.db import models

from invoices.models import Invoice

from claims.models import Claim


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

    def __str__(self):

        return f"Payment #{self.id}"