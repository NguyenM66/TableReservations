//to get node to run
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000

//nodemon monitors code and if it sees changes it restarts your server so you don't have to do it everytime

//boilerplate for app.use

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//setup method and route to go to main page
app.get('/', function(req, res) {
	res.send("some text");
})

app.listen(PORT, function() {
	console.log("Listening on port %s", PORT);
})