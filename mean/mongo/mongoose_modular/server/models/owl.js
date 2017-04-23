var mongoose = require('mongoose')

var OwlSchema = new mongoose.Schema({
    name: {type: String, required: true, minLength: 1},
    age: {type: Number, required: true, min: 1, max: 150}
}, {timestamps: true})

mongoose.model('Owls', OwlSchema);