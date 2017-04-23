from __future__ import unicode_literals
import re

from django.db import models  

class UserManager(models.Manager):
	def register(self, user_email):

		EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

		if len(user_email) < 2 or not EMAIL_REGEX.match(user_email): 
			print "*****Not a valid email!*****"
			return (False, "Email is not Valid!")
		else:
			print "*****Valid email!*****"
			self.create(email = user_email) 
			return (True, user_email)

class Email(models.Model):
	email = models.CharField(max_length = 255)
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)
	objects = UserManager()

