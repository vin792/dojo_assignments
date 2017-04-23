from flask import Flask, render_template, request, redirect, flash, session
import re
import time
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
NAME_REGEX = re.compile(r'[0-9]')
PASSWORD_REGEX = re.compile(r'[a-z]')
app = Flask(__name__)
app.secret_key = "ThisisSecret"

@app.route('/')
def index():

	return render_template("index.html")

@app.route('/results', methods=['POST'])
def results():

	session["form_status"] = "success"

	#email validation
	if len(request.form["email"]) < 1:
		flash("Email cannot be blank", "email_check")
		session["form_status"] = "fail"
	elif not EMAIL_REGEX.match(request.form['email']):
		flash("Invalid Email Address", "email_check")
		session["form_status"] = "fail"
	else:
		session["email"] = request.form["email"]

	#first name validation
	if len(request.form["first_name"]) < 1:
		flash("First name cannot be blank", "first_name_check")
		session["form_status"] = "fail"
	elif NAME_REGEX.match(request.form['first_name']):
		flash("First name cannot have numbers", "first_name_check")
		session["form_status"] = "fail"
	else:
		session["first_name"] = request.form["first_name"]

	#last name validation
	if len(request.form["last_name"]) < 1:
		flash("Last name cannot be blank", "last_name_check")
		session["form_status"] = "fail"
	elif NAME_REGEX.match(request.form['last_name']):
		flash("Last name cannot have numbers", "last_name_check")
		session["form_status"] = "fail"
	else:
		session["last_name"] = request.form["last_name"]

	#password validation
	if len(request.form["password"]) < 8:
		flash("Password cannot be blank", "password_check")
		session["form_status"] = "fail"
	elif PASSWORD_REGEX.match(request.form['password']):
		flash("Password must have 1 uppercase and 1 number", "password_check")
		session["form_status"] = "fail"
	else:
		session["password"] = request.form["password"]

	#confirm_password validation
	if len(request.form["confirm_password"]) < 8:
		flash("Password confirmation cannot be blank", "password_confirm_check")
		session["form_status"] = "fail"
	elif request.form["password"] != request.form['confirm_password']:
		flash("Password does not match", "password_confirm_check")
		session["form_status"] = "fail"
	else:
		session["password"] = request.form["password"]

	#birthday validation
	if len(request.form["birthday"]) < 1:
		flash("Birthday cannot be blank", "birthday_check")
		session["form_status"] = "fail"
	elif request.form["birthday"] > time.strftime("%Y-%m-%d"):
		flash("Date must be in the past", "birthday_check")
		session["form_status"] = "fail"
	else:
		session["birthday"] = request.form["birthday"]

	if session["form_status"] == "success":
		flash("Thanks for submitting your information", "form_check")	
		return redirect ('/')
	else: 
		return redirect ('/')

app.run(debug=True)