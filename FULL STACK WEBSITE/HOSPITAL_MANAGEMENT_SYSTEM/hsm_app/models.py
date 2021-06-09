from django.db import models

# Create your models here.
class U_database(models.Model):
    username=models.CharField(max_length=122)
    fname=models.CharField(max_length=122)
    lname=models.CharField(max_length=122)

    def __str__(self):
        return f"{self.username}"
class U_department(models.Model):
    username=models.CharField(max_length=122)
    date=models.DateTimeField(auto_now_add=True)
    department=models.TextField()

    def __str__(self):
        return f"{self.username} department"
class U_feedback(models.Model):
    username=models.CharField(max_length=122)
    message=models.TextField()
    phone=models.CharField(max_length=12)
    location=models.TextField()     

    def __str__(self):
        return f"{self.username} feedback"

class U_shopping(models.Model):
    username=models.CharField(max_length=122)
    shopping=models.TextField()

    def __str__(self):
        return f"{self.username} shopping items"

class U_course(models.Model):
    username=models.CharField(max_length=122)
    course=course=models.TextField()     

    def __str__(self):
        return f"{self.username} taken course"

        