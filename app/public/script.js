$("#subButton").on("click", function(){

// Create object to hold user input 
	var newFriend = 
	{
		name: $("#name").val().trim(),
		photo: $("#photo").val().trim(),
		scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val()]
	};

// Variable for getting current URL to append to api path
	console.log(newFriend);
	var currentURL = window.location.origin;

// Post user input and update modal page with chosen friend information
	$.post(currentURL + "/api/survey", newFriend,
		function(data){
			console.log(data);
			
			$("#match").text(data.name);
			$("#img").attr("src", data.photo);
		});

// Activate the modal with updated info on friend match
$("#myModal").modal('toggle');

// jQuery selectors to clear the form after the user submits their input
	
	$('#name').val('');
	$('#photo').val('');
	$('#q1').val('');
	$('#q2').val('');
	$('#q3').val('');
	$('#q4').val('');
	$('#q5').val('');
	$('#q6').val('');
	$('#q7').val('');
	$('#q8').val('');
	$('#q9').val('');
	$('#q10').val('');

	return false;

});	