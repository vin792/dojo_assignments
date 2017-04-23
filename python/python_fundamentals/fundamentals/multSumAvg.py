#print all odd numbers from 1 to 1000

for i in range(1,1001):
	print i

#print all multiple of 5 from 5 to 1,000,000

for i in range(5, 1000000, 5):
	print i

#sum values in array

a = [1, 2, 5, 10, 255, 3]
sum = 0

for i in a:
	sum += i

print sum

#average of values in array

a = [1, 2, 5, 10, 255, 3]
sum = 0

for i in a:
	sum += i

print sum / len(a)