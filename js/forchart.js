$(document).ready(function() {
	//瀑布流
	var $menu = $('.menu').masonry({
                itemSelector: '.product',
                isAnimated: true,
                percentPosition: true,
             
            });


    //slider更換顏色
    $('.slider ul li').click(function(){
    	$('.slider ul li').removeClass('current');
    	$(this).addClass('current');

    })
	//菜單替換效果，第三個失敗....
    $('.select-Mall').click(function(){
    	$('.menu-1').css('display','block');
    	$('.menu-2').css('display','block');
    	$('.menu-3').css('display','block');
    	$menu.masonry('layout');
    })

    $('.select-M1').click(function(){
    	$('.menu-1').css('display','block');
    	$('.menu-2').css('display','none');
    	$('.menu-3').css('display','none');
    	$menu.masonry('layout');
    })

     $('.select-M2').click(function(){
     	$('.menu-2').css('display','block');
    	$('.menu-1').css('display','none');
    	$('.menu-3').css('display','none');
    	$menu.masonry('layout');
    })

    $('.select-M3').click(function(){
    	$('.menu-3').css('display','block');
    	$('.menu-1').css('display','none');
    	$('.menu-2').css('display','none');
    	$menu.masonry('layout');
    })

    $('.like').click(function(e){
    	e.preventDefault();
        $(this).next('.like-checked').css('visibility','visible');

    })
    $('.like-checked').click(function(e){
        $(this).css('visibility','hidden');
       $(this).next('.like').css('visibility','visible');

    })


 	$('.product ul .shopcart').hover(
 		function(){
 		$(this).find('.fa-shopping-cart').css('color','#fff');
 		},
 		function(){
 		$(this).find('.fa-shopping-cart').css('color','#F75000');
 		}
 	)
})
