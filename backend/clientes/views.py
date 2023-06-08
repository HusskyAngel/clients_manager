from rest_framework import viewsets
from django.shortcuts import render
from .serializer import ClienteSerializer
from .models import Cliente

# Create your views here.
class ClienteViewSet(viewsets.ModelViewSet):
    queryset=Cliente.objects.all()
    serializer_class=ClienteSerializer

