//Assign dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Set up properties for express server
var app = express();
var PORT = process.env.PORT || 3000;

// BodyParser middleware to interpret data sent to the server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Points the server to our "route" files
app.use(express.static('./app/public'));
app.use(express.static('./images'));
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);
require('./app/data/friends.js');

// Set the server to listen on the designated port
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
});
