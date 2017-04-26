var twilio = require('twilio');
var express = require('express');
var bodyParser = require('body-parser')
var path = require('path');
var request = require('request');

var app = express();

var PORT = 8000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './node_modules')))

//Market Data + Twilio SMS
app.post('/sms', function(req, res){
    console.log(req.body);
    var symbol = req.body.Body;
    var url = "http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol="+symbol
    request(url, function(err, response, body){
        if (!err && response.statusCode == 200) {
            var twiml = new twilio.TwimlResponse();
            var stock = JSON.parse(body);
            var myMessage = "Your Stock: " + stock.Name + ", Opened at: " + stock.Open + ", Last Price: " + stock.LastPrice
            twiml.message(myMessage);
            res.writeHead(200, {'Content-Type': 'text/xml'});
            res.end(twiml.toString());
        }
    })
})

app.listen(PORT, function(){
    console.log(`Listening on port 8000`)
})