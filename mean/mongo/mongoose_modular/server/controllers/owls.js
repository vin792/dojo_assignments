var mongoose = require('mongoose')
var Owls = mongoose.model('Owls')

module.exports = {
    index: function(req, res){
    Owls.find({}, function(err, owls){
            if(err){
                console.log("Failed to retrieve data")
            } else {
                var data = {owls: owls};
                res.render('index', data);
            }
        })
    }, 
    new_owl: function(req, res){
        res.render('addOwl');
    },
    add_owl: function(req, res){
        var newOwl = new Owls({name: req.body.name, age: req.body.age});
        newOwl.save(function(err){
            if(err){
                console.log("Failed to save");
                console.log(newOwl.errors);
            } else {
                res.redirect('/');
            }
        })
    },
    view_owl: function(req, res){
        Owls.find({_id:req.params.id}, function(err, owl){
            if(err){
                console.log("failed to find owl");
            } else {
                var data = {owl: owl};
                res.render('viewOwl', data);
            }
        })
    },
    edit_owl: function(req, res){
    Owls.find({_id:req.params.id}, function(err, owl){
            if(err){
                console.log("failed to find owl");
            } else {
                var data = {owl: owl};
                res.render('editOwl', data);
            }
        }) 
    },
    update_owl: function(req, res){
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
    },
    destroy_owl: function(req, res){
        Owls.remove({_id: req.params.id}, function(err){
            if(err){
                console.log("failed to remove record")
            } else {
                res.redirect('/');
            }
        })
    },
}