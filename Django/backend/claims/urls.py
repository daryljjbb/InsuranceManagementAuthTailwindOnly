from rest_framework.routers import (
    DefaultRouter
)

from .views import ClaimViewSet,ClaimDocumentViewSet,ClaimAttachmentViewSet


router = DefaultRouter()

router.register(
    r'claims',
    ClaimViewSet
)

router.register(
    r'claim-documents',
    ClaimDocumentViewSet
)

router.register(

    r'claim-attachments',

    ClaimAttachmentViewSet,

    basename='claim-attachment'
)

urlpatterns = router.urls