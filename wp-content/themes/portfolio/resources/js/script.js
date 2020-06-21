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
		var darkPrimary = getComputedStyle(document.body).getPropertyValue('--primaryDark');
		var	darkBackground = getComputedStyle(document.body).getPropertyValue('--darkBackground');

		
		var primaryLight = getComputedStyle(document.body).getPropertyValue('--primaryLight');
		var	primaryBackground = getComputedStyle(document.body).getPropertyValue('--primaryBackground');

        checkbox.addEventListener('change', function() {
			
			if(this.checked) {
				trans()
				root.style.setProperty('--primaryLight', darkPrimary);
				root.style.setProperty('--primaryBackground', darkBackground);
			} else{
				trans()
				root.style.setProperty('--primaryLight', primaryLight);
				root.style.setProperty('--primaryBackground', primaryBackground);
			}
		});

		function trans() {
            document.documentElement.classList.add('transition');
            window.setTimeout(function(){
                document.documentElement.classList.remove('transition');
            }, 1000)
		};
		
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
