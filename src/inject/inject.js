chrome.extension.sendMessage({}, function (response) {
	var readyStateCheckInterval = setInterval(function () {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			// ----------------------------------------------------------
			// This part of the script triggers when page is done loading
			console.log("Hello. This message was sent from scripts/inject.js");
			// ----------------------------------------------------------
			setInterval(clickConnect, 120000);
		}
	}, 10);
});

function clickConnect() {
	try {
		document.querySelector("colab-connect-button").click()
		console.log("Keeping Colab Alive!");	
	} catch (error) {
		console.log(error);
	}
}

