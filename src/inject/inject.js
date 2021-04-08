chrome.extension.sendMessage({}, function (response) {
	var readyStateCheckInterval = setInterval(function () {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			// ----------------------------------------------------------
			// This part of the script triggers when page is done loading
			console.log("Hello. This message was sent from scripts/inject.js");
			// ----------------------------------------------------------
			setInterval(clickConnect, 60000);	//1 minute
			//setInterval(clickConnect, 20000);	//20 sec
		}
	}, 10);
});


// Credit to https://medium.com/@shivamrawat_756/how-to-prevent-google-colab-from-disconnecting-717b88a128c0
function clickConnect() {
	try {
		 document.querySelector("#top-toolbar > colab-connect-button").shadowRoot.querySelector("#connect").click();
		// this also works, if above one doesn't work, comment it and uncomment below one
		//document.querySelector("colab-connect-button").shadowRoot.getElementById('connect').click();
		setTimeout(clickDismiss, 500);
		console.log("Keeping Colab Alive!");	
	} catch (error) {
		console.log(error);
	}
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function clickDismiss() {
	
	try {	
		
		// click manage session button
		document.querySelector("colab-usage-display").shadowRoot.querySelector("paper-button").click();
	
		} catch (error) {
		console.log(error);
	}
	
		try {
			// leave from manage session window
			await sleep(1000);
			document.querySelector('colab-sessions-dialog').shadowRoot.querySelector('.dismiss').click();
				} catch (error) {
		console.log(error);
	}
	
		try {	
			// click close button
			await sleep(1000);
			document.querySelector("paper-tab").querySelector("paper-icon-button").shadowRoot.getElementById('icon').click();
				} catch (error) {
		console.log(error);
	}
	
}
