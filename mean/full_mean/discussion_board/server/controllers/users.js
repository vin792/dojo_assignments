var mongoose = require('mongoose')
var User = mongoose.model('User')

module.exports = {
    index: function(req, res) {
        User.findOne({username: req.body.username}, function(err, user){
            if(err){
                console.log(err);
                res.json({status: false, message: "Failed on user retireve"})
            } else {
                if(user){
                    req.session.username = user.username;
                    req.session.userID = user._id;
                    res.json({status: true, message: "Found User", username: req.session.username})
                } else {
                    var newUser = new User(req.body)
                    newUser.save(function(err, user){
                        if(err){
                            console.log(err);
                            res.json({status: false, message: err.code});
                        } else {
                            req.session.username = user.username;
                            req.session.userID = user._id;
                            res.json({status: true, message: "Added User", username: req.session.username})
                        }
                    })
                }
            }
        })
    },
    logout: function(req, res) {
        delete req.session.username;
        delete req.session.userID;
        res.json(true)
    },
    checkLogin: function(req, res) {
        if('username' in req.session){
            res.json({status: true, message: req.session.username});
        } else {
            res.json({status: false, message: req.session.username});
        }
    },
    getUser: function(req, res) {
        User.findOne({_id: req.body.id}, function(err, user){
            if(err){
                console.log(err);
                res.json({status: false, message: "Failed on user retireve from list"});
            } else {
                res.json(user);
            }
        })
    }
}