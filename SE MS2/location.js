import { thisOrg } from "./data/orgData.js";

const app = document.getElementById("app");

let html = "";
html += `<form>`;
Object.keys(thisOrg).forEach((key) => {
  if (key !== "id") {
    html += `
                    <label for="${key}">${formatKey(key)}:</label>
                    <input type="text" id="${key}" name="${key}" value="${
      thisOrg[key]
    }" readonly>
                    <button type="button" class="edit-btn">Edit</button>
                    <br>
                `;
  }
});
html += `</form>`;
app.innerHTML += html;

function formatKey(key) {
  const keyMap = {
    id: "ID",
    firstName: "Firs Name",
    lastName: "Last Name ",
    gender: "Gender",
    email: "Email",
    password: "Password",
    contactNumber: "Contact NUmber",
    organizationName: "Organization Name",
    organizationType: "Organization Type",
    organizationAddress: "Organization Address",
    organizationArea: "Organization Area",
    organizationGovernorate: "Organization Governorate",

    documents: "Documents",
  };

  return keyMap[key] || key; // Return the mapped key name, or the key itself if not found
}

const editButtons = document.querySelectorAll(".edit-btn");
editButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const input = button.previousElementSibling;
    input.readOnly = !input.readOnly;
    input.focus();
    button.textContent = input.readOnly ? "Edit" : "Save";
  });
});
