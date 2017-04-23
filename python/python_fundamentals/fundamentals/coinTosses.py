import random

#Simulates coin tosses and prints how many heads/tails have appeared so far
def coinToss(trials):
	print "Starting the Program"
	
	headsCounter = 0
	tailsCounter = 0

	for i in range(1, trials+1):
		face = round(random.random())

		if (face > 0):
			headsCounter+=1
			print "Attempt #" + str(i) + ": Throwing a coin... It's a head! ... Got", headsCounter, "head(s) so far and", tailsCounter, "tail(s) so far"
		else:
			tailsCounter+=1
			print "Attempt #" + str(i) + ": Throwing a coin... It's a tail! ... Got", headsCounter, "head(s) so far and", tailsCounter, "tail(s) so far"

coinToss(5000)