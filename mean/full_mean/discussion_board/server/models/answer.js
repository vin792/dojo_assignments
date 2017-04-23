var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var AnswerSchema = new mongoose.Schema({
    text: {type: String, required: true, minlength: 1},
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
    _topic: {type: Schema.Types.ObjectId, ref: 'Topic'},
    upvotes: Number,
    downvotes: Number
}, {timestamps: true})

mongoose.model('Answer', AnswerSchema)
