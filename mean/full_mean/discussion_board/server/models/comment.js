var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var CommentSchema = new mongoose.Schema({
    text: {type: String, required: true, minlength: 1},
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    _answer: {type: Schema.Types.ObjectId, ref: 'Answer'},
}, {timestamps: true})

mongoose.model('Comment', CommentSchema)