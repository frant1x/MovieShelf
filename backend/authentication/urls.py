from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r"auth", views.UserView)

app_name = "authentication"
urlpatterns = [
    path("", include(router.urls)),
]
