from django.shortcuts import render

# Create your views here.
def base_view(request, *args, **kwargs):
    return render(request, 'frontend/index.html')