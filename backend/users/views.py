from .serializers import UserSerializer
from rest_framework import viewsets
from django.shortcuts import render
from .models import User


class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
