	# Interactions avec la barre secondaire
	activate_navigation = ->
		$('#activites a').mouseenter(deploy_two) 
		$('#nav-hover').mouseenter(undeploy_two) 
		$('#flot-activites').mouseenter ->
			$flottante.addClass('flot-deployed')
		$flottante.mouseleave ->
			$flottante.removeClass('flot-deployed')


	desactivate_navigation = ->
		$('#activites a').off('mouseenter')
		$('#nav-hover').off('mouseenter')
		$('#flot-activites').off('mouseenter')
		$flottante.off('mouseleave')

	activate_navigation()
	$('#flot-nav-titre').text $('h1.titre').text()

	$window.scroll ->
		TweenMax.set $fond, { backgroundPosition: "0px #{ -$window.scrollTop() * 0.2 }px" } 
		if parseInt($window.scrollTop()) > parseInt(root.principal_top)
				$flottante.addClass('flot-appeared');
		else
				$flottante.removeClass('flot-deployed');
				$flottante.removeClass('flot-appeared');
		return
