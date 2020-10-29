document.getElementById("submit").addEventListener("click", getUserData);

function getUserData() {
  const form = document.querySelector("form").elements;
  const userData = {};

  for (let element of form) {
    userData[element.name] = element.value;

    if (element.checked) {
      userData[element.name] = element.value;
    }
  }

  console.log(userData)
}
