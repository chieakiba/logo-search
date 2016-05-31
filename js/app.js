$(document).ready(function(){
	$('.dropdown-content li').click(function(){
		var scholarshipOption = $(this).children().html();
		$('.program').text(scholarshipOption);
		console.log(scholarshipOption);
		$('.program').off();
	});
	$('.dropdown-content li').click(function(){
		var educationOption = $(this).children().html();
		$('.education').text(educationOption);
		console.log(educationOption);
		$('.education').off();
	});
})