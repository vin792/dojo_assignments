var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response){
    response.render('form');
})

app.post('/result', function(request, response){
    var data = {
        name: request.body.name,
        language: request.body.language,
        location: request.body.location,
        comments: request.body.comments
    }
    response.render('result', data)
})

app.listen(8000, function(){
    console.log("listening on port 8000");
})