	# Interactions avec la barre secondaire
	$('#activites a').mouseenter(deploy_two) 
	$navigation.mouseleave(undeploy_two) 

	$window.scroll ->
		TweenMax.set $fond, { backgroundPosition: "0px #{ -$window.scrollTop() * 0.3 }px" } 
