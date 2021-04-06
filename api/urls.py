from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('tree',views.get_industries,name='tree'),
    path('tree/company',views.get_companies_in_industry, name='company'),
    path('tree/path',views.get_career_paths, name='paths'),
    path('before-central-node-stats',views.get_before_central_node_stats, name='before_central_node_stats'),
    path('after-central-node-stats',views.get_after_central_node_stats, name='after_central_node_stats')
]