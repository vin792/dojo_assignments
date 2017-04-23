class SLNode(object):
	def __init__(self, value):
		self.value = value
		self.next = None

class SList(object):
	def __init__(self):
		self.head = None
		self.tail = None

	def printAllVals(self):
		runner = self.head
		while runner.next != None:
			print runner.value
			runner = runner.next
		print runner.value

	def addBack(self, val):
		myNode = SLNode(val)
		runner = self.head

		if self.head != None:
			while runner.next != None:
				runner = runner.next 
			runner.next = myNode
		else: 
			self.head = myNode

	def addFront(self, val):
		myNode = SLNode(val)

		if self.head != None:
			myNode.next = self.head.next
			self.head = myNode
		else:
			self.head = myNode	


	def insertBefore(self, nextVal, val):
		myNode = SLNode(val)
		runner = self.head

		if runner.value == nextVal:
			self.addFront(val)
		else:
			while runner.next.value != nextVal:
				runner = runner.next 

			myNode.next = runner.next
			runner.next = myNode

	def insertAfter(self, nextVal, val):
		myNode = SLNode(val)
		runner = self.head

		while runner.value != nextVal:
			runner = runner.next 

		runner.next = myNode

	def reverseList(self)
		runner = self.head
		previous = self.head

		while runner.next != None
			runner = runner.next 
			previous = runner

		runner.next = previous
		previous = 


list = SList()
list.head = SLNode('Alice')
list.head.next = SLNode('Chad')
list.head.next.next = SLNode('Debra')

list.addBack("Jess")
list.printAllVals()
print 

list.addFront("Todd")
list.printAllVals()
print

list.insertBefore("Debra", "Al")
list.printAllVals()
print

list.insertAfter("Jess","James")
list.printAllVals()
print
