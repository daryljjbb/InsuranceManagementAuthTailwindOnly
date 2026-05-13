from django.urls import path

from .views import (
    AuditTimelineView
)

urlpatterns = [

    path(
        "timeline/",
        AuditTimelineView.as_view()
    ),
]