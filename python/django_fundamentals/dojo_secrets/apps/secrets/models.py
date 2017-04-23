from __future__ import unicode_literals
from ..login_registration.models import User
from django.db import models
from django.db.models import Count

class SecretManager(models.Manager):
	def create_secret(self, postData, user_id):
		self.create(user_id = user_id, post = postData['post'])

	def add_like(self, secret_id, user_id):
		user = User.objects.get(id = user_id)
		secret = Secret.objects.get(id = secret_id)
		secret.likes.add(user)

	def delete_secret(self, secret_id):
		self.filter(id = secret_id).delete()

	def most_popular_ordered(self):
		secrets = Secret.objects.all()

		all_secrets = []
		
		for secret in secrets:
			all_secrets.append((secret, secret.likes.count()))

		all_secrets.sort(key = lambda tup:tup[1], reverse = True)

		return all_secrets
		

class Secret(models.Model):
	user_id = models.ForeignKey(User, related_name = "secrets")
	post = models.TextField(max_length = 1500)
	likes = models.ManyToManyField(User, related_name="likes")
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)
	objects = SecretManager()