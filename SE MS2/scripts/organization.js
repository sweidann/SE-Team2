import {
  clothesPosts,
  toysPosts,
  foodPosts,
  medicalPosts,
  stationaryPosts,
  bookPosts,
  bloodPosts,
} from "../data/posts.js";

document.addEventListener("DOMContentLoaded", function () {
  const buttonsRows = document.querySelectorAll(".button-row");
  const postButton = document.querySelector(".post-button");
  const postNow = document.getElementById("postnow");
  const xbutt = document.getElementById("closepop");
  const notifications = document.querySelectorAll(".notification");
  const volunteers = document.querySelectorAll(".volunteer");

  buttonsRows.forEach((buttonRow) => {
    buttonRow.addEventListener("click", function () {
      const buttonText = buttonRow
        .querySelector("button")
        .textContent.trim()
        .toLowerCase();

      switch (buttonText) {
        case "posts":
          document.getElementById(
            "postsarea"
          ).innerHTML = `<div class="title">Posts</div>`;
          break;
        case "documents":
          document.getElementById("postsarea").innerHTML = `<div class="box">
          <div class="Documents">Documents</div>
          <div class="container">
            <div class="button-text" id="button-text1">
              <p class="text">Enter Employement Contract:</p>
              <button
                class="button-upload-megz"
                id="1"
                onerror="applyDefaultStyle(this)"
              >
                Upload File
              </button>
              <input class = "fileInput-megz" type="file" id="fileInput1"  />
            </div>
            <div class="button-text" id="button-text2">
              <p class="text">ID Badge:</p>
              <button
                class="button-upload-megz"
                id="2"
                onerror="applyDefaultStyle(this)"
              >
                Upload File
              </button>
              <input class = "fileInput-megz" type="file" id="fileInput2"  />
            </div>
            <div class="button-text" id="button-text3">
              <p class="text">Incorporation Certificate:</p>
              <button
                class="button-upload-megz"
                id="3"
                onerror="applyDefaultStyle(this)"
              >
                Upload File
              </button>
              <input class = "fileInput-megz" type="file" id="fileInput3" />
            </div>
    
            <div class="button-text" id="button-text4">
              <p class="text">Tax Exemption Certificate:</p>
              <button
                class="button-upload-megz"
                id="4"
                onerror="applyDefaultStyle(this)"
              >
                Upload File
              </button>
              <input class = "fileInput-megz" type="file" id="fileInput4"  />
            </div>
            <div class="button-text" id="button-text5">
              <p class="text">Business License:</p>
    
              <button
                class="button-upload-megz"
                id="5"
                
                onerror="applyDefaultStyle(this)"
              >
                Upload File
              </button>
              <input class = "fileInput-megz" type="file" id="fileInput5"  />
            </div>
          </div>
          <div
            class="submit-button"
            id="submitButton"
          >
            Submit
          </div>
          <p id="statusMessage" class="status-message"></p>
        </div>`;
          assignUploadButtons();
          const submit = document.querySelector(".submit-button");
          submit.addEventListener("click", function () {
            handleSubmitButtonClick();
          });
          //show documents upload area
          break;
        case "location":
          document.getElementById("postsarea").style.display = "none";
          //show location area
          break;
        case "pickup time":
          document.getElementById("postsarea").style.display = "none";
          //show pickup time
          break;
        case "fulfilled":
          document.getElementById("postsarea").style.display = "none";
          //show fulfilled
          break;
        default:
          console.log("Button action not defined");
      }
    });
  });

  postButton.addEventListener("click", function () {
    document.getElementById("postpopup").style.display = "block";
  });

  xbutt.addEventListener("click", function () {
    document.getElementById("postpopup").style.display = "none";
  });

  notifications.forEach((notification) => {
    let viewButton = notification.querySelector(".notification button");
    viewButton.addEventListener("click", function () {
      //show more details regarding notification
    });
    let xbutton = notification.querySelector(".notification img");
    xbutton.addEventListener("click", function () {
      notification.style.display = "none";
    });
  });

  volunteers.forEach((volunteer) => {
    volunteer.addEventListener("click", function () {
      //show info in pop up same location as notifications
    });
  });

  document.getElementById("dropdown").addEventListener("change", function () {
    var category = this.value;
    let selects = document.querySelector(".selects");

    var clothesElements = document.querySelectorAll(
      ".post-window #name, .post-window #gender, .post-window #season, .post-window #Clothesage, .post-window #type, .post-window #material, .post-window #amount, .post-window #color"
    );
    var toysElements = document.querySelectorAll(
      ".post-window #Toytype, .post-window #gender, .post-window #Toysage, .post-window #category, .post-window #amount"
    );
    var foodElements = document.querySelectorAll(
      ".post-window #name, .post-window #Toytype, .post-window #amount"
    );
    var medicalElements = document.querySelectorAll(
      ".post-window #Medicaluse, .post-window #Toytype, .post-window #amount"
    );
    var stationaryElements = document.querySelectorAll(
      ".post-window #school, .post-window #Toytype, .post-window #amount"
    );
    var bookElements = document.querySelectorAll(
      ".post-window #school, .post-window #name, .post-window #summary, .post-window #author, .post-window #language, .post-window #edition, .post-window #amount"
    );
    var bloodElements = document.querySelectorAll(
      ".post-window #bloodtype, .post-window #Patientname, .post-window #RHtype, .post-window #hospitalName, .post-window #hospitalArea, .post-window #hospitalGov, .post-window #hospitalAdd"
    );
    var fileUpload = document.getElementById("imageUploading");
    var statOrbook = document.getElementById("school");
    let content = document.querySelector(".pop-up-content");
    switch (category) {
      case "Clothes":
        // toysElements.forEach(function (element) {
        //   element.style.display = "none";
        // });
        // foodElements.forEach(function (element) {
        //   element.style.display = "none";
        // });
        // medicalElements.forEach(function (element) {
        //   element.style.display = "none";
        // });
        // bloodElements.forEach(function (element) {
        //   element.style.display = "none";
        // });
        // stationaryElements.forEach(function (element) {
        //   element.style.display = "none";
        // });
        // bookElements.forEach(function (element) {
        //   element.style.display = "none";
        // });
        // clothesElements.forEach(function (element) {
        content.innerHTML = `<textarea
            placeholder="Enter name"
            id="name"
            
            ></textarea>

        <textarea
          placeholder="Enter color"
          id="color"
          
        ></textarea>

<select id="gender" class=".post-window" >
          <option value="" disabled selected>Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unisex">Unisex</option>
        </select>

<select id="season" class=".post-window" >
          <option value="" disabled selected>Season</option>
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
          <option value="Autumn">Autumn</option>
          <option value="Winter">Winter</option>
          <option value="All">All</option>
        </select>

<select id="Clothesage" class=".post-window" >
          <option value="" disabled selected>Age</option>
          <option value="18+">18+</option>
          <option value="20+">20+</option>
          <option value="25+">25+</option>
          <option value="30+">30+</option>
          <option value="All">All</option>
        </select>

<select id="type" class=".post-window" >
          <option value="" disabled selected>Type</option>
          <option value="Casual">Casual</option>
          <option value="Formal">Formal</option>
          <option value="Sports">Sport</option>
        </select>

      <select id="material" class=".post-window" >
          <option value="" disabled selected>Material</option>
          <option value="Cotton">Cotton</option>
          <option value="Polyester">Polyester</option>
          <option value="Wool">Wool</option>
          <option value="Silk">Silk</option>
          <option value="Leather">Leather</option>
          <option value="Synthetic">Synthetic</option>
          <option value="Satin">Satin</option>
        </select>

      <textarea
          placeholder="Enter amount"
          id="amount"
          
        ></textarea>

        <div
          class="file-upload-container"
          
          id="imageUploading"
        >
          <input type="file" id="imageUpload" accept="image/*" />
          <label for="imageUpload">Upload Image</label>
        </div>`;
        // });
        break;
      case "Toys":
        clothesElements.forEach(function (element) {
          element.style.display = "none";
        });
        foodElements.forEach(function (element) {
          element.style.display = "none";
        });
        medicalElements.forEach(function (element) {
          element.style.display = "none";
        });
        bloodElements.forEach(function (element) {
          element.style.display = "none";
        });
        stationaryElements.forEach(function (element) {
          element.style.display = "none";
        });
        bookElements.forEach(function (element) {
          element.style.display = "none";
        });
        toysElements.forEach(function (element) {
          element.style.display = "inline";
        });
        fileUpload.style.display = "block";
        break;
      case "Food":
        clothesElements.forEach(function (element) {
          element.style.display = "none";
        });
        toysElements.forEach(function (element) {
          element.style.display = "none";
        });
        medicalElements.forEach(function (element) {
          element.style.display = "none";
        });
        bloodElements.forEach(function (element) {
          element.style.display = "none";
        });
        stationaryElements.forEach(function (element) {
          element.style.display = "none";
        });
        bookElements.forEach(function (element) {
          element.style.display = "none";
        });
        foodElements.forEach(function (element) {
          element.style.display = "inline";
        });
        fileUpload.style.display = "block";
        break;
      case "Medical Supplies":
        clothesElements.forEach(function (element) {
          element.style.display = "none";
        });
        toysElements.forEach(function (element) {
          element.style.display = "none";
        });
        foodElements.forEach(function (element) {
          element.style.display = "none";
        });
        bloodElements.forEach(function (element) {
          element.style.display = "none";
        });
        stationaryElements.forEach(function (element) {
          element.style.display = "none";
        });
        bookElements.forEach(function (element) {
          element.style.display = "none";
        });
        medicalElements.forEach(function (element) {
          element.style.display = "inline";
        });
        fileUpload.style.display = "block";
        break;
      case "School Supplies":
        clothesElements.forEach(function (element) {
          element.style.display = "none";
        });
        toysElements.forEach(function (element) {
          element.style.display = "none";
        });
        foodElements.forEach(function (element) {
          element.style.display = "none";
        });
        bloodElements.forEach(function (element) {
          element.style.display = "none";
        });
        medicalElements.forEach(function (element) {
          element.style.display = "none";
        });
        statOrbook.style.display = "inline";
        statOrbook.addEventListener("change", function () {
          if (statOrbook.value == "Stationary") {
            bookElements.forEach(function (element) {
              element.style.display = "none";
            });
            stationaryElements.forEach(function (element) {
              element.style.display = "inline";
            });
          } else {
            stationaryElements.forEach(function (element) {
              element.style.display = "none";
            });
            bookElements.forEach(function (element) {
              element.style.display = "inline";
            });
          }
        });
        fileUpload.style.display = "block";
        break;
      case "Blood Donations":
        clothesElements.forEach(function (element) {
          element.style.display = "none";
        });
        toysElements.forEach(function (element) {
          element.style.display = "none";
        });
        foodElements.forEach(function (element) {
          element.style.display = "none";
        });
        medicalElements.forEach(function (element) {
          element.style.display = "none";
        });
        stationaryElements.forEach(function (element) {
          element.style.display = "none";
        });
        bookElements.forEach(function (element) {
          element.style.display = "none";
        });
        bloodElements.forEach(function (element) {
          element.style.display = "inline";
        });
        fileUpload.style.display = "none";
        break;
      default:
        break;
    }
  });

  document.getElementById("postnow").addEventListener("click", function () {
    var category = document.getElementById("dropdown").value;

    var content = {};
    switch (category) {
      case "Clothes":
        content = {
          id: 0,
          Organization: "Resala",
          Color: document.getElementById("color").value,
          Category: "clothes",
          Name: document.getElementById("name").value,
          Gender: document.getElementById("gender").value,
          Season: document.getElementById("season").value,
          Age: document.getElementById("Clothesage").value,
          Type: document.getElementById("type").value,
          Material: document.getElementById("material").value,
          Amount: document.getElementById("amount").value,
          image: document.getElementById("imageUpload").value,
        };
        clothesPosts.push(content);
        break;
      case "Toys":
        content = {
          id: 0,
          Organization: "Resala",
          Type: document.getElementById("Toytype").value,
          Gender: document.getElementById("gender").value,
          Age: document.getElementById("Toysage").value,
          Category: document.getElementById("category").value,
          Amount: document.getElementById("amount").value,
          image: document.getElementById("imageUpload").value,
        };
        toysPosts.push(content);
        break;
      case "Food":
        content = {
          id: 0,
          Organization: "Resala",
          Name: document.getElementById("name").value,
          Type: document.getElementById("Toytype").value,
          Amount: document.getElementById("amount").value,
          image: document.getElementById("imageUpload").value,
        };
        foodPosts.push(content);
        break;
      case "Medical Supplies":
        content = {
          id: 0,
          Organization: "Resala",
          Usage: document.getElementById("Medicaluse").value,
          deviceType: document.getElementById("Toytype").value,
          Amount: document.getElementById("amount").value,
          image: document.getElementById("imageUpload").value,
        };
        medicalPosts.push(content);
        console.log(medicalPosts.length);
        break;
      case "School Supplies":
        if (statOrbook.value == "Stationary") {
          content = {
            id: 0,
            Organization: "Resala",
            Type: document.getElementById("school").value,
            Amount: document.getElementById("amount").value,
            image: document.getElementById("imageUpload").value,
          };
          stationaryPosts.push(content);
        } else {
          content = {
            id: 0,
            Organization: "Resala",
            Name: document.getElementById("name").value,
            Type: document.getElementById("school").value,
            Amount: document.getElementById("amount").value,
            Author: document.getElementById("author").value,
            Language: document.getElementById("language").value,
            Edition: document.getElementById("edition").value,
            Summary: document.getElementById("summary").value,
            image: document.getElementById("imageUpload").value,
          };
          bookPosts.push(content);
        }
        break;
      case "Blood Donations":
        content = {
          id: 0,
          Organization: "Resala",
          bloodType: document.getElementById("bloodtype").value,
          patientName: document.getElementById("Patientname").value,
          RHType: document.getElementById("RHtype").value,
          hospitalName: document.getElementById("hospitalName").value,
          hospitalArea: document.getElementById("hospitalArea").value,
          hospitalGovernorate: document.getElementById("hospitalGov").value,
          hospitalAddress: document.getElementById("hospitalAdd").value,
          Amount: document.getElementById("amount").value,
        };
        bloodPosts.push(content);
        break;
      default:
        break;
    }

    document.getElementById("postpopup").style.display = "none";
  });

  //   document.getElementById("logout").addEventListener("click", function () {
  //     window.location.href = "http://127.0.0.1:5500/SE%20MS2/hompage.html";
  //   });
});

