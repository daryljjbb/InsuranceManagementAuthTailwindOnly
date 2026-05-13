from rest_framework import serializers
from .models import Customer
from policies.serializers import (
    PolicySerializer
)


class CustomerSerializer(serializers.ModelSerializer):
    policies =PolicySerializer(
        many=True,
        read_only=True
    )
    class Meta:
        model = Customer

        fields = "__all__"