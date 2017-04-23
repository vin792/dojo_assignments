from django.shortcuts import render, redirect, reverse
from .models import Author, Book, Review, User

def index(request):
	if 'user_id' in request.session:
		context = {
			'user': User.objects.get(id = request.session['user_id']),
			'reviews': Review.objects.order_by('-created_at')[:3],
			'books': Book.objects.all()
		}
		return render(request, "book_reviews/index.html", context)
	else:
		return render(request, "book_reviews/authfail.html")

def add_book(request):
	if 'user_id' in request.session:
		context = {
			'user': User.objects.get(id = request.session['user_id']),
			'authors': Author.objects.all()
		}
		return render(request, "book_reviews/add_book.html", context)
	else:
		return render(request, "book_reviews/authfail.html")

def create_book(request):
	if request.method == 'POST':
		user = User.objects.get(id = request.session['user_id'])
		Book.objects.create_book(request.POST, user)
		return redirect(reverse('books:index'))

def display_book(request, book_id):
	if 'user_id' in request.session:
		user = User.objects.get(id = request.session['user_id'])
		book = Book.objects.get(id = book_id)
		reviews = book.book_reviews.all()
		users_with_reviews = []
		for review in reviews:
			users_with_reviews.append(review.user_id.id)

		context = {
			'book': Book.objects.get(id = book_id),
			'user': User.objects.get(id = request.session['user_id']),
			'users_with_reviews': users_with_reviews
		}
		return render(request, "book_reviews/display_book.html", context)
	else:
		return render(request, "book_reviews/authfail.html")

def create_review(request, book_id):
	if request.method == 'POST':
		book = Book.objects.get(id = book_id)
		user = User.objects.get(id = request.session['user_id'])
		model_response = Review.objects.create_review(request.POST['review'], request.POST['rating'], book, user)
		return redirect(reverse('books:display_book', kwargs={'book_id': book_id }))

def destroy_review(request, review_id):
	if request.method == 'POST':
		review = Review.objects.get(id = review_id)
		book_id = review.book_id.id
		Review.objects.delete_review(review_id)
		return redirect(reverse('books:display_book', kwargs={'book_id': book_id }))

def display_user(request, user_id):
	if 'user_id' in request.session:
		context = {
			'selected_user': User.objects.get(id = user_id)
		}
		return render(request, "book_reviews/display_user.html", context)
	else:
		return render(request, "book_reviews/authfail.html")
