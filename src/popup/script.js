const onChange = (event) => {
  const { checked } = event.target;

  let queryOptions = { active: true, lastFocusedWindow: true };
  chrome.tabs.query(queryOptions, (tabs) => {
    if (tabs[0].url == "https://web.whatsapp.com/") {
      chrome.tabs.sendMessage(tabs[0].id, { checked });
    }
  });

  chrome.storage.local.set({ checked });
};

const statusToggleButton = document.querySelector("#statusToggleButton");

statusToggleButton.onchange = onChange;

chrome.storage.local.get(["checked"], ({ checked }) => {
  statusToggleButton.checked = checked;
});
