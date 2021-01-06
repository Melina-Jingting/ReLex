from django.db import models

# Create your models here.
class Resume(models.Model):
    skills = models.CharField(max_length=255)
    experience = models.CharField(max_length=255)