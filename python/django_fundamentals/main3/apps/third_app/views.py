from django.shortcuts import render
from . models import People

# Create your views here.

def index(request):
	People.objects.create(first_name = "testfirst", last_name = "testlast")
	people = People.objects.all()
	print people
	return render(request, 'third_app/index.html')
