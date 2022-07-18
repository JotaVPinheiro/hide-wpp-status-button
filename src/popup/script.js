const onChange = (event) => {
  const checked = event.target.checked;

  let queryOptions = { active: true, lastFocusedWindow: true };
  chrome.tabs.query(queryOptions, (tabs) => {
    if (tabs[0].url == "https://web.whatsapp.com/") {
      chrome.tabs.sendMessage(tabs[0].id, { checked });
    }
  });
};

const statusToggleButton = document.querySelector("#statusToggleButton");

statusToggleButton.onchange = onChange;
