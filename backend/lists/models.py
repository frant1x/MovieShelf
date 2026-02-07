from django.db import models
from authentication.models import User

# List visibility choices
VISIBILITY_CHOICES = [
    ("public", "Public"),
    ("private", "Private"),
]


# List model
class List(models.Model):
    name = models.CharField(null=False, blank=False)
    description = models.TextField(blank=True, null=True)
    visibility = models.CharField(
        max_length=10, choices=VISIBILITY_CHOICES, default="public"
    )
    ranked = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="lists")

    def __str__(self):
        return self.name
