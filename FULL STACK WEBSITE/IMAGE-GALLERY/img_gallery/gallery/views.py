from django.shortcuts import redirect, render
from .models import *

# Create your views here.
def index(request):
    category = request.GET.get('category')
    if category == None:
        photos = Photo.objects.all()
    else:
        photos = Photo.objects.filter(category__name=category) 

    category = Category.objects.all()
    contex={'categories':category,'photos':photos}
    return render(request,'index.html',contex)

def addphoto(request):
    category = Category.objects.all()
    if request.method == 'POST':
        data=request.POST
        desc = request.POST.get('desc')
        image = request.FILES.get('image')

        if data['category'] != 'none':
            category = Category.objects.get(id=data['category'])
        elif data['category_new'] != '':
            category,created = Category.objects.get_or_create(name=data['category_new'])
        else:
            category=None
        photo = Photo.objects.create(category=category,description=desc,image=image)
        
        return redirect('index')
    contex={'categories':category}
    return render(request,'addphoto.html',contex)

def viewphoto(request,pk):
    photo = Photo.objects.get(id=pk)
    return render(request,'viewphoto.html',{'photo':photo})