// global variable
var scholarshipOption;
var educationOption;

$(document).ready(function(){
	$('.scholarship li').click(function(){
		scholarshipOption = $(this).children().html();
		$('.program').text(scholarshipOption);
		console.log(scholarshipOption);
	});
	$('.education li').click(function(){
		educationOption = $(this).children().html();
		$('.education').text(educationOption);
		console.log(educationOption);
	});
})