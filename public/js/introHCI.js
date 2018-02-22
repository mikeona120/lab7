'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here

	$('.likeBtn').click(function(){
		console.log("test");
		//ga("send", "event", 'like', 'click'); This did not work. 
		//I am using code below from https://developers.google.com/analytics/devguides/collection/gtagjs/events
    	gtag('event', 'click', {
  			'event_category': 'like'
});
	});
};

