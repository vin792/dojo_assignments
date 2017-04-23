from django.shortcuts import render, HttpResponse

def index(request):
	print("*"*80)
	return render(request, 'vinmvc/index.html')
