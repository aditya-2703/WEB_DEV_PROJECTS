from django.urls import path
from . import views

urlpatterns = [
    path('',views.index,name="index"),
    path('viewphoto/<str:pk>/',views.viewphoto,name="viewphoto"),
    path('addphoto',views.addphoto,name='addphoto'),
]