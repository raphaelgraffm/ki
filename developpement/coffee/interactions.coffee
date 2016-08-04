	# Interactions avec la barre secondaire
	activate_navigation = ->
		$('#activites a').mouseenter(deploy_two) 
		$navigation.mouseleave(undeploy_two) 

	desactivate_navigation = ->
		$('#activites a').off('mouseenter')
		$navigation.off('mouseleave')

	activate_navigation()

	$window.scroll ->
		TweenMax.set $fond, { backgroundPosition: "0px #{ -$window.scrollTop() * 0.2 }px" } 
