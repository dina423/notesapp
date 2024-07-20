from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView

urlpatterns = [
 
   path('create/', views.createnotes, name='create'),
   path('viewnote/',views.viewnotes,name='view'),
   path('register/',views.reg.as_view(),name='register'),
   path('delete/<id>',views.removenotes,name='delete'),
   path('update/',views.updatenotes),
   path('login/token',TokenObtainPairView.as_view()),
   path('refresh/token',TokenRefreshView.as_view())
]