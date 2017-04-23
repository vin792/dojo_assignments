class Car():
	def __init__(self, price, speed, fuel, mileage):
		self.price = price
		self.speed = speed
		self.fuel = fuel
		self.mileage = mileage
		if self.price > 10000:
			self.tax = .15
		else:
			self.tax = .12
		
		self.display_all()

	def display_all(self):
		print "price: "+str(self.price)
		print "speed: "+str(self.speed)+" mph"
		print "fuel: "+str(self.fuel)
		print "mileage: "+str(self.mileage)+" mpg"
		print "tax: "+str(self.tax)


car1 = Car(2000, 35, "full", 15)
car2 = Car(50000, 35, "full", 15)
car3 = Car(9000, 35, "full", 15)
car4 = Car(15000, 35, "empty", 15)
car5 = Car(8000, 33, "full", 15)
car6 = Car(8000, 35, "full", 10)