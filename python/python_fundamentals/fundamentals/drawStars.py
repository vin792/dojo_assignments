#prints out * based on value of the array
def draw_stars(numbers):
	for i in numbers:
		if type(i) is str:
			stars = ""
			for j in range(len(i)):
				stars += i[0].lower()
			print stars
		else:
			stars = ""
			for j in range(i):
				stars += "*"
			print stars

x = [4, 6, 1, 3, 5, 7, 25]
draw_stars(x)

print "\n"

x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
draw_stars(x)
