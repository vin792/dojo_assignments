from django.shortcuts import render, redirect, reverse
from . models import Product
from django.contrib import messages

def index(request):
	context = {
		'products': Product.objects.all()
	}
	return render(request, 'products/index.html', context)

def new(request):
	return render(request, 'products/new.html')

def create(request):
	if request.method == 'POST':
		model_response = Product.objects.add_product(request.POST)

		if model_response[0]:
			return redirect(reverse('products:index'))
		else:
			for i in model_response[1]:
				messages.error(request, i) 
			return redirect(reverse('products:new'))

def show(request, product_id):
	context = {
		'product':Product.objects.get(id = product_id)
	}
	return render(request, 'products/show.html', context)

def destroy(request, product_id):
	if request.method == 'POST':
		Product.objects.remove_product(product_id)
		return redirect(reverse('products:index'))

def edit(request, product_id):
	context = {
		'product':Product.objects.get(id = product_id)
	} 
	return render(request, 'products/edit.html', context)

def update(request, product_id):
	if request.method == 'POST':
		model_response = Product.objects.update_product(request.POST, product_id)

		if model_response[0]:
			return redirect(reverse('products:index'))
		else:
			for i in model_response[1]:
				messages.error(request, i)
			return redirect(reverse('products:edit', kwargs={'product_id': product_id }))