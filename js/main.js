$(document).ready(function () {

	/**
	 * Animation de la barre de navigation secondaire "Activites"
	 */
	$nav_activites = $('#nav-activites');
	$main = $('main');

	function deploy_principale () {
		$nav_activites.removeClass('invisible');
		$nav_activites.addClass('deployed');
		$main.addClass('main-deployed');		
	}

	function undeploy_principale () {
		$nav_activites.removeClass('deployed');		
		$main.removeClass('main-deployed');		
	}

	$('#activites a').mouseenter(deploy_principale);

	$nav_activites.mouseleave(undeploy_principale);

	$('#accueil a').mouseenter(undeploy_principale);

	$('#depannage a').mouseenter(undeploy_principale);
});