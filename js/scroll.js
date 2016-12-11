$(document).ready(function(){
	$(".ToFeature").click(function() {
    	$('html, body').animate({
        	scrollTop: $(".feature").offset().top
   		}, 1000);
	});
	$(".ToChief").click(function() {
    	$('html, body').animate({
        	scrollTop: $(".chief").offset().top
   		}, 1000);
	});
	$(".ToMap").click(function() {
    	$('html, body').animate({
        	scrollTop: $(".map").offset().top
   		}, 1000);
	});
})
