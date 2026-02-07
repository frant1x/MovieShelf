from django.urls import include, path

urlpatterns = [
    path("auth/", include("authentication.urls")),
    path("lists/", include("lists.urls")),
]
