$(document).ready(function() {
    $('.login-data input').focus(function() {
    	$(this).next('i').css("display","none");
    	
    })
    $('.login-data input').blur(function() {
    	$(this).next('i').css("display","block");
    	
    })
})
