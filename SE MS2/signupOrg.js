const keyMapOrg = {
  id: "ID",
  firstName: "First Name",
  lastName: "Last Name ",
  gender: "Gender",
  email: "Email",
  password: "Password",
  contactNumber: "Contact Number",
  organizationName: "Organization Name",
  orgType: "Organization Type",
  orgAdd: "Orgainzation Address",
  orgArea: "Organization Area",
  organizationGovernorate: "Organization Governorate",
};

function loadOrg() {
  let html = "";
  Object.keys(keyMapOrg).forEach((key) => {
    console.log("hi");
    if (key !== "id") {
      html += `
                    <div class = "area-and-edit">
                    <label class = "prof-label" for="${key}">${formatKeyOrg(
        key
      )}:</label>
                  
                  <input class = "prof-textarea" type="text" id="${key}" name="${key}" value="${
        keyMapOrg[key]
      }" >
                    </div>
                `;
    }
  });
  document.getElementById("the-form-org").innerHTML += html;

  document.getElementById(
    "the-form-org"
  ).innerHTML += `<div class = "submit-div"><button class ="submit-time">Submit</button></div>`;

  function formatKeyOrg(key) {
    const keyMap = {
      id: "ID",
      firstName: "First Name",
      lastName: "Last Name ",
      gender: "Gender",
      email: "Email",
      password: "Password",
      contactNumber: "Contact Number",
      organizationName: "Organization Name",
      orgType: "Organization Type",
      orgAdd: "Orgainzation Address",
      orgArea: "Organization Area",
      organizationGovernorate: "Organization Governorate",
    };

    return keyMap[key] || key; // Return the mapped key name, or the key itself if not found
  }
}

loadOrg();
