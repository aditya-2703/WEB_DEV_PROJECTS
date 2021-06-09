from django.http.response import HttpResponse
from django.shortcuts import redirect, render
from django.contrib.auth import authenticate,logout
from django.contrib.auth import login as dj_login
from django.contrib.auth import logout as dj_logout
from django.contrib.auth.models import User
from .models import U_database
from .models import U_course
from .models import U_department
from .models import U_feedback
from .models import U_shopping
from newsapi import NewsApiClient
import newsapi
import random

username=""

# Create your views here.
def index(request):
    return render(request,'index.html')

def login(request):
    global username
    if request.method=="POST":
        loginuname=request.POST['uname']
        loginpassword=request.POST['password']
        
        username+=loginuname

        user=authenticate(username=loginuname,password=loginpassword)


        if user is not None:
            dj_login(request,user)
            return render(request,'after_login.html',{'uname':loginuname,'msg':"Successfully logged in"})
        else:
            return render(request,'',"please try again")

    return render(request,'login.html')

def logout(request):
    dj_logout(request)
    global username
    username=""
    return render(request,'index.html')
def after_login(request):
    if request.method=="POST":
        return render(request,'after_login.html',{"uname":username})
def register(request):
    if request.method=="POST":
        username=request.POST["uname"]
        password=request.POST["password"]
        fname=request.POST["fname"]
        lname=request.POST["lname"]

    
        object_database=U_database(username=username,fname=fname,lname=lname)
        object_database.save()
        myuser=User.objects.create_user(username=username,password=password)
        myuser.first_name=fname
        myuser.last_name=lname
        myuser.save()
        return render(request,'login.html',{'msg':"Registered Successfully"})
    return render(request,'register.html')

def profile(request):

    return render(request,'profile.html')

def department(request):
    return render(request,"department.html")
def appointment(request):

    if request.method=="POST":
        depart=request.POST['department']
        department_object=U_department(username=username,department=depart)
        department_object.save()
        return render(request,'after_login.html',{'uname':username,'msg':"Successfully logged in"})
    
    return render(request,'appointment.html')

def feedback(request):
    if request.method=="POST":
        global username
        message=request.POST['desc']
        phone=request.POST['phone']
        location=request.POST['location']
        feedback_object=U_feedback(username=username,message=message,phone=phone,location=location)
        feedback_object.save()
        return render(request,'after_login.html',{'uname':username,"msg":"successfully submited feedback"})

def blog(request):
    newsapi = NewsApiClient(api_key='dae117742ecb4bdbaa3d57412f02bf60')
    list_artical=["hospital","health","covid","nutrition","doctor","healthcare"]    
    query=random.choice(list_artical)
    author=[]
    title=[]
    url=[]
    image=[]
    content=[]
    
    all_articles = newsapi.get_everything(q=query,
                                      sources='bbc-news,the-verge',
                                      domains='bbc.co.uk,techcrunch.com',
                                      language='en',
                                      sort_by='relevancy',
                                      page=2)

    for j in all_articles:
        for i in all_articles["articles"]:
            a=i["author"]
            t=i["title"]
            u=i["url"]
            c=i["content"]
            i=i["urlToImage"]
            author.append(a)
            title.append(t)
            url.append(u)
            content.append(c)
            image.append(i)    
    return render(request,'update.html',{'author0':author[0],'title0':title[0],'url0':url[0],'content0':content[0],'image0':image[0],'author1':author[1],'title1':title[1],'url1':url[1],'content1':content[1],'image1':image[1],'author2':author[2],'title2':title[2],'url2':url[2],'content2':content[2],'image2':image[2]
    })

def course(request):
    if request.method=="POST":
        global username
        course=request.POST['course']
        course_object=U_course(username=username,course=course)
        course_object.save()
        return render(request,'after_login.html')

    return render(request,"course.html",{"uname":username})

def shop(request):
    if request.method=="POST":
        return render(request,'after_login.html',{"uname":username})
    return render(request,'shopping.html',{'uname':username})

def services(request):
    return render(request,'service.html')

def doctor(request):
    return render(request,"doctor.html")

def course_profile(request):
    user=U_course.objects.all()
    return render(request,"profile.html",{"uname":username,'data':user})

def about_profile(request):
    detail=U_database.objects.all()
    return render(request,'profile.html',{"uname":username,'details':detail})

def about_appointment(request):
    global username
    app=U_department.objects.all()
    return render(request,'profile.html',{"usr":username,'apointment':app})

def info(request):
    return render(request,'info.html')