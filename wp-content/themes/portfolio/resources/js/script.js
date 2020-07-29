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
		var darkShadowOne =  getComputedStyle(document.body).getPropertyValue('--darkShadowOne');
		var darkShadowTwo =  getComputedStyle(document.body).getPropertyValue('--darkShadowTwo');
		var darkText =  getComputedStyle(document.body).getPropertyValue('--darkText');
		
		
		var primaryLight = getComputedStyle(document.body).getPropertyValue('--primaryLight');
		var	primaryBackground = getComputedStyle(document.body).getPropertyValue('--primaryBackground');
		var primaryShadowOne =  getComputedStyle(document.body).getPropertyValue('--primaryShadowOne');
		var primaryShadowTwo =  getComputedStyle(document.body).getPropertyValue('--primaryShadowTwo');
		
		var blackText =  getComputedStyle(document.body).getPropertyValue('--blackText');
		var whiteText =  getComputedStyle(document.body).getPropertyValue('--whiteText');

        checkbox.addEventListener('change', function() {
			
			if(this.checked) {
				trans()
				root.style.setProperty('--primaryLight', darkPrimary);
				root.style.setProperty('--primaryBackground', darkBackground);
				root.style.setProperty('--primaryShadowOne', darkShadowOne);
				root.style.setProperty('--primaryShadowTwo', darkShadowTwo);
				root.style.setProperty('--blackText', whiteText);
				root.style.setProperty('--tabTextRight', darkText);
			} else{
				trans()
				root.style.setProperty('--primaryLight', primaryLight);
				root.style.setProperty('--primaryBackground', primaryBackground);
				root.style.setProperty('--primaryShadowOne', primaryShadowOne);
				root.style.setProperty('--primaryShadowTwo', primaryShadowTwo);
				root.style.setProperty('--blackText', blackText);
				root.style.setProperty('--tabTextRight', blackText);
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
