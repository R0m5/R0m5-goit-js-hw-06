const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const formValues = {};

  for (let [name, value] of formData) {
    formValues[name] = value;
  }

  if (!formValues.email || !formValues.password) {
    alert("Всі поля повинні бути заповнені!");
    return;
  }

  console.log(formValues);
  loginForm.reset();
});

// Other variants

// const form = document.querySelector(".login-form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const {
//     elements: { email, password },
//   } = event.currentTarget;

//   if (!email.value || !password.value) {
//     return alert("Please fill in all the fields!");
//   } else {
//     const userData = { [email.value]: password.value };
//     console.log(userData);
//     email.value = "";
//     password.value = "";
//   }
// });
