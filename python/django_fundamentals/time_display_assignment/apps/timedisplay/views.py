from django.shortcuts import render
import time

def index(request):

	current_date = time.strftime("%b %d %Y")
	current_time = time.strftime("%I:%M %p")

	context = {

	"current_date": current_date,
	"current_time": current_time

	}

	return render(request, 'timedisplay/index.html', context)