let selectedFiles = [];

function assignUploadButtons() {
  const buttons = document.querySelectorAll(".button-upload-megz");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      handleUploadButtonClick(parseInt(button.id));
    });
  });
}

function handleUploadButtonClick(int) {
  const fileInput = document.getElementById("fileInput" + int);
  console.log(fileInput.files);
  fileInput.click();

  function handleFileInputChange() {
    Array.from(fileInput.files).forEach((file) => {
      if (
        !selectedFiles.some((selectedFile) => selectedFile.name === file.name)
      ) {
        selectedFiles.push(file);

        console.log(int);
        var div = document.getElementById("button-text" + int);
        div.innerHTML += `<img src="../media/file icon.png" class = "file-icon"><p class = "fileName" >${file.name}</p>`;
      }
    });

    console.log("Selected Files:", selectedFiles);

    fileInput.removeEventListener("change", handleFileInputChange);
  }

  fileInput.addEventListener("change", handleFileInputChange);
  var button = document.getElementById("button" + int);
  button.disabled = true;
}

function handleSubmitButtonClick() {
  const statusMessage = document.getElementById("statusMessage");

  if (selectedFiles.length == 5) {
    statusMessage.textContent = "Success: All files uploaded.";
  } else {
    statusMessage.textContent = "Failed: files missing";
  }
}

function checkFiles() {
  const selectedFiles = document.getElementById("fileInput").files;
  const submitButton = document.getElementById("submitButton");

  // Enable the submit button only if exactly 5 files are selected
  if (selectedFiles.length === 5) {
    submitButton.style.backgroundColor = "#00a292"; // Active color
    submitButton.disabled = false; // Enable the button
  } else {
    submitButton.style.backgroundColor = "00cab6"; // Revert to default color
    submitButton.disabled = true; // Keep the button disabled
  }
}
