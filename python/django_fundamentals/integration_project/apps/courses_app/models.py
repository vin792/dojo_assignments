from __future__ import unicode_literals
from django.db import models
from ..login_registration.models import User


class CourseManager(models.Manager):
	def add_user_to_course(self, postData):
		user = User.objects.get(id = postData['user'])
		course = Course.objects.get(id = postData['course'])
		course.users.add(user)

	def course_counts(self):
		courses = Course.objects.all()
		course_user_counts = []
		for course in courses:
			course_id = course.id
			course_name = course.name
			course_count = course.users.count()
			course_user_counts.append([course_id, course_name, course_count])
		return course_user_counts

class Course(models.Model):
	name = models.CharField(max_length = 255)
	users = models.ManyToManyField(User, related_name="courses")
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)
	objects = CourseManager()

class Description(models.Model):
	course_id = models.OneToOneField(Course, on_delete=models.CASCADE, primary_key=True)
	description = models.TextField(max_length=2000)
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)

class Comment(models.Model):
	course_id = models.ForeignKey(Course)
	comment = models.TextField(max_length=2000)
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)


