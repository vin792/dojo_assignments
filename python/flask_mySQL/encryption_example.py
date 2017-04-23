from flask import Flask, request, render_template
from flask.ext.bcrypt import Bcrypt
app = Flask(__name__)
bcrypt = Bcrypt(app)

import md5 # imports the md5 module to generate a hash
password = 'password';
# encrypt the password we provided as 32 character string
encrypted_password = md5.new(password).hexdigest(); 
print encrypted_password; #this will show you the encrypted value
# 5f4dcc3b5aa765d61d8327deb882cf99 -> nice!


password = 'password'
pw_hash = bcrypt.generate_password_hash(password)
test_password_1 = 'thisiswrong'
print bcrypt.check_password_hash(pw_hash, test_password_1) # this will return false
test_password_2 = 'password'
print bcrypt.check_password_hash(pw_hash, test_password_2)