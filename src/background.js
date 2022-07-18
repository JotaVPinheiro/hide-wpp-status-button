chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    tab.url === "https://web.whatsapp.com/" &&
    changeInfo.status === "complete"
  ) {
    chrome.storage.local.get(["checked"], ({ checked }) => {
      chrome.tabs.sendMessage(tabId, { checked });
    });
  }
});
