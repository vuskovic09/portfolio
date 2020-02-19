(function ($, root, undefined) {

	$(function () {

		'use strict';

		//PRELOADER
		$(document).ready(function(){
			setTimeout(function(){
				$('#preloader').fadeOut();
			}, 2500);
		});

		$(document).scroll(function(){
			//HEADER + HERO + SIDEBAR ANIMATIONS
			if($(window).scrollTop() == 0){
				
				$('.header-nav').addClass('js-hidden-right');

				$('.hero-menu').removeClass('js-hidden-right');

				$('.sidebar-navigation').addClass('js-hidden-left');
			} else {
				$('.header-nav').removeClass('js-hidden-right');
				
				$('.hero-menu').addClass('js-hidden-right');

				$('.sidebar-navigation').removeClass('js-hidden-left');
			}
		});

	});

})(jQuery, this);
