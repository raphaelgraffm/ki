$(document).ready(function () {

	$nav_activites = $('#nav-activites');

	$('#activites a').mouseenter(function () {
		$nav_activites.addClass('deployed');
	});

	$nav_activites.mouseleave(function () {
		$nav_activites.removeClass('deployed');
	});

	$('#accueil a').mouseenter(function () {
		$nav_activites.removeClass('deployed');
	});

	$('#depannage a').mouseenter(function () {
		$nav_activites.removeClass('deployed');
	});
});