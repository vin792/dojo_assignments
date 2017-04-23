# function that print out if a number is odd, from a to b 
def oddCounter(rangeLow, rangeHigh):
	for i in range(rangeLow, rangeHigh + 1):
		
		oddEven = "odd"

		if i % 2 == 0:
			oddEven = "even"

		print "number is", i, "This is an", oddEven, "number"

oddCounter(1, 2000)

# function which multiplies each element by 5
def multiply(array, multiplier):
	for i in range(len(array)):
		array[i] *= multiplier

	return array

a = [2,4,10,16]

b = multiply(a, 5)
print b

# function which the number of 1s as the values in the array parameter
def layered_multiples(arr):
	
	arrNew = []
	counter = 0

	for i in arr:

		arrTemp = []

		for j in range(i+1):
			arrTemp.append(1)

		arrNew.append(arrTemp)

	return arrNew

x = layered_multiples(multiply([2,4,5],3))
print x