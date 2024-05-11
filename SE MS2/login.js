import { donorsAccounts, organizationAccounts } from "./data/accounts.js";

let accountType = "";

document
  .querySelector(".login-button")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form from submitting normally

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let user = null; // This will store the matched user, if any

    // Determine which account array to use based on account type
    if (accountType === "donor") {
      user = donorsAccounts.find(
        (user) => user.email === email && user.password === password
      );
    } else if (accountType === "organizationRep") {
      user = organizationAccounts.find(
        (user) => user.email === email && user.password === password
      );
    } else {
      alert("choose account type");
      return;
    }

    const resultDiv = document.getElementById("loginResult");
    if (user) {
      setTimeout(() => {
        if (accountType === "donor") {
          window.location.href = "./donorUI/donorhome.html";
        } else if (accountType === "organizationRep") {
          window.location.href = "./Organization/organizationMain.html";
        }
      }, 1000);
    } else {
      alert("Login failed: Invalid username or password.");
    }
  });

document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", function (event) {
    if (this.id === "org") {
      document.getElementById("rep-img").style.border = "3px solid white";
      document.getElementById("donor-img").style.border = "none";
      accountType = "organizationRep";
    } else if (this.id === "donor") {
      document.getElementById("donor-img").style.border = "3px solid white";
      document.getElementById("rep-img").style.border = "none";
      accountType = "donor";
    }

    console.log(accountType);
  });
});
