from django.shortcuts import render
from rest_framework.views import APIView

from rest_framework.response import Response

from rest_framework.permissions import (
    IsAuthenticated
)

from .models import AuditLog

from .serializers import (
    AuditLogSerializer
)


class AuditTimelineView(APIView):

    permission_classes = [
        IsAuthenticated
    ]

    def get(self, request):

        logs = (
            AuditLog.objects
            .order_by("-created_at")[:20]
        )

        serializer = AuditLogSerializer(
                logs,
                many=True
            )

        return Response(
            serializer.data
        )