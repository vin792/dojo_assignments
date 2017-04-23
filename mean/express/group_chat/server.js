var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

var path = require('path');

app.search(express.static(path.join(__dirname,'./static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// var mongoose = require('mongoose');
// var assert = require('assert');
// mongoose.connect('mongodb://localhost/');

// mongoose.Promise = global.Promise;

var conversation = [];

app.get('/', function(req, res){
    res.render('index', {load: conversation});
})

var server = app.listen(8000, function(){
    console.log("listening on port 8000");
})

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
    console.log("Sockets Working");
    var users = {};
    
    socket.on('new_user', function(data){
        users[socket.id] = data.name;
        var new_message = data.name + " joined the chat"
        conversation.push(new_message);
        io.emit('new_user_added', {response: new_message});
    })

    socket.on('new_message', function(data){
        var user_name = users[socket.id];
        var new_message = user_name + ": " + decodeURIComponent(data.message.substring(8))
        conversation.push(new_message);
        io.emit('display_new_message', {response: new_message}); 
    })

    socket.on('disconnect', function(){
        user = users[socket.id];
        var new_message = user + " left the chat";
        conversation.push(new_message)
        socket.broadcast.emit('user_disconnected', {response: new_message});
        delete users[socket.id];
    })
})