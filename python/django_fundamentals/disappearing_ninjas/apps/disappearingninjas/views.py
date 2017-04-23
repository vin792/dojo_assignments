from django.shortcuts import render

# Create your views here.

def index(request):
	return render(request, 'disappearingninjas/index.html')

def display_all(request):
	return render(request, 'disappearingninjas/all.html')

def turtles(request, color):
	
	if color == "blue":
		turtle= "leonardo.jpg"
	elif color == "orange":
		turtle= "michelangelo.jpg"
	elif color == "red":
		turtle= "raphael.jpg"
	elif color == "purple":
		turtle= "donatello.jpg"
	else:
		turtle= "notapril.jpg"

	context={
		"turtle": turtle
	}
	return render(request, 'disappearingninjas/turtle.html', context)
