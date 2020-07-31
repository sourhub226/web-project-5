var menuOpen = false;
var menu = $('.hamburger-menu');
var nav = $('.nav-menu');
let root = document.documentElement;
var offsetY = 0;


$(window).resize(function () {
	menuOpen = false;
	menu.removeClass('open');
});

//hamburger toggle
$(document).ready(function () {
	$(window).resize(function () {
		if ($(window).width() > 550) {
			nav.show();
		} else {
			nav.hide();
		}

	});

	menu.click(function () {
		nav.slideToggle(300);

		if (!menuOpen) {
			console.log("open");
			menu.addClass('open');
			nav.css({
				"display": "flex"
			})
			menuOpen = true;
		} else {
			console.log("close");
			menu.removeClass('open');
			menuOpen = false;
		}

	});
});


//smooth scroll
$(function () {
	$('.smoothScroll').click(function () {
//		if ($(this).is("#about-link")) {
//			offsetY = 165;
//		} else {
//			
//		}
		offsetY = parseInt(getComputedStyle(root).getPropertyValue('--offset'));
		console.log(offsetY);

		if ($(window).width() < 550) {
			if (!$(this).is("#logo")) {
				nav.slideToggle();
				if (!menuOpen) {
					console.log("open");
					menu.addClass('open');
					menuOpen = true;
				} else {
					console.log("close");
					menu.removeClass('open');
					menuOpen = false;
				}
			}

		}
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - offsetY
				}, 1000);
				return false;
			}
		}
	});
});
