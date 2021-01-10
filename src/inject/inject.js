chrome.extension.sendMessage({}, function (response) {
	var readyStateCheckInterval = setInterval(function () {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			// ----------------------------------------------------------
			// This part of the script triggers when page is done loading
			console.log("Hello. This message was sent from scripts/inject.js");
			// ----------------------------------------------------------
			setInterval(clickConnect, 60000);
		}
	}, 10);
});

function ClickConnect(){
{
console.log(“Working”);
document.querySelector(“colab-connect-button”).shadowRoot.getElementById(‘connect’).click();
}
