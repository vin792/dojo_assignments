#print out names from a list containing objects with key value pairs of 'first_name': '<name>', 'last_name': '<name>'
def printNames(people):
	for i in people:
		print i.get('first_name'), i.get('last_name')

students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

printNames(students)

#print out names from a dict containing lists of objects with key value pairs of 'first_name': '<name>', 'last_name': '<name>'
def printNames2(people):
	for key, data in people.iteritems():
		print key
		for i in range(len(data)):
			count = i + 1
			nameLength = len(data[i].get('first_name')) + len(data[i].get('last_name'))
			print count, "-", data[i].get('first_name'), data[i].get('last_name'),"-",  nameLength

users = {
 'Students': [e
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }

printNames2(users)
