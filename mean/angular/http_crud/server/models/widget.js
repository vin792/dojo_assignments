var mongoose = require('mongoose')

var WidgetSchema = new mongoose.Schema({
    title: {type: String, required: true, minlength: 1}
}, {timestamps: true})

mongoose.model('Widgets', WidgetSchema)