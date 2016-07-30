function success (data, status, xml) {
	$('main').fadeOut(400, function () {
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
	    /* Instead of the line above, you could run the code below if the url returns the whole page instead of just the content (assuming it has a `#content`):
	    $.get(State.url, function(response) {
	        $('#content').html($(response).find('#content').html()); });
	    */
	});

	$('#navigation').on('click', 'a', function ( event ) {
		event.preventDefault();
		var lien = $(this).attr('href');
		if (lien != '#') {
			History.pushState(null,null,lien);
			//$('main').html(lien);
			$.ajax({
				url: 'html/' + lien,
				success: success
			});
		}
	});

});