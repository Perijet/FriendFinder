//alert('hi');
$("#subButton").on("click", function(){

	var newFriend = 
	{
		name: $("#name").val().trim(),
		photo: $("#photo").val().trim(),
		scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val()]
	};

	console.log(newFriend);
	var currentURL = window.location.origin;

	$.post(currentURL + "/api/survey", newFriend,
		function(data){
			console.log(data);
			//alert("Adding friend...");
			$("#match").text(data.name);
			$("#img").attr("src", data.photo);
		});

	$("#myModal").modal('toggle');
	
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