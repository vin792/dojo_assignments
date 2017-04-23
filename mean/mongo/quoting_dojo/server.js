var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

var path = require('path');

app.search(express.static(path.join(__dirname,'./static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var mongoose = require('mongoose');
var assert = require('assert');
mongoose.connect('mongodb://localhost/quote');

mongoose.Promise = global.Promise;

var QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 1},
    quote: {type: String, required: true, minlength: 1},
}, {timestamps: true})

mongoose.model('UserQuotes', QuoteSchema);
var UserQuote = mongoose.model('UserQuotes');

app.get('/', function(req, res){
    res.render('index');
})

app.post('/addquote', function(req, res){
    console.log("POST DATA: ", req.body);
    var newQuote = new UserQuote({name: req.body.name, quote: req.body.quote});

    newQuote.save(function(err){
        if(err){
            console.log("something went wrong");
            var data = {errors: newQuote.errors};
            res.render('index', data)
        } else {
            console.log("successfully saved!")
            res.redirect('/quotes');
        }
    })
})

app.get('/quotes', function(req, res){
    UserQuote.find({}, function(err, quotes){
        if(err){
            console.log("failed to retrieve data");
        } else {
            var data = {quotes: quotes};
            res.render('quotes', data);
        }
    })
})

app.listen(8000, function(){
console.log("listening on port 8000");
})