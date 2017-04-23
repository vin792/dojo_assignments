from django.shortcuts import render, redirect

def index(request):
	return render(request, 'vinmymvc/index.html')

def show(request):
	print(request.method)
	return render(request, 'vinmymvc/show_users.html')

def create(request):
	if request.method == "POST":
		print "*"*50
		print request.method
		print request.POST
		request.session['first_name'] = request.POST['first_name']
		print "*"*50
		return redirect ('/')
	else:
		return redirect ('/')
