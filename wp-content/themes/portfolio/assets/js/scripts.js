!function(c){c(function(){"use strict";c(document).ready(function(){setTimeout(function(){c("#preloader").fadeOut()},2e3),c(".link").click(function(e){e.preventDefault();var t=c(this).attr("href");c("html, body").animate({scrollTop:c("#"+t).offset().top-2.2*c(".tab").height()},500)})});var e=document.querySelector("#switch"),t=document.documentElement,o=getComputedStyle(document.body).getPropertyValue("--primaryDark"),r=getComputedStyle(document.body).getPropertyValue("--darkBackground"),d=getComputedStyle(document.body).getPropertyValue("--darkShadowOne"),a=getComputedStyle(document.body).getPropertyValue("--darkShadowTwo"),n=getComputedStyle(document.body).getPropertyValue("--darkText"),y=getComputedStyle(document.body).getPropertyValue("--primaryLight"),u=getComputedStyle(document.body).getPropertyValue("--primaryBackground"),s=getComputedStyle(document.body).getPropertyValue("--primaryShadowOne"),l=getComputedStyle(document.body).getPropertyValue("--primaryShadowTwo"),i=getComputedStyle(document.body).getPropertyValue("--blackText"),m=getComputedStyle(document.body).getPropertyValue("--whiteText");function p(){document.documentElement.classList.add("transition"),window.setTimeout(function(){document.documentElement.classList.remove("transition")},1e3)}e.addEventListener("change",function(){this.checked?(p(),t.style.setProperty("--primaryLight",o),t.style.setProperty("--primaryBackground",r),t.style.setProperty("--primaryShadowOne",d),t.style.setProperty("--primaryShadowTwo",a),t.style.setProperty("--blackText",m),t.style.setProperty("--tabTextRight",n)):(p(),t.style.setProperty("--primaryLight",y),t.style.setProperty("--primaryBackground",u),t.style.setProperty("--primaryShadowOne",s),t.style.setProperty("--primaryShadowTwo",l),t.style.setProperty("--blackText",i),t.style.setProperty("--tabTextRight",i))}),c(document).scroll(function(){0==c(window).scrollTop()?(c(".header-nav").addClass("js-hidden-up"),c(".hero-menu").removeClass("js-hidden-right"),c(".sidebar-navigation").addClass("js-hidden-left")):(c(".header-nav").removeClass("js-hidden-up"),c(".hero-menu").addClass("js-hidden-right"),c(".sidebar-navigation").removeClass("js-hidden-left"))})})}(jQuery);