import datetime
from django.db import models
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.base_user import AbstractBaseUser, BaseUserManager


# Custom user manager
class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field must be set")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user


# Custom user model
class User(AbstractBaseUser, PermissionsMixin):
    """Custom user model that uses email as the unique identifier."""

    username = models.CharField(unique=True, max_length=30, null=True, blank=True)
    email = models.EmailField(unique=True, null=True)
    created_at = models.DateTimeField(default=datetime.datetime.now)

    USERNAME_FIELD = "email"
    objects = CustomUserManager()

    def __str__(self):
        return f"{self.email}"
