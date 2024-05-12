import { adminAccount } from "./data/accounts.js";

document
  .querySelector(".login-button")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form from submitting normally

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    let user = null; // This will store the matched user, if any

    // Determine which account array to use based on account type

    user =
      adminAccount.username === username && adminAccount.password === password;
    console.log(adminAccount.username);
    if (user) {
      setTimeout(() => {
        window.location.href = "./adminMain.html";
      }, 1000);
    } else {
      alert("Login failed: Invalid username or password.");
    }
  });
