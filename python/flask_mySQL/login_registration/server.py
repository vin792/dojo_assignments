from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import re
from flask.ext.bcrypt import Bcrypt


EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
NAME_REGEX = re.compile(r'^[a-zA-Z]+$')
app = Flask(__name__)
bcrypt = Bcrypt(app)
app.secret_key = "ThisisSecret"
mysql = MySQLConnector(app,'loginregister') 

@app.route('/')
def index():
	session['user_id'] = 0
	return render_template('index.html')

@app.route('/register', methods=['POST'])
def create():

	if len(request.form['first_name']) < 2:
		flash("First name must contain more than 2 characters", "registration")
		return redirect ('/')
	elif not NAME_REGEX.match(request.form['first_name']):
		flash("First name can only contain letters", "registration")
		return redirect ('/')
	elif len(request.form['last_name']) < 2:
		flash("Last name must contain more than 2 characters", "registration")
		return redirect ('/')
	elif not NAME_REGEX.match(request.form['last_name']):
		flash("Last name can only contain letters", "registration")
		return redirect ('/')
	elif not EMAIL_REGEX.match(request.form['email']):
		flash("Enter a valid email address", "registration")
		return redirect ('/')
	elif len(request.form['password']) < 8:
		flash("Password must contain more than 8 characters", "registration")
		return redirect ('/')
	elif request.form['password'] != request.form['password_confirmation']:
		flash("Password confirmation does not match", "registration")
		return redirect ('/')
	else:	
		
		pw_hash = bcrypt.generate_password_hash(request.form['password'])

		insert_query = "INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) VALUES (:first_name, :last_name, :email, :password, NOW(), NOW())"

		insert_data = {
				'first_name': request.form['first_name'],
				'last_name': request.form['last_name'],
				'email': request.form['email'],
				'password': pw_hash
		} 

		mysql.query_db(insert_query, insert_data)

		select_query = "SELECT MAX(id) as user_id FROM users"

		new_user = mysql.query_db(select_query)

		session['user_id'] = new_user[0]['user_id'];

		return render_template('success.html')

@app.route('/login', methods=['POST'])
def login():

	email = request.form['email']
	password = request.form['password']

	user_query = "SELECT * from users WHERE email = :email LIMIT 1"
	query_data = {
					'email': email
	}

	user = mysql.query_db(user_query, query_data)

	if user:
		if bcrypt.check_password_hash(user[0]['password'], password):
			session['user_id'] = user[0]['id'];
			return render_template('success.html')
		else: 
			flash("Not valid login", "login")
			return redirect ('/')
	else:
		flash("Not valid login", "login")
		return redirect ('/')

app.run(debug=True)