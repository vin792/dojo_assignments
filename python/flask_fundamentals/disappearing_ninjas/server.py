from flask import Flask, request, redirect, render_template
app = Flask(__name__)

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/ninja')
def ninja():
	return render_template('ninja.html')

@app.route('/ninja/<color>')
def which_turtle(color):
	
	ninja_turtles = {"blue":"leonardo.jpg", "orange":"michaelangelo.jpg", "red":"raphael.jpg", "purple":"donatello.jpg"}

	if color in ninja_turtles:
		print ninja_turtles[color]
		return render_template('ninja.html', turtle=ninja_turtles[color])
	else:
		return render_template('ninja.html', turtle="notapril.jpg")


app.run(debug=True)