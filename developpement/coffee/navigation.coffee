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

	success = (data, status, xml) ->
		timeline = new TimelineMax()
		timeline.to $main, 0.4, {opacity: 0, onComplete: writeText, onCompleteParams: [data]}
		return

	writeText = (data) -> 
		tm = new TimelineMax()
		tm.set $main, {text:data}
		contenu = $('#principal').html()
		tm.set $('#principal'), {opacity: 0}
		tm.call undeploy_two
		tm.from $('main h1.titre'), 0.6, {scale: 0, ease: Elastic.easeOut}
		tm.to $('#principal'), 1, {opacity: 1}
		activate_navigation()
		return
