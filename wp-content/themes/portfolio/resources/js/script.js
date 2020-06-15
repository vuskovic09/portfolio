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

		var checkbox = document.querySelector('#switch');
		var root = document.documentElement;
		var darkPrimary = root.style.getPropertyValue('--primaryDark');
		var	darkBackground = root.style.getPropertyValue('--darkBackground');

        checkbox.addEventListener('change', function() {
			console.log(darkPrimary);
			
			root.style.setProperty('--primaryLight', darkPrimary);
			root.style.setProperty('--primaryBackground', --darkBackground);
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
