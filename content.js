// content.js
console.log("Elthelas/Roll20 Connector Running");
let listener = function(request, sender, sendResponse) {
  console.log("message received");
  $("#textchat-input textarea").val(request.roll);
  $("#textchat-input button").click();
}
if (chrome) {
  chrome.runtime.onMessage.addListener(listener);
} else {
  browser.runtime.onMessage.addListener(listener);
}
