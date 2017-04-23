from django.shortcuts import render, redirect, reverse
import bcrypt
from . models import User, UserManager
from django.contrib import messages

def index(request):
	
	if 'user_id' in request.session:
		request.session.pop('user_id')

	return render(request, 'login_registration/index.html')

def success(request):

	if 'user_id' not in request.session: 
		return render(request, 'login_registration/authfail.html')
	else:
		user = User.objects.get(id=request.session['user_id'])

		context={
			'first_name': user.first_name
		}

		return render(request, 'login_registration/success.html', context)

def register(request):
	if request.method == "POST":
		register_outcome = User.objects.register(request.POST['first_name'],request.POST['last_name'],request.POST['email'],request.POST['password'],request.POST['password_confirm'],)

		if isinstance(register_outcome, tuple):
			request.session['user_id'] = register_outcome[1]
			return redirect(reverse('login:success')) 
		else:
			for error_message in register_outcome:
				messages.error(request, error_message, extra_tags='register')
			return redirect(reverse('login:index'))

def login(request):
	if request.method == "POST":
		user_login_result = User.objects.login(request.POST['email'], request.POST['password'])
		if user_login_result[0]:
			request.session['user_id'] = user_login_result[1]
			return redirect(reverse('login:success'))
		else:
			messages.error(request, user_login_result[1], extra_tags='login')
			return redirect(reverse('login:index'))
