(function ($, root, undefined) {

	$(function () {

		'use strict';

		$(document).scroll(function(){

			if($(window).scrollTop() == 0){
				//HEADER ANIMATIONS
				$('.header-nav').addClass('js-hidden-right');
				$('.hero-menu').removeClass('js-hidden-right');

				//SIDEBAR ANIMATIONS
				$('.sidebar-navigation').addClass('js-hidden-left');
			} else {
				//HEADER ANIMATIONS
				$('.header-nav').removeClass('js-hidden-right');
				$('.hero-menu').addClass('js-hidden-right');

				//SIDEBAR ANIMATIONS
				$('.sidebar-navigation').removeClass('js-hidden-left');
			}
		});

	});

})(jQuery, this);
