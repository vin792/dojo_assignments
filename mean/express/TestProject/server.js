var express = require("express");
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response){
    response.render('index');
})

app.get('/users', function(request, response){
    var data = {
        users_array: [
            {name: "michael", email:"michael@ocodingdojo.com"},
            {name: "Jay", email: "jay@codingdojo.com"}, 
            {name: "Brendan", email: "brendan@codingdojo.com"}, 
            {name: "Andrew", email: "andrew@codingdojo.com"}
        ]
    }
    response.render('users', data);
})

app.post('/users', function(request, response){
    console.log("POST DATA \n\n", request.body);
    response.redirect('/');
})

app.get('/users/:id', function(request, response){
    console.log("the user id requested is:", request.params.id);
    response.send("You requested the user with id:" + request.params.id);
})

app.listen(8000, function(){
    console.log("listening on port 8000");
})
