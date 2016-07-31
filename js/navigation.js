function success (data, status, xml) {
	$('main').fadeOut(400).promise().done( function () {
		$(window).scrollTop(0);
		$(this).html(data).fadeIn(400);
	});
}

$(document).ready(function () {

	var History = window.History; // Note: We are using a capital H instead of a lower h
	if ( !History.enabled ) {
	     // History.js is disabled for this browser.
	     // This is because we can optionally choose to support HTML4 browsers or not.
	    return false;
	}

	// Bind to StateChange Event
	History.Adapter.bind(window,'statechange',function() { // Note: We are using statechange instead of popstate
	    var State = History.getState();
	    var cible = State.data.target;

		$.ajax({
			url: 'html/' + cible,
			success: success
		});
	});

	$('#navigation').on('click', 'a', function ( event ) {
		event.preventDefault();
		var lien = $(this).attr('href');
		if (lien != '#') {
			History.pushState({target: lien},$(this).attr('data-titre'),lien);
		}
	});

});