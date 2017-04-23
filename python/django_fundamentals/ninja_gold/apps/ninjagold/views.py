from django.shortcuts import render, redirect
import random
import datetime

# Create your views here.

def index(request):

	# to reset session, uncomment line below
	# request.session.clear()
	
	if 'gold' not in request.session:
		request.session['gold'] = 0

	if 'activity' not in request.session:
		request.session['activity'] = []

	return render(request, 'ninjagold/index.html')

def process_money(request, place):
	if request.method == 'POST':
		if place == "farm":
			winnings = random.randint(10,20)
		elif place == "cave":
			winnings = random.randint(5,10)
		elif place == "house":
			winnings = random.randint(2,5)
		elif place == "casino":
			winnings = random.randint(-50,50)
		else: 
			winnings = 0

		request.session['gold'] += winnings

		if winnings >= 0:
			request.session['activity'].insert(0, ("Earned "+str(winnings)+" Golds from the "+place+"! "+str(('{:%Y/%m/%d %I:%M %p}'.format(datetime.datetime.now()))), "text-success"))
		else:
			request.session['activity'].insert(0, ("Entered a casino and lost "+str(abs(winnings))+" Golds... Ouch..."+str(('{:%Y/%m/%d %I:%M %p}'.format(datetime.datetime.now()))), "text-danger"))

		return redirect('/')
	else: 
		return redirect('/')
