	History = window.History

	return false unless History.enabled

	History.Adapter.bind window, 'statechange', ->
		State = History.getState()
		cible = State.data.target
		$.ajax(
			url: "html/#{cible}"
			success: success
		)

	$('#navigation').on 'click', 'a', (event) ->
		event.preventDefault()
		desactivate_navigation()
		lien = $(this).attr 'href'
		History.pushState(target: lien, $(this).attr('data-titre'), lien) unless lien == '#'
		return

	$flottante.on 'click', 'a', (event) ->
		event.preventDefault()
		desactivate_navigation()
		lien = $(this).attr 'href'
		History.pushState(target: lien, $(this).attr('data-titre'), lien) unless lien == '#'
		return

	$main.on 'click', 'a', (event) ->
		event.preventDefault()
		desactivate_navigation()
		lien = $(this).attr 'href'
		History.pushState(target: lien, $(this).attr('data-titre'), lien) unless lien == '#'
		return

	success = (data, status, xml) ->
		timeline = new TimelineMax() 
		timeline.to $main, 0.4, {opacity: 0, onComplete: writeText, onCompleteParams: [data]}
		if $flottante.hasClass 'flot-appeared'
			$flottante.removeClass('flot-deployed').removeClass('flot-appeared').addClass('flot-triggered')
		return

	writeText = (data) -> 
		tm = new TimelineMax()
		tm.set $('#switchable'), {text:data}
		root.principal = $('#principal')
		root.principal_top = root.principal.offset().top
		contenu = root.principal.html()
		$('#flot-nav-titre').text $('h1.titre').text()
		tm.set root.principal, {opacity: 0}
		if $flottante.hasClass 'flot-triggered'
			tm.to window, 0.4, {scrollTo:0}
			$flottante.removeClass 'flot-triggered'
		tm.call undeploy_two
		tm.from $('main h1.titre'), 0.6, {scale: 0.5, ease: Elastic.easeOut.config(0.6,0.6)}
		tm.to root.principal, 1, {opacity: 1}
		activate_navigation()
		return
