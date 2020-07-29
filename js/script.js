var menuOpen = false;
var menu = $('.hamburger-menu');
var nav = $('.nav-menu');

$(document).ready(function () {
	if ($(window).width() < 550) {
		nav.hide();
		menuOpen = false;
	} else {
		nav.show();
		menuOpen = true;
	}
});


//hamburger toggle
$(document).ready(function () {
	$(window).resize(function () {
		if ($(window).width() < 550) {
			nav.hide();
			menuOpen = false;
		} else {
			nav.show();
			menuOpen = true;
		}

	});

	menu.click(function () {
		nav.slideToggle(300);
		if (!menuOpen) {
			console.log("open");
			menu.addClass('open');
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

	// This will select everything with the class smoothScroll
	// This should prevent problems with carousel, scrollspy, etc...
	offsetY = 160;
	 $(window).resize(function() {
        if(this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function() {
            $(this).trigger('resizeEnd');
        }, 500);
    });


	$(window).bind('resizeEnd', function() {
		//do something, window hasn't changed size in 500ms
		
		if ($(window).width() < 770) {
				offsetY = 220;
			}
			if ($(window).width() < 550) {
				offsetY = 165;
			}
	});


	$('.smoothScroll').click(function () {

		if ($(window).width() < 550) {
			$('.nav-menu').slideUp();
		}
		if (!$(this).is("#logo")) {
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

		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - offsetY
				}, 1000); // The number here represents the speed of the scroll in milliseconds
				return false;
			}
		}
	});
});
