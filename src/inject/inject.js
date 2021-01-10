chrome.extension.sendMessage({}, function (response) {
	var readyStateCheckInterval = setInterval(function () {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			// ----------------------------------------------------------
			// This part of the script triggers when page is done loading
			console.log("Hello. This message was sent from scripts/inject.js");
			// ----------------------------------------------------------
			setInterval(clickConnect, 780000);
			setInterval(ligboxConnect, 780010);
		}
	}, 10);
});

// Credit to https://medium.com/@shivamrawat_756/how-to-prevent-google-colab-from-disconnecting-717b88a128c0
function clickConnect() {
	try {
		document.querySelector("colab-connect-button").click()
		console.log("Keeping Colab Alive!");	
	} catch (error) {
		console.log(error);
	}
}

function ligboxConnect() {
	try {
		document.querySelector("paper-button dialog-dismiss").click()	
		console.log('Prevented disconnection')
	} catch (error) {
		console.log(error);
	}
}
