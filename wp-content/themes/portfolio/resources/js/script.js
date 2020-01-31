(function ($, root, undefined) {

	$(function () {

		'use strict';
		
		$(document).scroll(function(){

			if($(window).scrollTop() == 0){
				console.log("At top");
				$('.header-nav').addClass('header-hidden');
				$('.header-content-menu').removeClass('header-hidden');
			} else {
				console.log("Not at top");
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
