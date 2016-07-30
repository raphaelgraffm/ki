$(document).ready(function () {

	var $nav_principale = $('#nav-principale');
	var $nav_activites = $('#nav-activites');
	var $main = $('main');
	var $logo = $('#logo');

	/**
	 * Animation de la barre de navigation principale
	 */
	function deploy_principale () {
		$nav_principale.addClass('deployed-one');
		$main.addClass('main-deployed-one');		
	}

	function undeploy_principale () {
		$nav_activites.removeClass('deployed-one');		
		$main.removeClass('main-deployed-one');		
	}

	function toggle_principale () {
		$nav_activites.toggleClass('deployed-one');		
		$main.toggleClass('main-deployed-one');		
	}

	$logo.click(toggle_principale);

	/**
	 * Animation de la barre de navigation secondaire "Activites"
	 */
	function deploy_secondaire () {
		$nav_activites.removeClass('invisible');
		$nav_activites.addClass('deployed-two');
		$main.addClass('main-deployed-two');		
	}

	function undeploy_secondaire () {
		$nav_activites.removeClass('deployed-two');		
		$main.removeClass('main-deployed-two');		
	}

	$('#activites a').mouseenter(deploy_secondaire);

	$nav_activites.mouseleave(undeploy_secondaire);

	$('#accueil a').mouseenter(undeploy_secondaire);

	$('#depannage a').mouseenter(undeploy_secondaire);
});