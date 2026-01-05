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
        Визначаємо права доступу для кожної дії.
        """
        if self.action in ["create", "login", "logout", "csrf"]:
            # Реєстрація та логін доступні всім
            return [permissions.AllowAny()]
        # Решта дій (me, list, update) потребують авторизації
        return [permissions.IsAuthenticated()]

    def get_queryset(self):
        """
        Обмежуємо доступ до даних на рівні бази.
        """
        user = self.request.user
        if user.is_authenticated:
            # Звичайний користувач бачить тільки себе.
            # Якщо ти адмін (is_staff), бачиш усіх.
            if user.is_staff:
                return User.objects.all()
            return User.objects.filter(id=user.id)
        return User.objects.none()

    @method_decorator(ensure_csrf_cookie)
    @action(detail=False, methods=["post"])
    def login(self, request):
        """
        Ендпоінт для входу. Встановлює сесійну куку.
        """
        username = request.data.get("username")
        password = request.data.get("password")

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            serializer = self.get_serializer(user)
            return Response(serializer.data)

        return Response(
            {"detail": "Невірний логін або пароль"}, status=status.HTTP_401_UNAUTHORIZED
        )

    @method_decorator(ensure_csrf_cookie)
    @action(detail=False, methods=["post"])
    def logout(self, request):
        """
        Ендпоінт для виходу. Видаляє сесію на сервері.
        """
        logout(request)
        return Response({"detail": "Вихід успішний"}, status=status.HTTP_200_OK)

    @method_decorator(ensure_csrf_cookie)
    @action(detail=False, methods=["get", "put", "patch", "delete"])
    def me(self, request):
        """
        Ендпоінт для роботи з профілем поточного користувача:
        GET /api/users/me/ -> отримати дані
        PUT /api/users/me/ -> оновити повністю
        DELETE /api/users/me/ -> видалити акаунт
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
        Допоміжний ендпоінт для отримання CSRF-токену.
        Корисно викликати при першому завантаженні React-додатка.
        """
        return Response({"detail": "CSRF cookie set", "token": get_token(request)})
