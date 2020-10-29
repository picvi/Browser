document.getElementById("submit").addEventListener("click", getUserData);
const userData = {};

function getUserData() {
  const form = document.querySelector("form").elements;
  
  for (let element of form) {
    switch (element.type) {
      case "radio":
        
        console.log("radio")
        break;
      case "select":
        
        console.log("select")
        break;
      default:
        console.log("others")
        userData[element.name] = element.value;
    }
  }

  return userData;
}

function getOptionData(elem) {
  for (let option of elem.options) {
    if (option.selected) {
      userData[option.name] = option.value;
    }
  }
}

function getRadioData() {
  const buttons = document.getElementsByName("sex");
  for (let button of buttons) {
    if (button.checked) {
      userData[button.name] = button.value;
    }
  }
}