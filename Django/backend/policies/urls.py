from django.urls import path

from rest_framework.routers import (
    DefaultRouter
)

from .views import (
    PolicyViewSet,
    policy_pdf
)

router = DefaultRouter()

router.register(
    r'policies',
    PolicyViewSet
)

urlpatterns = router.urls + [

    path(
        'policies/<int:pk>/pdf/',
        policy_pdf,
        name='policy-pdf'
    ),
]