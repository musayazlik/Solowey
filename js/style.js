// $(document).ready(function() {
// 	$("#sidebarCollapse").on('click', function() {
// 		$("#sidebar").toggleClass('active');
// 	});
// });

// // YUKARI ÇIK BUTTON
// $(document).ready(function() {
// 	$("#tikladin").click(function() {
// 		return $("body,html").animate({
// 			scrollTop: 0
// 		}, 500), !1
// 	});
// });


$(document).ready(function() {
	$("#preloader").css("display","none");
});


$(document).ready(function() {
	$("#blog-menu").click(function(){
		$("#blog-menu-alan").toggle("slow");
	})
});


jQuery(document).ready(function($) {
	$("ul li a").click(function(){ 
		if ($("li a").hasClass('active')) {
			$("li a").removeClass('active'); 
		}
		$(this).addClass('active');
	});
});


// MENU CLICK SCROLL

$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[data-toggle="tab"]').on('click', function(event) {
	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 500, function() {
				var $target = $(target);
				$target.focus();
				if ($target.is(":focus")) { 
					return false;
				} else {
					$target.attr('tabindex', '-1');
					$target.focus();
				};
			});
		}
	}
});

$(document).ready(function() {

	( function( window ) {

	// for touch devices: add class cs-hover to the figures when touching the items
	if( Modernizr.touch ) {

		// classie.js https://github.com/desandro/classie/blob/master/classie.js
		// class helper functions from bonzo https://github.com/ded/bonzo

		function classReg( className ) {
			return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
		}

		// classList support for class management
		// altho to be fair, the api sucks because it won't accept multiple classes at once
		var hasClass, addClass, removeClass;

		if ( 'classList' in document.documentElement ) {
			hasClass = function( elem, c ) {
				return elem.classList.contains( c );
			};
			addClass = function( elem, c ) {
				elem.classList.add( c );
			};
			removeClass = function( elem, c ) {
				elem.classList.remove( c );
			};
		}
		else {
			hasClass = function( elem, c ) {
				return classReg( c ).test( elem.className );
			};
			addClass = function( elem, c ) {
				if ( !hasClass( elem, c ) ) {
					elem.className = elem.className + ' ' + c;
				}
			};
			removeClass = function( elem, c ) {
				elem.className = elem.className.replace( classReg( c ), ' ' );
			};
		}

		function toggleClass( elem, c ) {
			var fn = hasClass( elem, c ) ? removeClass : addClass;
			fn( elem, c );
		}

		var classie = {
			// full names
			hasClass: hasClass,
			addClass: addClass,
			removeClass: removeClass,
			toggleClass: toggleClass,
			// short names
			has: hasClass,
			add: addClass,
			remove: removeClass,
			toggle: toggleClass
		};

		// transport
		if ( typeof define === 'function' && define.amd ) {
			// AMD
			define( classie );
		} else {
			// browser global
			window.classie = classie;
		}

		[].slice.call( document.querySelectorAll( 'ul.grid > li > figure' ) ).forEach( function( el, i ) {
			el.querySelector( 'figcaption > a' ).addEventListener( 'touchstart', function(e) {
				e.stopPropagation();
			}, false );
			el.addEventListener( 'touchstart', function(e) {
				classie.toggle( this, 'cs-hover' );
			}, false );
		} );

	}

})( window );

});




// MENU FIXED



$(document).ready(function() {
	function menuscroll() {
		var $navmenu = $('#navbar-menu');
		if ($(window).scrollTop() > 50) {
			$navmenu.addClass('is-scrolling');
		} else {
			$navmenu.removeClass("is-scrolling");
		}
	}
	menuscroll();
	$(window).on('scroll', function() {
		menuscroll();
	});
});



$(document).ready(function() {
	if (document.getElementById('map-canvas')){


		var myLatlng = new google.maps.LatLng(52.525595,13.393085);


		var mapOptions = {
			zoom: 14,
			center: myLatlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};


		var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

	}
});






// $(document).ready(function() {
// 	$("#html").click(function() {
// 		$( "#home" ).load( "/new/kategoriler/html-kategori.html" );
// 	});
// 	$("#css").click(function() {
// 		$( "#home" ).load( "/new/kategoriler/css-kategori.html" );
// 	});
// 	$("#javascript").click(function() {
// 		$( "#home" ).load( "/new/kategoriler/javascript-kategori.html" );
// 	});
// 	$("#php").click(function() {
// 		$( "#home" ).load( "/new/kategoriler/php-kategori.html" );
// 	});
// 	$("#photoshop").click(function() {
// 		$( "#home" ).load( "/new/kategoriler/photoshop-kategori.html" );
// 	});
// 	$("#bootstrap").click(function() {
// 		$( "#home" ).load( "/new/kategoriler/bootstrap-kategori.html" );
// 	});
// });