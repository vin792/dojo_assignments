from django.shortcuts import render, redirect
from . models import Email, UserManager

def index(request):

	if 'valid_email' not in request.session:
		request.session['valid_email'] = True

	return render(request, 'emailvalidation/index.html')

def emails(request):

	emails = Email.objects.all()

	last_email = Email.objects.all().last()

	context = {
		"emails": emails,
		"last_email": last_email
	}

	return render(request, 'emailvalidation/emails.html', context)

def create(request):
	if request.method == 'POST':

		user_added = Email.objects.register(request.POST['email'])

		if user_added[0]:
			return redirect('/emails')
		else:
			request.session['valid_email'] = False
			return redirect('/')
		
	else:
		return redirect('/')

def destroy(request, email_id):
	if request.method == 'POST':
		Email.objects.filter(id = email_id).delete()
		print "object deleted"
	return redirect('/emails')