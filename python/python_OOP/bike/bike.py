class Bike():
	def __init__(self, price, max_speed):
		self.price = price
		self.max_speed = max_speed
		self.miles = 0

	def displayInfo(self):
		print self.price, self.max_speed, self.miles
		return self

	def ride(self):
		print "riding"
		self.miles += 10
		return self

	def reverse(self):	
		print "reversing"
		self.miles -= 5

		if self.miles < 0:
			self.miles = 0
		return self


bike1 = Bike(200, "25mph")
bike2 = Bike(200, "25mph")
bike3 = Bike(200, "25mph")

bike1.ride()
bike1.ride()
bike1.ride()
bike1.displayInfo()

bike2.ride()
bike2.ride()
bike2.reverse()
bike2.reverse()
bike2.displayInfo()

bike3.reverse()
bike3.reverse()
bike3.reverse()
bike3.displayInfo()

bike1.ride().ride().ride().reverse().displayInfo()