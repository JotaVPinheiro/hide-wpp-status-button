const onChange = (event) => {
  console.log(event.target.checked);
};

const statusToggleButton = document.querySelector("#statusToggleButton");

statusToggleButton.onchange = onChange;
