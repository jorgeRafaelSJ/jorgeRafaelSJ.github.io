$(document).ready( function () {
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	
	// HOME
	$('#nav-tab0').on('click', function () {
		$(".about-box").addClass('hidden');
		$(".contact-box").addClass('hidden');
		$(".welcome-box").removeClass('hidden');
		$("#nav-tab1").removeClass('selected');
		$("#nav-tab3").removeClass('selected');
	});
	
	// ABOUT
	$('#nav-tab1').on('click', function() {
		$("#nav-tab1").addClass('selected');
		$("#nav-tab3").removeClass('selected');
		$(".welcome-box").addClass('hidden');
		$(".about-box").removeClass('hidden');
		$(".contact-box").addClass('hidden');

	});	
	
	// WORK
	$('#nav-tab2').on('click', function () {
		$(".welcome-box").removeClass('hidden');
		$(".about-box").addClass('hidden');
		$(".contact-box").addClass('hidden');
		$("#nav-tab1").removeClass('selected');
		$("#nav-tab3").removeClass('selected');
		var y = $(window).scrollTop(); 
		console.log(y);
		$("html, body").animate({ scrollTop: y + ($(window).height() * 1.2 ) }, 600);
	});

	// CONTACT
	$('#nav-tab3').on('click', function() {
		$("#nav-tab3").addClass('selected');
		$("#nav-tab1").removeClass('selected');
		$(".welcome-box").addClass('hidden');
		$(".about-box").addClass('hidden');
		$(".contact-box").removeClass('hidden');
	});

});