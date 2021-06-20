from django.db import models
from django.db.models.fields import EmailField
from django.db.models.fields.files import ImageField

# Create your models here.
class Products(models.Model):
    title=models.CharField(max_length=200)
    price=models.FloatField()
    discount_price=models.FloatField()
    category=models.CharField(max_length=200)
    discription=models.TextField()
    image=models.CharField(max_length=500)

    # def __str__(self):
    #     return f"{self.category} -> {self.title}"

class Order(models.Model):
    items = models.CharField(max_length=1000)
    name =  models.CharField(max_length=200)
    lastname=models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    address = models.TextField(max_length=1000)
    state = models.CharField(max_length=200)
    zip =   models.CharField(max_length=200)
    total = models.CharField(max_length=200)
    

    def __str__(self):
        return f"{self.name} has order with price {self.total}"