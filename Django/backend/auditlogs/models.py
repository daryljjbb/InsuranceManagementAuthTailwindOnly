from django.db import models

from django.conf import settings


class AuditLog(models.Model):

    ACTION_CHOICES = [

        ("create", "Create"),

        ("update", "Update"),

        ("delete", "Delete"),

        ("payment", "Payment"),

        ("claim", "Claim"),

        ("login", "Login"),
    ]

    user = models.ForeignKey(

        settings.AUTH_USER_MODEL,

        on_delete=models.SET_NULL,

        null=True,

        blank=True,
    )

    action = models.CharField(
        max_length=50,
        choices=ACTION_CHOICES,
    )

    model_name = models.CharField(
        max_length=100
    )

    description = models.TextField()

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):

        return (
            f"{self.user} - "
            f"{self.action}"
        )