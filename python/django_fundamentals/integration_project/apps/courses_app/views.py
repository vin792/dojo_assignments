from django.shortcuts import render, redirect, reverse
from . models import Course, Description, Comment, User
from django.db.models import Count

def index(request):
	courses = Course.objects.all
	context = {
		"courses": courses
	}
	return render(request, 'courses_app/index.html', context)

def create(request):
	if request.method == "POST":
		Course.objects.create(name=request.POST['name'])
		last_course_id = Course.objects.all().last()
		Description.objects.create(course_id = last_course_id ,description=request.POST['description'])
		return redirect(reverse('courses:index'))
	else:
		return redirect(reverse('courses:index'))

def show_destroy(request, course_id):
	course = Course.objects.filter(id = course_id)
	context = {
		"courses" : course,
	}
	return render(request, 'courses_app/destroy.html', context)

def destroy(request, course_id):
	if request.method == "POST":
		Course.objects.filter(id = course_id).delete()
		return redirect(reverse('courses:index'))

def user_courses(request):

	context = {
		'users': User.objects.all(),
		'courses': Course.objects.all(),
		'course_user_counts': Course.objects.course_counts()
	}

	return render(request, 'courses_app/user_courses.html', context)

def add_user_to_course(request):
	if request.method == "POST":
		print request.POST
		Course.objects.add_user_to_course(request.POST)
		return redirect(reverse('courses:user_courses'))
	
