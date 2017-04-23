var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    username: {type: String, required: true, minlength: 1, unique: true},
    answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}],
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
    topics: [{type: Schema.Types.ObjectId, ref: 'Topic'}],
}, {timestamps: true})

mongoose.model('User', UserSchema)