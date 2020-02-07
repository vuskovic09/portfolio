(function ($, root, undefined) {

	$(function () {

		'use strict';

		$(document).scroll(function(){

			if($(window).scrollTop() == 0){
				$('.header-nav').addClass('header-hidden');
				$('.header-content-menu').removeClass('header-hidden');
			} else {
				$('.header-nav').removeClass('header-hidden');
				$('.header-content-menu').addClass('header-hidden');
			}


			// $('.header-nav').animate({
			// 	"right": "0px"
			// }, 2000);

			// $('.header-content-menu').animate({
			// 	"right": "-3000px"
			// }, 2000);
		});

	});

})(jQuery, this);
