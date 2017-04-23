from flask import Flask, render_template, request, redirect, session
import random
import datetime

app = Flask(__name__)
app.secret_key = 'ThisisSecret'

@app.route('/')
def index(): 
	try:
		isinstance(session['money_count'], int)
	except KeyError:
		session['money_count'] = 0

	try:
		isinstance(session['message'], str)
	except KeyError:
		session['message'] = []

	return render_template("index.html")

@app.route('/process_money', methods=['POST'])
def process_money():

	if request.form['building'] == "farm":
		session['add_money'] = random.randint(10,21)
		session['money_count'] += session['add_money']
		session['new_string'] = "Earned "+str(session['add_money'])+" from the farm! "+str(('Timestamp: {:%Y-%b-%d %H:%M:%S}'.format(datetime.datetime.now())))
	elif request.form['building'] == "cave":
		session['add_money'] = random.randint(5,11)
		session['money_count'] += session['add_money']
		session['new_string'] = "Earned "+str(session['add_money'])+" from the cave! "+str(('Timestamp: {:%Y-%b-%d %H:%M:%S}'.format(datetime.datetime.now())))
	elif request.form['building'] == "house":
		session['add_money'] = random.randint(2,6)
		session['money_count'] += session['add_money']
		session['new_string'] = "Earned "+str(session['add_money'])+" from the house! "+str(('Timestamp: {:%Y-%b-%d %H:%M:%S}'.format(datetime.datetime.now())))
	elif request.form['building'] == "casino":
		session['add_money'] = random.randint(-50,51)
		session['money_count'] += session['add_money']
		if session['add_money'] >= 0: 
			session['new_string'] = "Earned "+str(session['add_money'])+" from the casino! "+str(('Timestamp: {:%Y-%b-%d %H:%M:%S}'.format(datetime.datetime.now())))
		else:
			session['new_string'] = "Entered a casino and lost "+str(session['add_money'])+"...ouch! "+str(('Timestamp: {:%Y-%b-%d %H:%M:%S}'.format(datetime.datetime.now())))

	session['message'].insert(0, session['new_string'])

	return redirect ('/')

@app.route('/reset', methods=['POST'])
def reset():
	session ['money_count'] = 0
	session['message'] = []
	return redirect ('/')

app.run(debug=True)