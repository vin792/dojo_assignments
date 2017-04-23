var friends = require('../controllers/friends.js')
var path = require('path')

module.exports = function(app){
    app.get('/friends', friends.index)
    app.post('/createfriend', friends.create)
    app.delete('/deletefriend/:id', friends.delete)
    app.get('/retrievefriend/:id', friends.retrieveFriend)
    app.patch('/updatefriend/:id', friends.update)
    app.get('*', function (req, res) {
        res.sendFile(path.resolve('friends-app/dist/index.html'));
    })
}