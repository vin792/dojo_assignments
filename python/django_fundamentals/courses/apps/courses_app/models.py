from __future__ import unicode_literals
from django.db import models


class Course(models.Model):
	name = models.CharField(max_length = 255)
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)

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


