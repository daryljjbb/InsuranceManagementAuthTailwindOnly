from django.shortcuts import render
from rest_framework import viewsets, filters
from rest_framework.permissions import IsAuthenticated


from .models import Customer
from .serializers import CustomerSerializer


class CustomerViewSet(viewsets.ModelViewSet):

    queryset = Customer.objects.all().order_by(
        '-created_at'
    )

    serializer_class = CustomerSerializer

    permission_classes = [IsAuthenticated]

    # SEARCH SUPPORT
    filter_backends = [filters.SearchFilter]

    search_fields = [
        'first_name',
        'last_name',
        'email',
        'phone_number',
    ]