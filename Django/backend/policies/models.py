from django.db import models

from customers.models import Customer


class Policy(models.Model):

    POLICY_TYPES = (
        ('auto', 'Auto'),
        ('home', 'Home'),
        ('life', 'Life'),
    )

    STATUS_CHOICES = (
        ('active', 'Active'),
        ('expired', 'Expired'),
        ('pending', 'Pending'),
    )

    customer = models.ForeignKey(
        Customer,
        on_delete=models.CASCADE,
        related_name='policies'
    )

    policy_number = models.CharField(
        max_length=100,
        unique=True
    )

    policy_type = models.CharField(
        max_length=20,
        choices=POLICY_TYPES
    )

    premium = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    start_date = models.DateField()

    end_date = models.DateField()

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='active'
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):

        return (
            f"{self.policy_number} - "
            f"{self.customer}"
        )