from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import re
from flask.ext.bcrypt import Bcrypt
import datetime


EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
NAME_REGEX = re.compile(r'^[a-zA-Z]+$')
app = Flask(__name__)
bcrypt = Bcrypt(app)
app.secret_key = "ThisisSecret"
mysql = MySQLConnector(app,'myblog') 


@app.route('/')
def index():
	session['user_id'] = 0
	return render_template('index.html')

@app.route('/register', methods=['POST'])
def create():

	#login validation
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
		
		#check if email is already associated with a login
		find_query = "SELECT * from users WHERE email = :email LIMIT 1"
		find_data = {
					'email': request.form['email']
		}

		find = mysql.query_db(find_query, find_data)

		if find:
			flash("Email already in use", "registration")
			return redirect ('/')

		#create user
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

		return redirect ('/wall')

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
			return redirect('/wall')
		else: 
			flash("Not valid login", "login")
			return render_template ('index.html')
	else:
		flash("Not valid login", "login")
		return render_template ('index.html')

@app.route('/wall')
def show_wall():
	user_query = "SELECT * from users WHERE id = :user_id limit 1"
	query_data = {
					'user_id': session['user_id']
	}

	user = mysql.query_db(user_query, query_data)

	user_name = user[0]['first_name'].title()

	message_query = "SELECT messages.user_id, CONCAT(users.first_name,\" \",users.last_name) as name, messages.message, messages.created_at, messages.id as message_id from messages join users on messages.user_id = users.id order by messages.created_at desc"

	messages = mysql.query_db(message_query)

	comment_query = "SELECT comments.id, comments.user_id, CONCAT(users.first_name,\" \",users.last_name) as name, comments.comment, comments.created_at, comments.message_id from comments join users on comments.user_id = users.id"

	comments = mysql.query_db(comment_query)

	current_time = datetime.datetime.now() - datetime.timedelta(minutes=30)

	return render_template('wall.html', name=user_name, messages=messages, comments=comments, current_time=current_time)

@app.route('/create_post', methods=['POST'])
def create_post():
	query = "INSERT INTO messages (user_id, message, created_at, updated_at) VALUES (:user_id, :message, NOW(), NOW())"
	data = {
			'user_id':session['user_id'],
			'message':request.form['user_post']
	}

	mysql.query_db(query, data)

	return redirect('/wall')

@app.route('/create_comment', methods=['POST'])
def create_comment():
	query = "INSERT INTO comments (message_id, user_id, comment, created_at, updated_at) VALUES (:message_id, :user_id, :comment, NOW(), NOW())"
	data = {
				'message_id': request.form['message_id'],
				'user_id': session['user_id'],
				'comment': request.form['user_comment']
	}

	mysql.query_db(query, data)

	return redirect('/wall')

@app.route('/delete_comment', methods=['POST'])
def delete_comment():
	query = "DELETE FROM comments WHERE id=:comment_id"
	data = {
			'comment_id':request.form['comment_id']
	}

	mysql.query_db(query, data)

	return redirect('/wall')

@app.route('/delete_post', methods=['POST'])
def delete_post():
	
	comments_query = "DELETE FROM comments where comments.message_id=:message_id"
	
	message_data = {
					'message_id':request.form['message_id']
	}

	mysql.query_db(comments_query, message_data)

	message_query = "DELETE FROM messages WHERE id=:message_id"

	mysql.query_db(message_query, message_data)


	return redirect('/wall')

app.run(debug=True)

















