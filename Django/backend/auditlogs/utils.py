from .models import AuditLog


def create_audit_log(

    user,

    action,

    model_name,

    description,
):

    AuditLog.objects.create(

        user=user,

        action=action,

        model_name=model_name,

        description=description,
    )