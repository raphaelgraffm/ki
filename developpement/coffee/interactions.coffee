	# Interactions avec la barre secondaire
	$('#activites a').mouseenter(deploy_two) 
	$nav_activites.mouseleave(undeploy_two) 
	$('#accueil a').mouseenter(undeploy_two) 
	$('#depannage a').mouseenter(undeploy_two) 

	# Assure le fonctionnement des animations quand l'utilisateur resize
	$(window).resize ->
		$main.attr 'style', ""
		$nav_activites.attr 'style', ""
		root.nav_activites_left = $nav_activites.css("left")
		root.main_left = $main.css("left")
		return
