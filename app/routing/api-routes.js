var friends = require('../data/friends.js');
var path = require('path');


module.exports = function(app){
app.get('/api/survey', function(req, res){
		res.json(friends);

});


app.post('/api/survey', function(req, res){
	//friends.push(req.body);
console.log(req.body.scores);
	// newFriend = req.body;
	// newFriend.routeName = newFriend.name.replace(/\s+/g, '').toLowerCase;
	// console.log(newFriend);
	// friends.push(newFriend);
	//res.json(newFriend);


var D = [];
var A = req.body.scores;
for(var h = 0; h < friends.length -1; h++){

	var C = [];
	for(var i = 0; i < A.length; i++) {
	  C.push(Math.abs(A[i] - friends[h].scores[i]));
	}

	var sum = 0;
	C.map(function(item){
	    sum += item;
	});

	D.push(sum);
	D.forEach(function(D, index){
	});

}
console.log(D);

var index = 0;
var value = D[0];
for (var k = 1; k < D.length; k++) {
  if (D[k] < value) {
    value = D[k];
    index = k;
  }
}
console.log(value, index);

var match = friends[index];

res.json(match);
console.log(match);

});
};

// app.post('/api/new', function(req, res){

// 	var newcharacter = req.body;
// 	newcharacter.routeName = newcharacter.name.replace(/\s+/g, '').toLowerCase()

// 	console.log(newcharacter);

// 	characters.push(newcharacter);

// 	res.json(newcharacter);
// })