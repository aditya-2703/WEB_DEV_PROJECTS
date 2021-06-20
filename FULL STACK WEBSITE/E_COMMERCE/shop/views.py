from django.shortcuts import render
from django.core.paginator import Paginator
from .models import Products,Order

# Create your views here.
def index(request):
    product_obj=Products.objects.all()
    # print("---",request.GET)
    item=request.GET.get('item_name')
    # print(item)
    if item!= '' and item is not None:
        product_obj=product_obj.filter(title__icontains=item)
    
    paginator = Paginator(product_obj,4)
    page=request.GET.get('page')
    product_obj  = paginator.get_page(page)
    
    return render(request,'shop/index.html',{'product_list':product_obj})

def detail(request,id):
    product_object = Products.objects.get(id=id)
    return render(request,'shop/detail.html',{"product_obj":product_object})

def checkout(request):
    checkout=False
    if request.method=="POST":
        name = request.POST.get('name',"")
        email = request.POST.get('email',"")
        address = request.POST.get('address',"")
        state = request.POST.get('state',"")
        zip = request.POST.get('zip',"")
        items= request.POST.get('items',"")
        total = request.POST.get('total_price',"")
        lastname=request.POST.get('lastname',"")
        print("total is ", request.POST.get('total_price',""))
        order = Order(items=items,name=name,lastname=lastname,email=email,address=address,state=state,zip=zip,total=total)
        order.save()    
        checkout=True
        # return render(request,'shop/checkout.html',context={'checkout':True})
    return render(request,'shop/checkout.html',context={'checkout':checkout})