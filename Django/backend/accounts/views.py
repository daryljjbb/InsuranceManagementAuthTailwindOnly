from django.shortcuts import render
from rest_framework import generics
from .serializers import RegisterSerializer
from .models import User
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer


class ProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):

        user = request.user

        # SUPERUSER OVERRIDE
        if user.is_superuser:
            role = "admin"

        else:
            role = user.role

        return Response({
            "username": user.username,
            "email": user.email,
            "role": role,
        })