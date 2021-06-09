from django.contrib import admin
from .models import U_course, U_database, U_department, U_feedback, U_shopping
# Register your models here.

admin.site.register(U_database)
admin.site.register(U_course)
admin.site.register(U_department)
admin.site.register(U_feedback)
admin.site.register(U_shopping)