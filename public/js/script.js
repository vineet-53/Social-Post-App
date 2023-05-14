const form = document.querySelector("form");
const password = form.querySelector("input[data-password]");
const confirmPassword = form.querySelector("input[data-confirm-password]");
form.addEventListener("submit", (e) => {
  console.log(password.value, confirmPassword.value);
  if (password.value == "" && confirmPassword.value == "") {
    alertUser("Some Field is Empty");
    e.preventDefault();
  }
  if (password.value != confirmPassword.value) {
    alertUser("Enter Valid Username/Password");
    e.preventDefault();
  }
});
const alertUser = (message) => {
  const promptMessage = document.createElement("p");
  promptMessage.innerHTML = message;
  promptMessage.style.textAlign = "center";
  form.prepend(promptMessage);
};
