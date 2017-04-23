from django.shortcuts import render, redirect
import random, string

def index(request):
	
	random_word = ''.join(random.choice(string.lowercase) for i in range(14))

	context = {
		"random_word": random_word
	}

	if 'count' not in request.session:
		request.session['count'] = 1

	return render(request, 'randomwordgenerator/index.html', context) 

def generate(request):
	if request.method == "POST":
		request.session['count'] += 1
		return redirect('/')
	else:
		return redirect('/')