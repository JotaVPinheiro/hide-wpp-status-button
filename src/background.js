chrome.tabs.onActivated.addListener((tab) => {
  chrome.tabs.get(tab.tabId, (currentTabInfo) => {
    if (currentTabInfo.url == "https://web.whatsapp.com/") {
      chrome.tabs.executeScript(null, { file: "./src/foreground.js" }, () => {
        console.log("Foreground script executed");
      });
    }
  });
});
