var users = require('../controllers/users.js')
var path = require('path')

module.exports = function(app){
    app.post('/login.json', users.login)
    app.post('/register.json', users.register)
    app.get('/logout', users.logout)
}