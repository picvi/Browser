let userData = {};

function getUserData() {
  const form = document.querySelector("form").elements;
  
  for (let element of form) {
    if (element.type === "radio") {
      if (element.checked) {
          userData[element.name] = element.value;
        }
      } else {
        console.log("others")
        userData[element.name] = element.value;
    }
  }
  console.log(userData);
}

document.getElementById("submit").addEventListener("click", getUserData);
