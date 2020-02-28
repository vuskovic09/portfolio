(function ($, root, undefined) {

	$(function () {

		'use strict';

		//PRELOADER
		$(document).ready(function(){
			setTimeout(function(){
				$('#preloader').fadeOut();
			}, 2000);

			//LINK CLICK SCROLL
			$('.link').click(function(event){
				event.preventDefault();
				var target = $(this).attr('href');
		
			$('html, body').animate({
				scrollTop: $("#" + target).offset().top - 2.2 * $('.tab').height()
			}, 500);
			});
			
		});

		$(document).scroll(function(){
			//HEADER + HERO + SIDEBAR ANIMATIONS
			if($(window).scrollTop() == 0){
				$('.header-nav').addClass('js-hidden-up');

				$('.hero-menu').removeClass('js-hidden-right');

				$('.sidebar-navigation').addClass('js-hidden-left');
			} 
			else {
				$('.header-nav').removeClass('js-hidden-up');
				
				$('.hero-menu').addClass('js-hidden-right');

				$('.sidebar-navigation').removeClass('js-hidden-left');
			}
		});

	});

})(jQuery, this);
