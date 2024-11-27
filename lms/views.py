from django.shortcuts import render

# Create your views here.

def index(request):
    res = "Hello World!" 
    return render(request,"lms/index.html",{"res": res}) 