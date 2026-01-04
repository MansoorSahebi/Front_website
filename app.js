const form = document.getElementById("loginForm");
const loader = document.getElementById("loader");
const btnText = document.getElementById("btnText");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  btnText.style.display = "none";
  loader.style.display = "block";

  setTimeout(() => {
    loader.style.display = "none";
    btnText.style.display = "block";
    alert("Login Successful 🎉");
    form.reset();
  }, 2000);
});

function togglePassword() {
  const passwordInput = document.getElementById("password");
  passwordInput.type =
    passwordInput.type === "password" ? "text" : "password";
}
