from rest_framework import permissions, viewsets
from .serializers import ListSerializer
from .models import List
from django.db.models import Q


class IsOwnerOrPublicReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow owners of an object to edit it,
    while allowing read-only access to public objects.
    """

    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        return request.user and request.user.is_authenticated

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return obj.visibility == "public" or obj.user == request.user
        return obj.user == request.user


class ListView(viewsets.ModelViewSet):
    queryset = List.objects.all()
    serializer_class = ListSerializer
    permission_classes = [IsOwnerOrPublicReadOnly]

    def get_queryset(self):
        """Limit data access at the database level."""
        queryset = List.objects.select_related("user").all()
        user = self.request.user
        if user.is_authenticated:
            if self.request.query_params.get("mine") == "true":
                return queryset.filter(user=user)
            return queryset.filter(Q(visibility="public") | Q(user=user))
        return queryset.filter(visibility="public")
