var users = require('../controllers/users')
var answers = require('../controllers/answers')
var topics = require('../controllers/topics')
var comments = require('../controllers/comments')

module.exports = function(app){
    app.post('/login', users.index)
    app.get('/logout', users.logout)
    app.get('/checklogin', users.checkLogin)
    app.post('/addtopic', topics.addTopic)
    app.get('/gettopics', topics.getTopics)
    app.post('/getuser', users.getUser)
    app.post('/gettopic', topics.getTopic)
    app.post('/addanswer', topics.addAnswer)
    app.post('/addcomment', topics.addComment)
    app.patch('/upvote', topics.upVote)
    app.patch('/downvote', topics.downVote)
}