	# Animations de la barre secondaire
	deploy_two = ->
		tl = new TimelineMax {tweens : [
			TweenMax.to $nav_activites, 1, {left: "#{parseInt(root.nav_activites_left) + parseInt($(window).width()) * 0.13}px", ease:Power4.easeOut}
			TweenMax.to $main, 1, {left: "#{parseInt(root.main_left)  + parseInt($(window).width()) * 0.08}px", opacity: 0.15, ease:Power4.easeOut}
		]}
		return

	undeploy_two = ->
		tl = new TimelineMax {tweens : [
			TweenMax.to $nav_activites, 1, {left: root.nav_activites_left, ease:Power4.easeOut}
			TweenMax.to $main, 1, {left: root.main_left, opacity: 1, ease:Power4.easeOut}
		]}
		return
