$(document).ready( function () {
	console.log('jQuery WORKS!');

	$('#nav-tab0').on('click', function () {
		$(this).addClass('hidden');
		$(".about-box").addClass('hidden');
		$(".contact-box").addClass('hidden');
		$(".welcome-box").removeClass('hidden');
		$("#nav-tab1").removeClass('selected');
		$("#nav-tab3").removeClass('selected');
	});
	
	$('#nav-tab1').on('click', function() {
		$("#nav-tab1").addClass('selected');
		$("#nav-tab3").removeClass('selected');
		$(".welcome-box").addClass('hidden');
		$(".about-box").removeClass('hidden');
		$("#nav-tab0").removeClass('hidden');
		$(".contact-box").addClass('hidden');

	});	
	
	$('#nav-tab2').on('click', function () {
		$("#nav-tab1").removeClass('selected');
		$("#nav-tab3").removeClass('selected');
		var y = $(window).scrollTop(); 
		console.log(y);
		$("html, body").animate({ scrollTop: y + ($(window).height() * 1.05 ) }, 600);
	});

	$('#nav-tab3').on('click', function() {
		$("#nav-tab3").addClass('selected');
		$("#nav-tab1").removeClass('selected');
		$(".welcome-box").addClass('hidden');
		$(".about-box").addClass('hidden');
		$(".contact-box").removeClass('hidden');
		$("#nav-tab0").removeClass('hidden');
	});

});