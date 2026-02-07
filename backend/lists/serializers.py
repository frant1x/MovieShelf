from rest_framework import serializers
from .models import List


class ListSerializer(serializers.ModelSerializer):

    class Meta:
        model = List
        fields = "__all__"
        read_only_fields = ["id", "created_at", "updated_at", "user"]

    def create(self, validated_data):
        validated_data["user"] = self.context["request"].user
        return super().create(validated_data)
