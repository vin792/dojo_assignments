from django.shortcuts import render, redirect
from . models import Course, Description, Comment

def index(request):
	
	courses = Course.objects.all

	context = {
		"courses": courses
	}

	return render (request, 'courses_app/index.html', context)

def create(request):
	if request.method == "POST":

		Course.objects.create(name=request.POST['name'])

		last_course_id = Course.objects.all().last()

		Description.objects.create(course_id = last_course_id ,description=request.POST['description'])

		return redirect('/')
	else:
		return redirect('/')

def show_destroy(request, course_id):

	course = Course.objects.filter(id = course_id)

	context = {
		"courses" : course,
	}

	return render(request, 'courses_app/destroy.html', context)

def destroy(request, course_id):

	if request.method == "POST":
		Course.objects.filter(id = course_id).delete()
		return redirect('/')
	
