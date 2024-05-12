import { orgPosts, orgVolunteers, thisOrg } from "../data/orgData.js";

let selectedDateTime = "";

document.addEventListener("DOMContentLoaded", function () {
  const buttonsRows = document.querySelectorAll(".button-row");
  const postButton = document.querySelector(".post-button");
  const postNow = document.getElementById("postnow");
  const xbutt = document.getElementById("closepop");
  const notifications = document.querySelectorAll(".notification");
  const volunteers = document.querySelectorAll(".volunteer");

  function detailsButton() {
    document.querySelectorAll(".details-button").forEach((button) => {
      button.addEventListener("click", function () {
        var productId = this.closest(".post-div").getAttribute("data-post-id");
        let post = orgPosts.find((post) => post.id == productId);
        let html = Object.entries(post)
          .filter(
            ([key, value]) =>
              key !== "image" && key !== "id" && key !== "postType"
          ) // Exclude the 'image' key
          .map(
            ([key, value]) => `
          <div class="productDetail">
              <p>${key}: ${value}</p>
          </div>
        `
          )
          .join("");

        var modal = document.getElementById("productModal");
        var details = document.querySelector(".productDetails");

        // Simulate fetching product details
        details.innerHTML = html;
        // In a real scenario, you might fetch this data from a server

        modal.style.display = "flex";
      });
    });

    // Get the <span> element that closes the modal
    var closeButton = document.querySelector(".close-button");

    // When the user clicks on <span> (x), close the modal
    closeButton.onclick = function () {
      var modal = document.getElementById("productModal");
      modal.style.display = "none";
    };

    // Optional: close the modal if someone clicks outside of it
    window.onclick = function (event) {
      document.querySelectorAll(".modal").forEach(function (modal) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      });
    };
  }

  function loadPosts() {
    let postshtml = "";
    orgPosts.forEach((post) => {
      postshtml += `<div class="post-div" data-post-id="${post.id}" id = "clothes">
        <div class="post-pic-div">
        <img
        src="../${post.image}"
        alt=""
        class="product-pic"
        />
        </div>
        <div class="details-div">
        <div class="item-name-details"><div class = "item-name-text">${post.Name}</div><div class = "three-dots-posts">...</div>
        <div class="options-box">
              <button class="update-btn">Update</button>
              <button class="delete-btn">Delete</button>
          </div>
          </div>
        <div class="org-posting">${post.Organization}</div>
        <div class="buttons-div">
        <button class="details-button">View Details</button>
        <div id="productModal" class="modal">
          <div class="modal-content">
            <span class="close-button">×</span>
            <h1>Post Details</h1>
            <div class="productDetails"></div>
          </div>
        </div>
        </div>
        </div>
        </div>`;
    });
    return postshtml;
  }

  function loadFulfilledPosts() {
    let postshtml = "";
    orgPosts
      .filter((post) => post.status === "fulfilled")
      .forEach((post) => {
        postshtml += `<div class="post-div" data-post-id="${post.id}" id = "clothes">
        <div class="post-pic-div">
        <img
        src="../${post.image}"
        alt=""
        class="product-pic"
        />
        </div>
        <div class="details-div">
        <div class="item-name-details"><div class = "item-name-text">${post.Name}</div><div class = "three-dots-posts">...</div>
        <div class="options-box">
              <button class="delete-btn">Delete</button>
          </div>
          </div>
        <div class="org-posting">${post.Organization}</div>
        <div class="buttons-div">
        <button class="details-button">View Details</button>
        <div id="productModal" class="modal">
          <div class="modal-content">
            <span class="close-button">×</span>
            <h1>Post Details</h1>
            <div class="productDetails"></div>
          </div>
        </div>
        </div>
        </div>
        </div>`;
      });
    return postshtml;
  }

  function threeDotsPosts() {
    document.querySelectorAll(".three-dots-posts").forEach((button) => {
      button.addEventListener("click", function () {
        if (button.nextElementSibling.style.display === "flex")
          button.nextElementSibling.style.display = "none";
        else {
          button.nextElementSibling.style.display = "flex";
        }
      });
    });
  }

  let postshtml = `<div class="title">Posts</div>`;
  postshtml += loadPosts();
  document.getElementById("postsarea").innerHTML = postshtml;
  detailsButton();
  threeDotsPosts();
  deleteButtons();

  function deleteButtons() {
    document.querySelectorAll(".delete-btn").forEach((button) => {
      button.addEventListener("click", function () {
        var productId = this.closest(".post-div").getAttribute("data-post-id");
        let post = orgPosts.find((post) => post.id == productId);
        let idToRemove = post.id;

        const indexToRemove = orgPosts.findIndex(
          (post) => post.id === idToRemove
        );
        if (indexToRemove !== -1) {
          orgPosts.splice(indexToRemove, 1);
        } else {
          console.log(
            "Object with the specified id does not exist in the array."
          );
        }
        let postshtml = `<div class="title">Posts</div>`;
        postshtml += loadPosts();
        document.getElementById("postsarea").innerHTML = postshtml;
        detailsButton();
        threeDotsPosts();
        deleteButtons();
      });
    });
  }

  function deleteFulfilledButtons() {
    document.querySelectorAll(".delete-btn").forEach((button) => {
      button.addEventListener("click", function () {
        var productId = this.closest(".post-div").getAttribute("data-post-id");
        let post = orgPosts.find((post) => post.id == productId);
        if (post.status === "fulfilled") {
          let idToRemove = post.id;

          const indexToRemove = orgPosts.findIndex(
            (post) => post.id === idToRemove
          );
          if (indexToRemove !== -1) {
            orgPosts.splice(indexToRemove, 1);
          } else {
            console.log(
              "Object with the specified id does not exist in the array."
            );
          }
          let fulfilledhtml = `<div class="title-fulfilled">Fulfilled</div>`;
          fulfilledhtml += loadFulfilledPosts();
          document.getElementById("postsarea").innerHTML = fulfilledhtml;
          detailsButton();
          threeDotsPosts();
          deleteFulfilledButtons();
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    const optionsBtns = document.querySelectorAll(".options-btn");

    optionsBtns.forEach(function (btn) {
      btn.addEventListener("blur", function () {});
    });
  });

  buttonsRows.forEach((buttonRow) => {
    buttonRow.addEventListener("click", function () {
      const buttonText = buttonRow
        .querySelector("button")
        .textContent.trim()
        .toLowerCase();

      switch (buttonText) {
        case "posts":
          let postshtml = `<div class="title">Posts</div>`;
          postshtml += loadPosts();
          document.getElementById("postsarea").innerHTML = postshtml;
          detailsButton();
          threeDotsPosts();
          deleteButtons();
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
          document.getElementById(
            "postsarea"
          ).innerHTML = `<div class="loc-box">
          <div id="Locationword">Location</div>
          <div class="loc">
            <div id="Address">Add Address</div>
            <div id="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d102976.46587300031!2d31.508904767219747!3d30.033129122439746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1715109132769!5m2!1sen!2seg"
                width="100%"
                height="100%"
                style="border-radius: 20px"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div class="add-button">
        <button id="myButton" onclick="addEventListener()">Add</button>
      </div>`;
          //show location area
          break;
        case "pickup time":
          let timehtml = `<div class="title-fulfilled">Pickup Time</div>`;
          timehtml += `
          <div class = "date-div">
          <form class = "calendar-form">
          <label class="choose-date">Choose Date </label>
            <input
              class="date-selector"
              type="datetime-local"
              placeholder="Select DateTime"
            />
            <button class ="submit-time">Submit</button>
          </form>
          
          </div>
          
           `;
          document.getElementById("postsarea").innerHTML = timehtml;
          loadFlat();
          assignSubmitTime();
          break;
        case "fulfilled":
          let fulfilledhtml = `<div class="title-fulfilled">Fulfilled</div>`;
          fulfilledhtml += loadFulfilledPosts();
          document.getElementById("postsarea").innerHTML = fulfilledhtml;
          detailsButton();
          threeDotsPosts();
          deleteFulfilledButtons();
          break;
        default:
          console.log("Button action not defined");
      }
    });
  });

  function assignSubmitTime() {
    document
      .querySelector(".submit-time")
      .addEventListener("click", function () {
        submitTime();
      });
  }

  function submitTime() {
    document.getElementById(
      "postsarea"
    ).innerHTML += `<h2>Pickup Time set to ${selectedDateTime}</h2>`;
  }

  postButton.addEventListener("click", function () {
    document.getElementById("postpopup").style.display = "flex";
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

  function loadFlat() {
    const datetimeInput = document.querySelector(".date-selector");

    // Initialize Flatpickr
    flatpickr(datetimeInput, {
      enableTime: true,
      dateFormat: "Y-m-dTH:i",
      time_24hr: true, // If you want 24-hour format
      onChange: function (selectedDates, dateStr, instance) {
        // When the value changes, log it to the console
        console.log("Selected date and time:", dateStr);

        // You can store the value in a variable or send it to a server for further processing
        // For example:
        selectedDateTime = dateStr;
        // You can now use selectedDateTime variable to access the selected value
      },
    });
  }

  document.getElementById("dropdown").addEventListener("change", function () {
    var category = this.value;

    let content = document.querySelector(".pop-up-content");
    switch (category) {
      case "Clothes":
        content.innerHTML = `
        <div class = "inside-pop-up">
        <textarea
            placeholder="Enter name"
            id="name"
            required
            ></textarea>

        <textarea
          placeholder="Enter color"
          id="color"
          required
        ></textarea>

<select id="gender" required>
          <option value="" disabled selected>Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unisex">Unisex</option>
        </select>

<select id="season"  required>
          <option value="" disabled selected>Season</option>
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
          <option value="Autumn">Autumn</option>
          <option value="Winter">Winter</option>
          <option value="All">All</option>
        </select>

<select id="Clothesage" required>
          <option value="" disabled selected>Age</option>
          <option value="18+">18+</option>
          <option value="20+">20+</option>
          <option value="25+">25+</option>
          <option value="30+">30+</option>
          <option value="All">All</option>
        </select>

<select id="type"  required>
          <option value="" disabled selected>Type</option>
          <option value="Casual">Casual</option>
          <option value="Formal">Formal</option>
          <option value="Sports">Sport</option>
        </select>

      <select id="material" required>
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
          required
        ></textarea>

        <div
          class="file-upload-container"
          
          id="imageUploading" required
        >
          <input type="file" id="imageUpload" required/>
          <label class ="upload-text" for="imageUpload">Upload Image</label>
        </div>
        </div>
        <div class="post-now-button" id="postnow">
          <button>Post</button>
        </div>
        `;
        postNowButtons();
        break;
      case "Toys":
        content.innerHTML = `
        <div class = "inside-pop-up">
        <textarea
        placeholder="Enter type"
        id="Toytype"
           ></textarea>

<select id="Toysage"  >
        <option value="" disabled selected>Age</option>
        <option value="3+">3+</option>
        <option value="4+">4+</option>
        <option value="5+">5+</option>
        <option value="6+">6+</option>
        <option value="7+">7+</option>
        <option value="8+">8+</option>
        <option value="9+">9+/option></option>
        <option value="10+">10+</option>
        <option value="All">All</option>
      </select>

<select id="gender"  >
        <option value="" disabled selected>Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Unisex">Unisex</option>
      </select>

<select id="category"  >
        <option value="" disabled selected>Category</option>
        <option value="Eductaional">Eductaional</option>
        <option value="Electronic">Board Game</option>
        <option value="Electronic">Electronic</option>
      </select>

<textarea
        placeholder="Enter amount"
        id="amount"
              ></textarea>

        <div
          class="file-upload-container"
          
          id="imageUploading" required
        >
          <input type="file" id="imageUpload" required/>
          <label class ="upload-text" for="imageUpload">Upload Image</label>
        </div>
        </div>
        <div class="post-now-button" id="postnow">
          <button>Post</button>
        </div>
        `;
        postNowButtons();
        break;
      case "Food":
        content.innerHTML = `
        <div class = "inside-pop-up">
        <textarea
        placeholder="Enter name"
        id="name"
        
      ></textarea>

      <textarea
        placeholder="Enter type"
        id="Toytype"
       
      ></textarea>

      <textarea
        placeholder="Enter amount"
        id="amount"
      ></textarea>

        <div
          class="file-upload-container"
          
          id="imageUploading" required
        >
          <input type="file" id="imageUpload" required/>
          <label class ="upload-text" for="imageUpload">Upload Image</label>
        </div>
        </div>
        <div class="post-now-button" id="postnow">
          <button >Post</button>
        </div>
        `;
        postNowButtons();
        break;
      case "Medical Supplies":
        content.innerHTML = `
        <div class = "inside-pop-up">
        <textarea
        placeholder="Enter use"
        id="Medicaluse"
         ></textarea>

<textarea
        placeholder="Enter type"
        id="Toytype"
        
      ></textarea>

<textarea
        placeholder="Enter amount"
        id="amount"
        
      ></textarea>

        <div
          class="file-upload-container"
          
          id="imageUploading" required
        >
          <input type="file" id="imageUpload" required/>
          <label class ="upload-text" for="imageUpload">Upload Image</label>
        </div>
        </div>
        <div class="post-now-button" id="postnow">
          <button >Post</button>
        </div>
        `;
        postNowButtons();
        break;
      case "School Supplies":
        content.innerHTML = `<select id="school">
        <option value="" disabled selected>Choose</option>
        <option value="Stationary">Stationary</option>
        <option value="Book">Book</option>
      </select>`;
        var statOrbook = document.getElementById("school");
        statOrbook.addEventListener("change", function () {
          if (statOrbook.value == "Stationary") {
            content.innerHTML = `
            <div class = "inside-pop-up">
            <textarea
            placeholder="Enter use"
            id="Medicaluse"
             ></textarea>
    
             <textarea
             placeholder="Enter type"
             id="Toytype"
             
           ></textarea>
     
      <textarea
             placeholder="Enter amount"
             id="amount"
             
           ></textarea>
     
    
            <div
              class="file-upload-container"
              
              id="imageUploading" required
            >
              <input type="file" id="imageUpload" required/>
              <label class ="upload-text" for="imageUpload">Upload Image</label>
            </div>
            </div>
            <div class="post-now-button" id="postnow">
              <button>Post</button>
            </div>
            `;
          } else {
            content.innerHTML = `
            <div class = "inside-pop-up">
            <textarea
        placeholder="Enter name"
        id="name"
      ></textarea>
<textarea
        placeholder="Enter author name"
        id="author"
        
      ></textarea>
<textarea
        placeholder="Enter language"
        id="language"
        
      ></textarea>

<textarea
        placeholder="Enter edition"
        id="edition"
        
      ></textarea>
<textarea
        placeholder="Enter summary"
        id="summary"
        
      ></textarea>

<textarea
        placeholder="Enter amount"
        id="amount"
        
      ></textarea>

            <div
              class="file-upload-container"
              
              id="imageUploading" required
            >
              <input type="file" id="imageUpload" required/>
              <label class ="upload-text" for="imageUpload">Upload Image</label>
            </div>
            </div>
            <div class="post-now-button" id="postnow">
              <button>Post</button>
            </div>
            `;
          }
        });
        postNowButtons();
        break;
      case "Blood Donations":
        content.innerHTML = `
        <div class = "inside-pop-up">
        <textarea
        placeholder="Patient name"
        id="Patientname"
        
      ></textarea>
<select id="bloodtype" >
        <option value="" disabled selected>Blood Type</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="AB">AB</option>
        <option value="O">O</option>
      </select>

      <select id="RHtype" >
        <option value="" disabled selected>RH Type</option>
        <option value="+">+</option>
        <option value="-">-</option>
      </select>

<textarea
        placeholder="Enter hospital name"
        id="hospitalName"
        
      ></textarea>
      <textarea
        placeholder="Enter hospital area"
        id="hospitalArea"
        
      ></textarea>
      <textarea
        placeholder="Enter hospital goverorate"
        id="hospitalGov"
        
      ></textarea>
      <textarea
        placeholder="Enter hospital address"
        id="hospitalAdd"
        
      ></textarea>

        <div class="post-now-button" id="postnow">
          <button>Post</button>
        </div>
        `;
        postNowButtons();
        break;
      case "Teaching":
        content.innerHTML = `
          <div class = "inside-pop-up">
          <textarea
          placeholder="Subject"
          id="Patientname"
          
        ></textarea>
        
      <textarea
          placeholder="Number of Students"
          id="hospitalName"
          
        ></textarea>
        <textarea
          placeholder="Address"
          id="hospitalArea"
          
        ></textarea>
  
          <div class="post-now-button" id="postnow">
            <button>Post</button>
          </div>
          `;
        postNowButtons();
        break;
      case "Medical":
        content.innerHTML = `
          <div class = "inside-pop-up">
          <textarea
          placeholder="Specialty"
          id="Patientname"
          
        ></textarea>
        
      <textarea
          placeholder="Name of Patient"
          id="hospitalName"
          
        ></textarea>
        <textarea
          placeholder="Age"
          id="hospitalArea"
          
        ></textarea>

        <select id="gender" required>
          <option value="" disabled selected>Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unisex">Unisex</option>
        </select>

        <textarea
          placeholder="Weight"
          id="hospitalArea"
          
        ></textarea>

        <textarea
          placeholder="Area"
          id="hospitalArea"
          
        ></textarea>

        <textarea
          placeholder="Governate"
          id="hospitalArea"
          
        ></textarea>

        <textarea
          placeholder="Description"
          id="hospitalArea"
          
        ></textarea>
  
          <div class="post-now-button" id="postnow">
            <button>Post</button>
          </div>
          `;
        postNowButtons();
        break;
      default:
        break;
    }
  });

  function postNowButtons() {
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
          orgPosts.push(content);
          console.log(content);
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
          orgPosts.push(content);
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
          orgPosts.push(content);
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
          orgPosts.push(content);
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
            orgPosts.push(content);
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
            orgPosts.push(content);
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
          orgPosts.push(content);
          break;
        default:
          break;
      }

      // document.getElementById("postpopup").style.display = "none";
    });
  }
});

function initializeVolunteers() {
  let volhtml = "";
  var vol = document.querySelector(".volunteers-list");
  orgVolunteers.forEach(
    (volunteer) =>
      (volhtml += `
  <div class="volunteer" data-post-id="${volunteer.id}">
              <div id="volModal" class="modal">
                <div class="modal-content">
                <h1>Volunteer Details</h1>
                <div class="volDetails"></div>
                </div>
              </div>
            <div class="vol-initial">${volunteer.firstName.charAt(0)}</div>
            <div class="vol-name">${volunteer.firstName} ${
        volunteer.lastName
      }</div>
          </div>
  </div>`)
  );
  vol.innerHTML += volhtml;
  volunteerDetails();
}

function volunteerDetails() {
  document.querySelectorAll(".volunteer").forEach((button) => {
    button.addEventListener("click", function () {
      var volID = button.getAttribute("data-post-id");
      let vol = orgVolunteers.find((vol) => vol.id == volID);
      let html = Object.entries(vol)
        .filter(
          ([key, value]) =>
            key !== "image" && key !== "id" && key !== "password"
        ) // Exclude the 'image' key
        .map(
          ([key, value]) => `
        <div class="productDetail">
            <p>${formatKeyVol(key)}: ${value}</p>
        </div>
      `
        )
        .join(""); // Use map to create HTML and join to make a single string

      var modal = document.getElementById("volModal");
      var details = document.querySelector(".volDetails");

      // Simulate fetching product details
      details.innerHTML = html;
      // In a real scenario, you might fetch this data from a server

      modal.style.display = "flex";
    });

    function formatKeyVol(key) {
      const keyMap = {
        id: "id",
        type: "Type",
        firstName: "First Name",
        lastName: "Last Name",
        gender: "Gender",
        email: "Email",
        contactNumber: "Contact Number",
        password: "Password",
        area: "Area",
        governorate: "Governorate",
      };

      return keyMap[key] || key; // Return the mapped key name, or the key itself if not found
    }

    // Get the <span> element that closes the modal
    var closeButton = document.querySelector(".close-button-vol");

    // When the user clicks on <span> (x), close the modal

    // Optional: close the modal if someone clicks outside of it
    window.onclick = function (event) {
      document.querySelectorAll(".modal").forEach(function (modal) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      });
    };
  });
}

initializeVolunteers();
assignOpenProfile();

function assignOpenProfile() {
  const orgDetails = document.querySelector(".organization-details");

  orgDetails.addEventListener("click", function () {
    profileOpen();
  });
}

function profileOpen() {
  let html = "";
  html += `<div class="title">Profile</div>`;
  html += `<form class = "prof-form">`;
  Object.keys(thisOrg).forEach((key) => {
    if (key !== "id") {
      html += `
                    <label class = "prof-label" for="${key}">${formatKey(
        key
      )}:</label>
                    <div class = "area-and-edit">
                    <input class = "prof-textarea" type="text" id="${key}" name="${key}" value="${
        thisOrg[key]
      }" readonly>
                    <button type="button" class="edit-btn"><img src="../media/edit icon.png" alt="Logo" /> Edit</button>
                    </div>
                `;
    }
  });
  html += `</form>`;
  document.getElementById("postsarea").innerHTML = html;

  function formatKey(key) {
    const keyMap = {
      id: "ID",
      firstName: "First Name",
      lastName: "Last Name ",
      gender: "Gender",
      email: "Email",
      password: "Password",
      contactNumber: "Contact Number",
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
      button.innerHTML = input.readOnly
        ? `<img src="../media/edit icon.png" alt="Logo" /> Edit`
        : `Save`;
    });
  });
}

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
