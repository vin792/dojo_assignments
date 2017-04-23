str = "If monkeys like bananas, then I must be a monkey!"

print str.find("monkey")
print str.replace("monkey", "alligator")

x = [2,54,-2,7,12,98]

print max(x)
print min(x)

x = ["hello",2,54,-2,7,12,98,"world"]

print x[0]
print x[len(x) - 1]

y = [x[0], x[len(x) - 1]]

x = [19,2,54,-2,7,12,98,32,10,-3,6]

x.sort()

y = x[0:len(x) / 2]

x = x[len(x) / 2:]

x.insert(0, y)

print x