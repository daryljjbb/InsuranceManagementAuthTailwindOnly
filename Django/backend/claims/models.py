from django.db import models
from policies.models import Policy
from django.conf import settings
import uuid


class Claim(models.Model):

    STATUS_CHOICES = (

        ('pending', 'Pending'),

        ('approved', 'Approved'),

        ('rejected', 'Rejected'),

        ('paid', 'Paid'),
    )

    policy = models.ForeignKey(

        Policy,

        on_delete=models.CASCADE,

        related_name='claims'
    )

    claim_number = models.CharField(
        max_length=100,
        unique=True,
        blank=True
    )

    description = models.TextField()

    claim_amount = models.DecimalField(

        max_digits=10,

        decimal_places=2
    )

    status = models.CharField(

        max_length=20,

        choices=STATUS_CHOICES,

        default='pending'
    )

    incident_date = models.DateField()

    created_at = models.DateTimeField(

        auto_now_add=True
    )

    def save(self, *args, **kwargs):

        if not self.claim_number:

            self.claim_number = (
                f"CLM-"
                f"{uuid.uuid4().hex[:8].upper()}"
            )

        super().save(
            *args,
            **kwargs
        )

    def __str__(self):

        return self.claim_number
    

class ClaimDocument(models.Model):

    claim = models.ForeignKey(

        Claim,

        on_delete=models.CASCADE,

        related_name='documents'
    )

    file = models.FileField(

        upload_to='claim_documents/'
    )

    uploaded_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):

        return (
            f"Document for "
            f"{self.claim.claim_number}"
        )
    
class ClaimNote(models.Model):

    claim = models.ForeignKey(

        Claim,

        on_delete=models.CASCADE,

        related_name='notes'
    )

    user = models.ForeignKey(
    settings.AUTH_USER_MODEL,
    on_delete=models.CASCADE
)

    note = models.TextField()

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):

        return (
            f"Note for "
            f"{self.claim.claim_number}"
        )
    
class ActivityLog(models.Model):

    ACTION_CHOICES = (
        ('created', 'Created'),
        ('updated', 'Updated'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected'),
        ('payment', 'Payment'),
        ('document_upload',
         'Document Upload'),
    )

    claim = models.ForeignKey(
        Claim,
        on_delete=models.CASCADE,
        related_name='activities'
    )

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )

    action = models.CharField(
        max_length=50,
        choices=ACTION_CHOICES
    )

    description = models.TextField()

    created_at = models.DateTimeField(
        auto_now_add=True
    )

class ActivityLog(models.Model):

    ACTION_CHOICES = (
        ('created', 'Created'),
        ('updated', 'Updated'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected'),
        ('payment', 'Payment'),
        ('document_upload',
         'Document Upload'),
    )

    claim = models.ForeignKey(
        Claim,
        on_delete=models.CASCADE,
        related_name='activities'
    )

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )

    action = models.CharField(
        max_length=50,
        choices=ACTION_CHOICES
    )

    description = models.TextField()

    created_at = models.DateTimeField(
        auto_now_add=True
    )


class ClaimAttachment(
    models.Model
):

    claim = models.ForeignKey(

        Claim,

        related_name=
        "attachments",

        on_delete=models.CASCADE
    )

    file = models.FileField(
        upload_to=
        "claim_attachments/"
    )

    uploaded_at = models.DateTimeField(
            auto_now_add=True
        )

    def __str__(self):

        return (
            f"Attachment "
            f"{self.id}"
        )