var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var TopicSchema = new mongoose.Schema({
    category: {type: String, required: true, minlength: 1},
    title: {type: String, required: true, minlength: 1},
    description: {type: String, required: true, minlength: 1},
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
}, {timestamps: true})

mongoose.model('Topic', TopicSchema)
