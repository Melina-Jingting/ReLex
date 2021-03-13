from django.urls import path
from .views import base_view

urlpatterns = [
    path('', base_view),
    path('/discover', base_view)
]
