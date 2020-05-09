$(function() {

	let header = $("header");
	let introH = $("#intro").innerHeight();
	let scrollOffset = $(window).scrollTop();


	// Fixed Header
	checkScroll(scrollOffset);

	$(window).on("scroll", function() {
		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);
	})

	function checkScroll(scrollOffset) {
		if(scrollOffset >= introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	} 


	// Smooth Scroll
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let blockId = $(this).data("scroll");
		let blockOffset = $(blockId).offset().top;

		$("#nav a").removeClass("active");
		$(this).addClass("active");

		$("html, body").animate({
			scrollTop: blockOffset
		}, 500);
	});


	// Menu nav toggle
	$("#nav_toggle").on("click", function(){
		event.preventDefault();

		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
	});

	// Collapse
	$("[data-collapse]").on("click", function(event) {
		event.preventDefault();

		let blockId = $(this).data("collapse");

		$(this).toggleClass("active");
	});


});