$(document).ready(function(){
	$('.register-data input').focus(function(){
		$(this).next('i').css('display','none');
	})
	$('.register-data input').blur(function(){
		$(this).next('i').css('display','block');
	})
})