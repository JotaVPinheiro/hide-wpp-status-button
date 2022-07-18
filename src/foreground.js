const gotMessage = (message, sender, sendResponse) => {
  const displayStates = {
    false: "",
    true: "none",
  };

  if (message.checked !== undefined) {
    const statusButton = document.querySelector("._2cNrC");
    statusButton.style.display = displayStates[message.checked];
  }
};

chrome.runtime.onMessage.addListener(gotMessage);
