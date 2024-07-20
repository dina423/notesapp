from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Todo(models.Model):
    user = models.ForeignKey(User ,on_delete=models.CASCADE)
    title = models.CharField(max_length=256)
    body = models.TextField(max_length=600,null=False,blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
    