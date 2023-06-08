from django.urls import path,include
from rest_framework import routers, urlpatterns
from clientes import views

router=routers.DefaultRouter()
router.register(r'clientes',views.ClienteViewSet)

urlpatterns =[
    path('',include(router.urls))
]
 
