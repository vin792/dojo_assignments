var mongoose = require('mongoose')
var Users = mongoose.model('Users')
var bcrypt = require('bcrypt'); 

module.exports = {
    login: function(req, res) {
        Users.findOne({email: req.body.email}, function(err, user){
            if(err){
                console.log(err)
                res.json({status: false, message: "Error when looking for user"})
            } else {
                if(user){
                    if(bcrypt.compareSync(req.body.password, user.password)){
                        req.session.userID = user._id
                        res.json({status: true, message: "success", user: req.session.userID})
                    } else {
                        res.json({status: false, message: "Incorrect password/email"})
                    }
                } else {
                    res.json({status: false, message: "Incorrect password/email"})
                }
            }
        })
    },
    register: function(req, res) {
        if(req.body.password != req.body.passwordConfirm){
            res.json({status: false, message: 9000})
        } else {
            delete req.body["passwordConfirm"];
            var newUser = new Users(req.body); 
            newUser.save(function(err, user){
                if(err){
                    console.log(err)
                    res.json({status: false, message: err.code});
                } else {
                    req.session.userID = user._id
                    res.json({status: true, message: "success", user: req.session.userID})
                }
            })
        }
    },
    logout: function(req, res) {
        delete req.session.userID;
        res.json(true)
    }
}