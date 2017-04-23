var mongoose = require('mongoose')
var Persons = mongoose.model('Persons')

module.exports = {
    index: function(req, res){
        Persons.find({}, function(err, persons){
            if(err){
                res.json({message: "something went wrong with the retrieve"});
            } else {
                if(persons) {
                    res.json({persons: persons});
                } else {
                    res.json({fail: "no persons in db"});
                }
                
            }
        })
    },
    add_person: function(req, res){
        var person = new Persons({name: req.params.name});
        console.log(person);
        person.save(function(err){
            if(err){
                res.json({fail: "something went wrong with the save"});
            } else {
                res.json({success: "saved successfully"});
            }
        })
    },
    view_person: function(req, res){
        Persons.findOne({name: req.params.name}, function(err, person){
            if(err){
                res.json({fail: "something went wrong with the find"});
            } else {
                if(person){
                    res.json(person);
                } else {
                    res.json({fail: "failed to find user"});
                }  
            }
        })
    }, 
    remove_person: function(req, res){
        Persons.remove({name: req.params.name}, function(err){
            if(err){
                res.json({fail: "failed to remove user"})
            } else {
                res.json({success: "removed successfully"})
            }
        })
    }
}
