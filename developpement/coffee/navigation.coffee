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
		lien = $(this).attr 'href'
		History.pushState(target: lien, $(this).attr('data-titre'), lien) unless lien == '#'
		
	success = (data, status, xml) ->
		timeline = new TimelineMax()
		timeline.to $main, 0.4, {opacity: 0, onComplete: updateData, onCompleteParams: [data]}
		timeline.call undeploy_two
		timeline.to $main, 0.4, opacity: 1
		return

	updateData = (data) ->
		$(window).scrollTop(0)
		$main.html(data)
		return
