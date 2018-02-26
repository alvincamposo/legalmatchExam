$(document).ready(function(){
	$('.fields1 input[type="text"]').mouseover(function(){
		$('.errorMsg').css("display", "block");
	});
	$('input[type="text"]').mouseout(function(){
		$('.errorMsg').css("display", "none");
	});
})