from rest_framework import serializers
from . import models
from django.contrib.auth.models import User

class TodoSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Todo
        fields = '__all__'
class userserializers(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = ['id','username','password']

    def create(self,validated_data):
        user = User.objects.create_user(**validated_data)
        return user  