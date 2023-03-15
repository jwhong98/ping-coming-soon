const submitBtn = document.getElementById("submit");
const email = document.getElementById("email");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const error = email.nextElementSibling;
  if (email.validity.typeMismatch || email.value == "") {
    email.classList.add("error");
    error.classList.add("active");
  } else {
    email.classList.remove("error");
    error.classList.remove("active");
  }
  //   email.validity.typeMismatch
  //     ?
  //     : ;
});
