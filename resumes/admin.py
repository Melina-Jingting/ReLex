from django.contrib import admin

from .models import Resume


class ResumeAdmin(admin.ModelAdmin):
    list_display = ('skills', 'experience')

admin.site.register(Resume, ResumeAdmin)