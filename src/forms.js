const userData = {};

function getUserData() {
  const form = document.querySelector("form").elements;
  
  for (let element of form) {
    if (element.type === "radio" && element.checked) {
      userData[element.name] = element.value;
    } else {
        userData[element.name] = element.value;
    }
  }
  return userData;
}

document.getElementById("submit").addEventListener("click", (event) => {
  event.preventDefault();
  console.log(getUserData());
})
