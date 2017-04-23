from django.shortcuts import render, redirect

# Create your views here.

def index(request):
	
	if 'count' not in request.session:
		request.session['count'] = 0

	return render(request, 'surveyform/index.html')

def survey_process(request):

	if request.method == 'POST':
		request.session['name'] = request.POST['name']
		request.session['location'] = request.POST['location']
		request.session['language'] = request.POST['language']
		request.session['comment'] = request.POST['comment']
		request.session['count'] += 1
		return redirect('/results')
	else:
		return redirect('/')

def results(request):
	return render(request, 'surveyform/results.html')
