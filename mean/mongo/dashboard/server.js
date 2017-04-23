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
mongoose.connect('mongodb://localhost/animal_packs');

mongoose.Promise = global.Promise;

var OwlSchema = new mongoose.Schema({
    name: {type: String, required: true, minLength: 1},
    age: {type: Number, required: true, min: 1, max: 150}
}, {timestamps: true})

mongoose.model('Owls', OwlSchema);
var Owls = mongoose.model('Owls'); 

app.get('/', function(req, res){
    Owls.find({}, function(err, owls){
        if(err){
            console.log("Failed to retrieve data")
        } else {
             var data = {owls: owls};
             res.render('index', data);
        }
    })
})

app.get('/owls/new', function(req, res){
    res.render('addOwl');
})

app.post('/owls', function(req, res){
    var newOwl = new Owls({name: req.body.name, age: req.body.age});
    newOwl.save(function(err){
        if(err){
            console.log("Failed to save");
            console.log(newOwl.errors);
        } else {
            res.redirect('/');
        }
    })
})

app.get('/owls/:id', function(req, res){
    Owls.find({_id:req.params.id}, function(err, owl){
        if(err){
            console.log("failed to find owl");
        } else {
            var data = {owl: owl};
            res.render('viewOwl', data);
        }
    })
})

app.get('/owls/edit/:id', function(req, res){
   Owls.find({_id:req.params.id}, function(err, owl){
        if(err){
            console.log("failed to find owl");
        } else {
            var data = {owl: owl};
            res.render('editOwl', data);
        }
    }) 
})

app.post('/owls/:id', function(req, res){
    Owls.findOne({_id: req.params.id}, function(err, owl){
        if(err){
            console.log("failed to retrieve edit record");
        } else {
            owl.name = req.body.name;
            owl.age = req.body.age;
            owl.save(function(err){
                if(err){
                    console.log("failed to update record")
                } else {
                    var string = encodeURIComponent(req.params.id.toString());
                    res.redirect('/owls/' + string );
                }
            })
        }
    })
})

app.post('/owls/destroy/:id', function(req, res){
    Owls.remove({_id: req.params.id}, function(err){
        if(err){
            console.log("failed to remove record")
        } else {
            res.redirect('/');
        }
    })
})

app.listen(8000, function(){
    console.log("listening on port 8000");
})