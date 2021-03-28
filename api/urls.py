from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('tree',views.get_industries,name='tree'),
    path('tree/company',views.get_companies_in_industry, name='company'),
    path('tree/path',views.get_career_paths, name='paths')
]