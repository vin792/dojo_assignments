from __future__ import unicode_literals
from ..login_registration.models import User

from django.db import models

class BookManager(models.Manager):
	def create_book(self, postData, user):
		if postData['existing_author'] == "ignore":
			new_author = Author.objects.create_author(postData['new_author'])
			new_book = self.create(title=postData['title'],author_id=new_author)
			new_review = Review.objects.create_review(postData['review'], postData['rating'], new_book, user)
		else:
			new_book = self.create(title=postData['title'],author_id=postData[author])
			new_review = Review.objects.create_review(postData['review'], postData['rating'], new_book, user)

class ReviewManager(models.Manager):
	def create_review(self, review, rating, book, user):
		new_review = self.create(text = review, rating = rating, book_id = book, user_id=user)
		return new_review

	def delete_review(self, review_id):
		self.filter(id = review_id).delete()

class AuthorManager(models.Manager):
	def create_author(self, author):
		new_author = self.create(name=author)
		return new_author

class Author(models.Model):
	name = models.CharField(max_length = 255)
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)
	objects = AuthorManager()


class Book(models.Model):
	title = models.CharField(max_length = 255)
	author_id = models.ForeignKey(Author, related_name = "books_written")
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)
	objects = BookManager()

class Review(models.Model):
	text = models.TextField()
	rating = models.IntegerField()
	book_id = models.ForeignKey(Book, related_name="book_reviews")
	user_id = models.ForeignKey(User, related_name="user_reviews")
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)
	objects = ReviewManager()



