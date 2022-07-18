const gotMessage = (message, sender, sendResponse) => {
  if (message.checked === true)
    document.querySelector("._2cNrC").style.display = "none";

  if (message.checked === false)
    document.querySelector("._2cNrC").style.display = "";
};

chrome.runtime.onMessage.addListener(gotMessage);

document.querySelector("._2cNrC").style.display = "none";
