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

		var scrollDistance = $('.project-section')[0].offsetTop;
		$("html, body").animate({ scrollTop: scrollDistance }, 600);
	});

	// SKILLS
	$('#nav-tab5').on('click', function () {
		$(".welcome-box").removeClass('hidden');
		$(".about-box").addClass('hidden');
		$(".contact-box").addClass('hidden');
		$("#nav-tab1").removeClass('selected');
		$("#nav-tab3").removeClass('selected');
 
		var scrollDistance = $('#skills-section')[0].offsetTop;
		$("html, body").animate({ scrollTop: scrollDistance }, 600);
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