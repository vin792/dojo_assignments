from __future__ import unicode_literals
from django.db import models

class ProductManager(models.Manager):
	def add_product(self, postData):
		errors = []

		if len(postData['name']) < 1:
			errors.append("Name cannot be blank")
		if len(postData['description']) < 1: 
			errors.append("Description cannot be blank")
		if not postData['price'] or float(postData['price']) <= 0.0:
			errors.append("Price must be greater than 0")

		if errors:
			return (False, errors)
		else:
			product = self.create(name = postData['name'], description = postData['description'], price = postData['price'])
			return (True, product)

	def remove_product(self, product_id):
		self.filter(id = product_id).delete()

	def update_product(self, postData, product_id):
		errors = []

		if len(postData['name']) < 1:
			errors.append("Name cannot be blank")
		if len(postData['description']) < 1: 
			errors.append("Description cannot be blank")
		if not postData['price'] or float(postData['price']) <= 0.0:
			errors.append("Price must be greater than 0")

		if errors:
			return (False, errors)
		else:
			self.filter(id = product_id).update(name = postData['name'], description = postData['description'], price = postData['price'])
			return (True, "item updated")

class Product(models.Model):
	name = models.CharField(max_length = 255)
	description = models.TextField(max_length = 1000)
	price = models.FloatField()
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)
	objects = ProductManager()
