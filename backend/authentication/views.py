from django.contrib.auth import authenticate, login, logout
from django.middleware.csrf import get_token
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie
from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import User
from .serializers import UserSerializer


class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_permissions(self):
        """
        Determine permissions for each action.
        """
        if self.action in ["create", "login", "logout", "csrf"]:
            return [permissions.AllowAny()]
        return [permissions.IsAuthenticated()]

    def get_queryset(self):
        """
        Limit data access at the database level.
        """
        user = self.request.user
        if user.is_authenticated:
            return User.objects.filter(id=user.id)
        return User.objects.none()

    def create(self, request):
        """
        Endpoint for new user registration.
        """
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        login(request, user, backend="authentication.auth_backends.EmailBackend")
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    @method_decorator(ensure_csrf_cookie)
    @action(detail=False, methods=["post"])
    def login(self, request):
        """
        Endpoint for login. Sets the session cookie.
        """
        email = request.data.get("email")
        password = request.data.get("password")
        user = authenticate(request, email=email, password=password)
        if user is not None:
            login(request, user)
            serializer = self.get_serializer(user)
            return Response(serializer.data)
        return Response(
            {"detail": "Invalid email or password"}, status=status.HTTP_401_UNAUTHORIZED
        )

    @method_decorator(ensure_csrf_cookie)
    @action(detail=False, methods=["post"])
    def logout(self, request):
        """
        Endpoint for logout. Removes the session on the server.
        """
        logout(request)
        return Response({"detail": "Logout successful"}, status=status.HTTP_200_OK)

    @method_decorator(ensure_csrf_cookie)
    @action(detail=False, methods=["get", "put", "patch", "delete"])
    def me(self, request):
        """
        Endpoint for managing the current user's profile
        """
        user = request.user
        if request.method == "GET":
            serializer = self.get_serializer(user)
            return Response(serializer.data)
        elif request.method in ["PUT", "PATCH"]:
            partial = request.method == "PATCH"
            serializer = self.get_serializer(user, data=request.data, partial=partial)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data)
        elif request.method == "DELETE":
            user.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)

    @action(detail=False, methods=["get"])
    def csrf(self, request):
        """
        Helper endpoint to retrieve the CSRF token.
        """
        return Response({"detail": "CSRF cookie set", "token": get_token(request)})
