$(function() {
	//Blue links
	// $("a").css({
	// 	"color": "blue"
	// });
	//Handle clicks on social icons
	// $('.nav-icon-white').click(function(){
	// 	console.log('social icons')
	// })

	//Initialise carousel
	$('.carousel').carousel({
		interval: 0
	});

	//Carousel nevigation
	$('.carousel-control').click(function(event) {
		if($(this).hasClass("left")) {
			$('.carousel').carousel('prev');
		}
		else {
  		$('.carousel').carousel('next');	
		}
	});

	//Scroll handler
	$('a').click(function(){
		// Check link is on this same page
		if (location.pathname == this.pathname && location.hostname == this.hostname ) {
			// Check it's not a deadlink
			if (this.hash.length > 1){
				// Scroll to target	
				$('html,body').stop();
				$('html,body').animate({
		           scrollTop: $(this.hash).offset().top
		    	}, 1000);
			};

		};
	})

	//Copied Smooth scroll
	// $('a[href*=#]:not([href=#])').click(function() {
	//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

	//       var target = $(this.hash);
	//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	//       if (target.length) {
	//         $('html,body').animate({
	//           scrollTop: target.offset().top
	//         }, 1000);
	//         return false;
	//       }
	//     }
	// }); 

	//Change menu focus 
	$('#navbar a').click(function() {
			$(this).parent().siblings().removeClass("active");
			$(this).parent().addClass("active");
	});
}); 
