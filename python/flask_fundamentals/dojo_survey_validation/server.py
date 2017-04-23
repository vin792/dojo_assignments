from flask import Flask, render_template, request, redirect, flash
app = Flask(__name__)
app.secret_key = "ThisisSecret"

@app.route('/')
def index():
	return render_template("index.html")

@app.route('/results', methods=['POST'])
def results():
	print "got user info"
	if len(request.form['name']) < 1:
		flash("Name cannot be empty!")
		return redirect ('/')
	else:
		name = request.form['name']

	location = request.form['location']
	language = request.form['language']
	if len(request.form['comment']) < 1:
		flash("Comment cannot be empty!")
		return redirect ('/')
	elif len(request.form['comment']) > 120:
		flash("Comment cannot be more than 120 characters!")
		return redirect ('/')
	else:
		comment = request.form['comment']

	return render_template("results.html", name=name, location=location, language=language, comment=comment)

app.run(debug=True)