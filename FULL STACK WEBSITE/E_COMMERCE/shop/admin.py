from django.contrib import admin
from . import models

# Register your models here.
admin.site.site_header = "E-commerce"
admin.site.site_title = "ABC shopping"
admin.site.index_title = "Manage shopping"

class ProductAdmin(admin.ModelAdmin):
    list_display = ('title','price','discount_price','category','discription')
    search_fields = ('title','category',)
admin.site.register(models.Products,ProductAdmin)
admin.site.register(models.Order)