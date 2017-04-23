from flask import Flask, render_template, request, redirect, session
import random

app = Flask(__name__)
app.secret_key = 'ThisisSecret'

@app.route('/')
def index(): 
	session['number'] = random.randint(0,3)
	print session['number']
	return render_template("index.html")

@app.route('/guess', methods=['POST'])
def guess():
	session['guess'] = int(request.form['guess'])
	if(session['guess'] == session['number']):
		return redirect('/success')
	else:
		return redirect('/fail')

@app.route('/success')
def success():
	return render_template("success.html")

@app.route('/fail')
def fail():
	return render_template("fail.html")

app.run(debug=True)