from django.shortcuts import render, redirect, reverse
from . models import Secret, User
from django.db.models import Count


def index(request):
	if 'user_id' in request.session:
		context ={
			'user': User.objects.get(id = request.session['user_id']),
			'secrets': Secret.objects.order_by('-created_at'),
		}
		return render(request, 'secrets/index.html', context)
	else:
		return render(request, 'secrets/authfail.html')

def create(request):
	if request.method == 'POST':
		Secret.objects.create_secret(request.POST, User.objects.get(id = request.session['user_id']))
		return redirect(reverse('secrets:index'))

def destroy(request, secret_id):
	if request.method == 'POST':
		Secret.objects.delete_secret(secret_id)
		return redirect(reverse('secrets:index'))

def like(request, secret_id):
	if request.method == 'POST':
		Secret.objects.add_like(secret_id, request.session['user_id'])
		return redirect(reverse('secrets:index'))

def most_popular(request):
	context ={
			'user': User.objects.get(id = request.session['user_id']),
			'secrets': Secret.objects.most_popular_ordered()
		}
	return render(request, 'secrets/popular.html', context)
