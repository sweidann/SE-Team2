const keyMap = {
  id: "ID",
  firstName: "First Name",
  lastName: "Last Name ",
  gender: "Gender",
  email: "Email",
  password: "Password",
  contactNumber: "Contact Number",
  Address: "Address",
  Area: "Area",
  Governorate: "Governorate",
  documents: "Documents",
};

function loadDonor() {
  let html = "";
  Object.keys(keyMap).forEach((key) => {
    console.log("hi");
    if (key !== "id") {
      html += `
                    <div class = "area-and-edit">
                    <label class = "prof-label" for="${key}">${formatKey(
        key
      )}:</label>
                  
                  <input class = "prof-textarea" type="text" id="${key}" name="${key}" value="${
        keyMap[key]
      }" >
                    </div>
                `;
    }
  });
  document.getElementById("the-form-donor").innerHTML += html;

  document.getElementById(
    "the-form-donor"
  ).innerHTML += `<div class = "submit-div"><button class ="submit-time">Submit</button></div>`;

  function formatKey(key) {
    const keyMap = {
      id: "ID",
      firstName: "First Name",
      lastName: "Last Name ",
      gender: "Gender",
      email: "Email",
      password: "Password",
      contactNumber: "Contact Number",
      Address: "Address",
      Area: "Area",
      Governorate: "Governorate",
      documents: "Documents",
    };

    return keyMap[key] || key; // Return the mapped key name, or the key itself if not found
  }
}

loadDonor();
