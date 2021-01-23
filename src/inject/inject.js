chrome.extension.sendMessage({}, function (response) {
	var readyStateCheckInterval = setInterval(function () {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			// ----------------------------------------------------------
			// This part of the script triggers when page is done loading
			console.log("Hello. This message was sent from scripts/inject.js");
			// ----------------------------------------------------------
			//setInterval(clickConnect, 720000);	//12 minutes
			setInterval(clickConnect, 20000);	//12 minutes
		}
	}, 10);
});

function clickConnect() {
	try {
		document.querySelector("colab-connect-button").click()
		console.log("Keeping Colab Alive!");	
		
		
		
	
	//closing assumed-open dialog after 1 second
	setTimeout(function(){

		document.querySelector('colab-sessions-dialog').shadowRoot.querySelector('.dismiss').click()

	}, 1000 )

		
		
		
		
	} catch (error) {
		console.log(error);
	}
}

