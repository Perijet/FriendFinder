//Assign dependencies
var friends = require('../data/friends.js');
var path = require('path');


module.exports = function(app){
app.get('/api/survey', function(req, res){
		res.json(friends);

});

// Takes in JSON input from user to search through friends array and find best match
app.post('/api/survey', function(req, res){
	//friends.push(req.body);
console.log(req.body.scores);

// Create variables for user input and array to sum up results
var D = [];
var A = req.body.scores;

// Loops through friends array of objects
for(var h = 0; h < friends.length -1; h++){

// Loops user scores through friends arrays comparing the difference between the user scores and the friends array
	var C = [];
	for(var i = 0; i < A.length; i++) {
	  C.push(Math.abs(A[i] - friends[h].scores[i]));
	}

// Sums up the results of the absolute values from the array subtractions
	var sum = 0;
	C.map(function(item){
	    sum += item;
	});

//Pushes the sum of each comparison to the array "D"
	D.push(sum);
	D.forEach(function(D, index){
	});

}
console.log(D);

// Finds the lowest value in the array of results along with the index
var index = 0;
var value = D[0];
for (var k = 1; k < D.length; k++) {
  if (D[k] < value) {
    value = D[k];
    index = k;
  }
}
console.log(value, index);

// Assigns the resulting index value to the object that matches
var match = friends[index];

//Responds with the match data
res.json(match);
console.log(match);

});
};
