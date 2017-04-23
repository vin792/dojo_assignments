from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)
app.secret_key = "ThisisSecret"
mysql = MySQLConnector(app,'emails')

@app.route('/')
def index():
	
	emails = mysql.query_db("SELECT * FROM emails")

	return render_template('index.html', all_emails = emails)

	

@app.route('/add', methods=['POST'])
def add_email():
	
	if not EMAIL_REGEX.match(request.form["email_address"]):
		flash("Email is not valid", "error")
		return redirect ('/')
	else:
		query = "INSERT INTO emails (email_address, created_at, updated_at) values (:email_address, NOW(), NOW())"
		data = {
				'email_address': request.form["email_address"]
		}

	mysql.query_db(query, data)
	flash("The email address you entered  "+str(data['email_address'])+" is a VALID email address! Thank you!", "fail")
	return redirect('/')
	

app.run(debug=True)