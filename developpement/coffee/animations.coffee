	# Animations de la barre secondaire
	deploy_two = ->
		tl = new TimelineMax {tweens : [
			TweenMax.to $navigation, 1, {top: "#{-parseInt(root.navigation_top)}px", ease:Power4.easeOut}
			TweenMax.to $main, 1, {top: "#{parseInt(root.main_top) - parseInt(root.navigation_top) * 0.7}px", opacity: 0.15, ease:Power4.easeOut}
		]}
		return

	undeploy_two = ->
		tl = new TimelineMax {tweens : [
			TweenMax.to $navigation, 1, {top: "0px", ease:Power4.easeOut}
			TweenMax.to $main, 1, {top: root.main_top, opacity: 1, ease:Power4.easeOut}
		]}
		return
