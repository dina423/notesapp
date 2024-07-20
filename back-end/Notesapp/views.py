from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import TodoSerializers,userserializers
from rest_framework.permissions import AllowAny
from .models import Todo
from django.contrib.auth.models import User
from rest_framework import generics
from django.http import JsonResponse
import json

class reg(generics.CreateAPIView):
    permission_classes =[AllowAny]
    queryset=User.objects.all()
    serializer_class = userserializers

@api_view(["POST"])
def createnotes(request):
    if request.method == 'POST':
        data = json.load(request)
        user = data['user']
        title = data['title']
        body = data['body']
        username = User.objects.get(username=user)
        notes=Todo.objects.create(user=username,title=title,body=body)
        notes.save()
        return JsonResponse({'status':'note added'},safe=False)
    
    else:
        return JsonResponse({'status':'notes not added'},safe=False)
    
@api_view(["GET"])
def viewnotes(request):
    check = Todo.objects.all()
    serializer=TodoSerializers(check,many=True)
    return Response(serializer.data)

@api_view(['DELETE'])
def removenotes(request,id):
    remove =Todo.objects.get(id=id)
    remove.delete()
    return JsonResponse({'status':'note is deleted'},safe=False)


@api_view(['PUT'])
def updatenotes(request):
    data=json.load(request)
    title=data['title']
    read=Todo.objects.get(title=title)
    up={
        'id': read.id,
        'title':data['title'],
        'body': data['body'],
        'created_at':read.created_at,
        'user':read.user.id
        
    }
   
    serializer=TodoSerializers(instance=read,data=up)

    if serializer.is_valid():
        serializer.save()
        return JsonResponse({'status':'note is updated'},safe=False)
    else:
        return JsonResponse({'status':'note has issue'},safe=False)
        

        
    
        
    
        
        
    

