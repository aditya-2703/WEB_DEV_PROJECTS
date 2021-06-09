from django.urls import path 
from . import views

urlpatterns=[

    path("",views.index,name="index"),
    path("login",views.login,name="login"),
    path("logout",views.logout,name="logout"),  
    path("register",views.register,name="register"),
    path("after_login",views.after_login,name="after_login"),
    path("profile",views.profile,name="profile"),
    path("department",views.department,name="department"),
    path("appointment",views.appointment,name="appointment"),
    path("feedback",views.feedback,name="feedback"),
    path("blog",views.blog,name="blog"),
    path("course",views.course,name="course"),
    path("shop",views.shop,name="shop"),
    path("services",views.services,name="services"),
    path("doctor",views.doctor,name="doctor"),
    path("course_profile",views.course_profile,name="course_profile"),
    path("about_profile",views.about_profile,name="about_profile"),
    path("about_appointment",views.about_appointment,name="about_appointment"),
    path("info",views.info,name="info")
    
]