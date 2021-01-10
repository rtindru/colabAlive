chrome.extension.sendMessage({}, function (response) {
	var readyStateCheckInterval = setInterval(function () {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			// ----------------------------------------------------------
			// This part of the script triggers when page is done loading
			console.log("Hello. This message was sent from scripts/inject.js");
			// ----------------------------------------------------------
<<<<<<< HEAD
			setInterval(clickConnect, 60000);
=======
			setInterval(clickConnect, 120000);
>>>>>>> 6b08b8c14e01958edfb03cab2fab1df46271a1bf
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

