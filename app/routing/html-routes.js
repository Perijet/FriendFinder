//Assign dependencies
var path = require('path');

// HTML Routes to serve the home and survey pages to the user
module.exports = function(app){

app.get('/survey', function(request, response){
	response.sendFile(path.join(__dirname + '/../public/survey.html'));
});

app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});
};