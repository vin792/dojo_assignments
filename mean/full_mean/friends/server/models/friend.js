var mongoose = require('mongoose')

var FriendSchema = new mongoose.Schema({
    firstName: {type: String, required: true, minlength: 1},
    lastName: {type: String, required: true, minlength: 1},
    birthday: {type: Date, required: true}
}, {timestamps: true})

mongoose.model('Friends', FriendSchema)