var mongoose = require('mongoose')
var Topic = mongoose.model('Topic')
var User = mongoose.model('User')
var Answer = mongoose.model('Answer')
var Comment = mongoose.model('Comment')

module.exports = {
    addTopic: function(req, res) {
        User.findOne({username: req.session.username}, function(err, user){
            var newTopic = new Topic(req.body);
            newTopic._user = user._id;
            newTopic.save(function(err){
                user.topics.push(newTopic);
                user.save(function(err){
                    if(err){
                        console.log(err)
                    } else {
                        res.json(true);
                    }
                })
            })
        })
    },
    getTopics: function(req, res) {
        Topic.find({})
        .sort({createdAt: -1})
        .populate('_user')
        .exec(function(err, topics){
            if(err){
                console.log(err);
                res.json(false);
            } else {
                res.json(topics);
            }
        })
    },
    getTopic: function(req, res) {
        Topic.findOne({_id: req.body.id})
        .populate('_user')
        .populate('answers')
        .populate({
            path: 'answers', 
            populate: {path: 'comments'}
        })
        .populate({
            path: 'answers', 
            populate: {path: '_user'}
        })
        .populate({
            path: 'answers', 
            populate: {
                path: 'comments',
                populate: {path: '_user'}
            }
        })
        .exec(function(err, topic){
            if(err){
                console.log(err);
                res.json(false);
            } else {
                res.json(topic);
            }
        })
    },
    addAnswer: function(req, res) {
        Topic.findOne({_id: req.body.myTopicID}, function(err, topic){
            var newAnswer = new Answer(req.body.answer)
            newAnswer._user = req.session.userID;
            newAnswer._topic = topic._id;
            newAnswer.save(function(err){
                topic.answers.unshift(newAnswer)
                topic.save(function(err){
                    if(err){
                        console.log(err);
                    }
                })
                User.findOne({_id: req.session.userID}, function(err, user){
                    if(err) {
                        console.log(err)
                    } else {
                        user.answers.push(newAnswer);
                        user.save(function(err){
                            if(err){
                                console.log(err);
                            }
                        })
                    }
                })
                if(err){
                    console.log(err)
                    res.json(false);
                } else {
                    res.json(true);
                }
            })
        })
    },
    addComment: function(req, res) {
        Answer.findOne({_id: req.body.myAnswerID}, function(err, answer){
            if(err){
                console.log(err);
            } else {
                var newComment = new Comment(req.body.comment)
                newComment._answer = req.body.myAnswerID
                newComment._user = req.session.userID
                newComment.save(function(err){
                    answer.comments.push(newComment)
                    answer.save(function(err){
                        if(err){
                            console.log(err)
                        } 
                    })
                    User.findOne({_id: req.session.userID}, function(err, user){
                        if(err){
                            console.log(err);
                        } else {
                            user.comments.push(newComment);
                            user.save(function(err){
                                if(err){
                                    console.log(err);
                                    res.json(false);
                                } else {
                                    res.json(true);
                                }
                            })
                        }
                    })
                })
            }
        })
    },
    upVote: function(req, res){
        Answer.findOne({_id: req.body.id}, function(err, answer){
            answer.upvotes += 1
            answer.save(function(err){
                if(err){
                    console.log(err)
                    res.json(false);
                } else {
                    res.json(true);
                }
            })
        })
    }, 
    downVote: function(req, res){
        Answer.findOne({_id: req.body.id}, function(err, answer){
            answer.downvotes += 1
            answer.save(function(err){
                if(err){
                    console.log(err)
                    res.json(false);
                } else {
                    res.json(true);
                }
            })
        })
    }
}