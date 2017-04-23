var mongoose = require('mongoose')
var bcrypt = require('bcrypt'); 

var UserSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true, minlength: [1, "enter an email"]},
    firstName: {type: String, required: true, minlength: [1, "enter a first name"]},
    lastName: {type: String, required: true, minlength: [1, "enter a last name"]},
    password: {type: String, required: true, minlength: [1, "password must be at least 8 characters"]},
    birthday: {type: Date, required: true},
}, {timestamps: true})

UserSchema.pre('save', function(done){
  this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  done();
});

mongoose.model('Users', UserSchema);