import random

#generates x random test scores and assigns letter grades based on the value
def testScores(x):
	for x in range(x+1):
		score = random.randint(60, 101)

		if score >= 90:
			print "Score:" + str(score) + ";", "Your grade is A"
		elif score >= 80 and score < 90:
			 print "Score:" + str(score) + ";", "Your grade is B"
		elif score >= 70 and score < 80:
			 print "Score:" + str(score) + ";", "Your grade is C"
		else:
			 print "Score:" + str(score) + ";", "Your grade is D"

	print "End of program. Bye!"

testScores(10) 