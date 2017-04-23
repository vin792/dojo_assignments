var mongoose = require('mongoose')
var Friends = mongoose.model('Friends')

module.exports = {
    index: function(req, res) {
        Friends.find({}, function(err, friends){
            if(err){
                console.log(err);
                res.json({status: "failed to retrieve all friends"});
            } else {
                res.json(friends);
            }
        })
    },
    create: function(req, res) {
        var newFriend = new Friends(req.body);
        newFriend.save(function(err){
            if(err){
                console.log(err);
                res.json({status: "failed to save friend"})
            } else {
                res.json(true);
            }
        })
    },
    delete: function(req, res) {
        console.log(req.params.id);
        Friends.remove({_id: req.params.id}, function(err){
            if(err){
                console.log(err);
                res.json({status: "failed to remove friend"})
            } else {
                res.json(true);
            }
        })
    },
    update: function(req, res) {
        Friends.findOne({_id: req.params.id}, function(err, friend){
            if(err){
                res.json({status: "failed to retrieve on update"})
            } else {
                friend.firstName = req.body.firstName
                friend.lastName = req.body.lastName
                friend.birthday = req.body.birthday
                friend.save(function(err){
                    if(err){
                        res.json({status: "failed to save update"})
                    } else {
                        res.json(true);
                    }
                })
            }
        })
    },
    retrieveFriend: function(req, res) {
        Friends.findOne({_id: req.params.id}, function(err, friend){
            if(err){
                console.log(err);
                res.json({status: "failed to retrieve 1 friend"});
            } else {
                res.json(friend);
            }
        })
    }
}