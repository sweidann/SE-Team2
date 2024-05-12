import {
  clothesPosts,
  toysPosts,
  foodPosts,
  medicalPosts,
  bookPosts,
  bloodPosts,
  stationaryPosts,
} from "../data/posts.js";

import { AllDonations, addDonation } from "../data/donations.js";

function detailsButtonClothes() {
  document.querySelectorAll(".details-button").forEach((button) => {
    button.addEventListener("click", function () {
      var productId = this.closest(".post-div").getAttribute("data-post-id");
      let post = clothesPosts.find((post) => post.id == productId);
      let html = Object.entries(post)
        .filter(([key, value]) => key !== "image" && key !== "id") // Exclude the 'image' key
        .map(
          ([key, value]) => `
        <div class="productDetail">
            <p>${key}: ${value}</p>
        </div>
      `
        )
        .join(""); // Use map to create HTML and join to make a single string

      var modal = document.getElementById("productModal");
      var details = document.querySelector(".productDetails");

      // Simulate fetching product details
      details.innerHTML = html;
      // In a real scenario, you might fetch this data from a server

      modal.style.display = "block";
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

function detailsButtonToys() {
  document.querySelectorAll(".details-button").forEach((button) => {
    button.addEventListener("click", function () {
      var productId = this.closest(".post-div").getAttribute("data-post-id");
      let post = toysPosts.find((post) => post.id == productId);
      let html = Object.entries(post)
        .filter(([key, value]) => key !== "image" && key !== "id") // Exclude the 'image' key
        .map(
          ([key, value]) => `
        <div class="productDetail">
            <p>${key}: ${value}</p>
        </div>
      `
        )
        .join(""); // Use map to create HTML and join to make a single string

      var modal = document.getElementById("productModal");
      var details = document.querySelector(".productDetails");

      // Simulate fetching product details
      details.innerHTML = html;
      // In a real scenario, you might fetch this data from a server

      modal.style.display = "block";
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

function detailsButtonFood() {
  document.querySelectorAll(".details-button").forEach((button) => {
    button.addEventListener("click", function () {
      var productId = this.closest(".post-div").getAttribute("data-post-id");
      let post = foodPosts.find((post) => post.id == productId);
      let html = Object.entries(post)
        .filter(([key, value]) => key !== "image" && key !== "id") // Exclude the 'image' key
        .map(
          ([key, value]) => `
        <div class="productDetail">
            <p>${key}: ${value}</p>
        </div>
      `
        )
        .join(""); // Use map to create HTML and join to make a single string

      var modal = document.getElementById("productModal");
      var details = document.querySelector(".productDetails");

      // Simulate fetching product details
      details.innerHTML = html;
      // In a real scenario, you might fetch this data from a server

      modal.style.display = "block";
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
function detailsButtonMedical() {
  document.querySelectorAll(".details-button").forEach((button) => {
    button.addEventListener("click", function () {
      var productId = this.closest(".post-div").getAttribute("data-post-id");
      let post = medicalPosts.find((post) => post.id == productId);
      let html = Object.entries(post)
        .filter(([key, value]) => key !== "image" && key !== "id") // Exclude the 'image' key
        .map(
          ([key, value]) => `
        <div class="productDetail">
            <p>${formatKeyMedical(key)}: ${value}</p>
        </div>
      `
        )
        .join(""); // Use map to create HTML and join to make a single string

      var modal = document.getElementById("productModal");
      var details = document.querySelector(".productDetails");

      // Simulate fetching product details
      details.innerHTML = html;
      // In a real scenario, you might fetch this data from a server

      modal.style.display = "block";
    });

    function formatKeyMedical(key) {
      const keyMap = {
        id: "id",
        deviceType: "Device Type",
        Usage: "Usage",
        image: "media/medical-supplies",
        Organization: "Organization",
        Amount: "Amount",
      };

      return keyMap[key] || key; // Return the mapped key name, or the key itself if not found
    }
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
function detailsButtonStationary() {
  document.querySelectorAll(".details-stationary").forEach((button) => {
    button.addEventListener("click", function () {
      var productId = this.closest(".post-div").getAttribute("data-post-id");
      let post = stationaryPosts.find((post) => post.id == productId);
      let html = Object.entries(post)
        .filter(([key, value]) => key !== "image" && key !== "id") // Exclude the 'image' key
        .map(
          ([key, value]) => `
        <div class="productDetail">
            <p>${key}: ${value}</p>
        </div>
      `
        )
        .join(""); // Use map to create HTML and join to make a single string

      var modal = document.getElementById("productModal");
      var details = document.querySelector(".productDetails");

      // Simulate fetching product details
      details.innerHTML = html;
      // In a real scenario, you might fetch this data from a server

      modal.style.display = "block";
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
function detailsButtonBooks() {
  document.querySelectorAll(".details-books").forEach((button) => {
    button.addEventListener("click", function () {
      var productId = this.closest(".post-div").getAttribute("data-post-id");

      let post = bookPosts.find((post) => post.id == productId);
      let html = Object.entries(post)
        .filter(([key, value]) => key !== "image" && key !== "id") // Exclude the 'image' key
        .map(
          ([key, value]) => `
        <div class="productDetail">
            <p>${key}: ${value}</p>
        </div>
      `
        )
        .join(""); // Use map to create HTML and join to make a single string

      var modal = document.getElementById("productModal");
      var details = document.querySelector(".productDetails");

      // Simulate fetching product details
      details.innerHTML = html;
      // In a real scenario, you might fetch this data from a server

      modal.style.display = "block";
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

function detailsButtonBlood() {
  document.querySelectorAll(".details-button").forEach((button) => {
    button.addEventListener("click", function () {
      var productId = this.closest(".post-div").getAttribute("data-post-id");
      let post = bloodPosts.find((post) => post.id == productId);
      let html = Object.entries(post)
        .filter(([key, value]) => key !== "image" && key !== "id") // Exclude the 'image' key
        .map(
          ([key, value]) => `
        <div class="productDetail">
            <p>${formatKeyBlood(key)}: ${value}</p>
        </div>
      `
        )
        .join(""); // Use map to create HTML and join to make a single string

      var modal = document.getElementById("productModal");
      var details = document.querySelector(".productDetails");

      // Simulate fetching product details
      details.innerHTML = html;
      // In a real scenario, you might fetch this data from a server

      modal.style.display = "block";
    });
  });

  function formatKeyBlood(key) {
    const keyMap = {
      hospitalName: "Hospital Name",
      patientName: "Patient Name",
      bloodType: "Blood Type",
      RHType: "RH Type",
      hospitalArea: "Hospital Area",
      hospitalGovernorate: "Hospital Governorate",
      hospitalAddress: "Hospital Address",
      Organization: "Organization",
      Amount: "Amount",
    };

    return keyMap[key] || key; // Return the mapped key name, or the key itself if not found
  }

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

function donateButtonClothes() {
  let mainPost = null;
  document.querySelectorAll(".donate-button").forEach((button) => {
    button.addEventListener("click", function () {
      var productId = this.closest(".post-div").getAttribute("data-post-id");
      let post = clothesPosts.find((post) => post.id == productId);
      mainPost = post;
      let needed = post.Amount;
      let html = ``;
      for (let i = 1; i <= needed; i++) {
        html += `<option value="${i}">${i}</option>`;
      }

      var modal = document.getElementById("donateModal");
      var select = document.getElementById("numberSelect");

      // Simulate fetching product details
      select.innerHTML = html;
      // In a real scenario, you might fetch this data from a server

      modal.style.display = "block";
    });
  });
  // Get the <span> element that closes the modal
  var closeButton = document.querySelector(".close-button-donate");
  var confirmButton = document.querySelector(".confirm-button");

  // When the user clicks on <span> (x), close the modal
  closeButton.onclick = function () {
    var modal = document.getElementById("donateModal");
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

  confirmButton.addEventListener("click", function () {
    var numberSelect = document.getElementById("numberSelect");
    addDonation({
      id: "",
      postId: mainPost.id,
      donationCategory: "Toys Donation",
      Name: mainPost.Name,
      Color: mainPost.Color,
      Organization: mainPost.Organization,
      Category: mainPost.Category,
      image: mainPost.image,
      Type: mainPost.Type,
      Age: mainPost.Age,
      Gender: mainPost.Gender,
      Season: mainPost.Season,
      Material: mainPost.Material,
      Amount: numberSelect.value,
    });
    console.log(AllDonations.length);

    let thankhtml = `
    <div class="modal-donate-content">
    <div class = "inside-thank-content">
    <div class = "upper-inside-thank">
    <div class = "close-button-div"><span class="close-button-donate">×</span></div>
    </div>
    Thank You for Your Donation!
    <div class = "continue-button-div"><button class = "continue-button">Another Donation?</div></div>
    </div>
    </div>
    `;

    var modal = document.getElementById("donateModal");
    modal.innerHTML = thankhtml;

    var closeButton = document.querySelector(".close-button-donate");
    var continueButton = document.querySelector(".continue-button");

    // When the user clicks on <span> (x), close the modal
    closeButton.onclick = function () {
      window.location.reload();
    };

    continueButton.onclick = function () {
      html = clothesPostsGenerate();
      postsDiv.innerHTML = html;
      detailsButtonClothes();
      donateButtonClothes();
    };

    // Optional: close the modal if someone clicks outside of it
    window.onclick = function (event) {
      var modal = document.getElementById("donateModal");
      if (event.target == modal) {
        window.location.reload();
      }
    };
  });
}

function donateButtonToys() {
  let mainPost = null;
  document.querySelectorAll(".donate-button").forEach((button) => {
    button.addEventListener("click", function () {
      var productId = this.closest(".post-div").getAttribute("data-post-id");
      let post = toysPosts.find((post) => post.id == productId);
      mainPost = post;
      let needed = post.Amount;
      let html = ``;
      for (let i = 1; i <= needed; i++) {
        html += `<option value="${i}">${i}</option>`;
      }

      var modal = document.getElementById("donateModal");
      var select = document.getElementById("numberSelect");

      // Simulate fetching product details
      select.innerHTML = html;
      // In a real scenario, you might fetch this data from a server

      modal.style.display = "block";
    });
  });
  // Get the <span> element that closes the modal
  var closeButton = document.querySelector(".close-button-donate");
  var confirmButton = document.querySelector(".confirm-button");

  // When the user clicks on <span> (x), close the modal
  closeButton.onclick = function () {
    var modal = document.getElementById("donateModal");
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

  confirmButton.addEventListener("click", function () {
    var numberSelect = document.getElementById("numberSelect");
    addDonation({
      id: "",
      postId: mainPost.id,
      donationCategory: "Toys Donation",
      Type: mainPost.Type,
      Organization: mainPost.Organization,
      Age: mainPost.Age,
      Gender: mainPost.Gender,
      Category: mainPost.Category,
      image: mainPost.image,
      Amount: numberSelect.value,
    });
    console.log(AllDonations.length);

    let thankhtml = `
    <div class="modal-donate-content">
    <div class = "inside-thank-content">
    <div class = "upper-inside-thank">
    <div class = "close-button-div"><span class="close-button-donate">×</span></div>
    </div>
    Thank You for Your Donation!
    <div class = "continue-button-div"><button class = "continue-button">Another Donation?</div></div>
    </div>
    </div>
    `;

    var modal = document.getElementById("donateModal");
    modal.innerHTML = thankhtml;

    var closeButton = document.querySelector(".close-button-donate");
    var continueButton = document.querySelector(".continue-button");

    // When the user clicks on <span> (x), close the modal
    closeButton.onclick = function () {
      window.location.reload();
    };

    continueButton.onclick = function () {
      html = toysPostsGenerate();
      postsDiv.innerHTML = html;
      detailsButtonToys();
      donateButtonToys();
    };

    // Optional: close the modal if someone clicks outside of it
    window.onclick = function (event) {
      var modal = document.getElementById("donateModal");
      if (event.target == modal) {
        window.location.reload();
      }
    };
  });
}

function donateButtonFood() {
  let mainPost = null;
  document.querySelectorAll(".donate-button").forEach((button) => {
    button.addEventListener("click", function () {
      var productId = this.closest(".post-div").getAttribute("data-post-id");
      let post = foodPosts.find((post) => post.id == productId);
      mainPost = post;
      let needed = post.Amount;
      let html = ``;
      for (let i = 1; i <= needed; i++) {
        html += `<option value="${i}">${i}</option>`;
      }

      var modal = document.getElementById("donateModal");
      var select = document.getElementById("numberSelect");

      // Simulate fetching product details
      select.innerHTML = html;
      // In a real scenario, you might fetch this data from a server

      modal.style.display = "block";
    });
  });
  // Get the <span> element that closes the modal
  var closeButton = document.querySelector(".close-button-donate");
  var confirmButton = document.querySelector(".confirm-button");

  // When the user clicks on <span> (x), close the modal
  closeButton.onclick = function () {
    var modal = document.getElementById("donateModal");
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

  confirmButton.addEventListener("click", function () {
    var numberSelect = document.getElementById("numberSelect");
    addDonation({
      id: "",
      postId: mainPost.id,
      donationCategory: "Food Donation",
      Type: mainPost.Type,
      Name: mainPost.Name,
      image: mainPost.image,
      Organization: mainPost.Organization,
      Amount: numberSelect.value,
    });
    console.log(AllDonations.length);

    let thankhtml = `
    <div class="modal-donate-content">
    <div class = "inside-thank-content">
    <div class = "upper-inside-thank">
    <div class = "close-button-div"><span class="close-button-donate">×</span></div>
    </div>
    Thank You for Your Donation!
    <div class = "continue-button-div"><button class = "continue-button">Another Donation?</div></div>
    </div>
    </div>
    `;

    var modal = document.getElementById("donateModal");
    modal.innerHTML = thankhtml;

    var closeButton = document.querySelector(".close-button-donate");
    var continueButton = document.querySelector(".continue-button");

    // When the user clicks on <span> (x), close the modal
    closeButton.onclick = function () {
      window.location.reload();
    };

    continueButton.onclick = function () {
      html = foodPostsGenerate();
      postsDiv.innerHTML = html;
      detailsButtonFood();
      donateButtonFood();
    };

    // Optional: close the modal if someone clicks outside of it
    window.onclick = function (event) {
      var modal = document.getElementById("donateModal");
      if (event.target == modal) {
        window.location.reload();
      }
    };
  });
}

function donateButtonMedical() {
  let mainPost = null;
  document.querySelectorAll(".donate-button").forEach((button) => {
    button.addEventListener("click", function () {
      var productId = this.closest(".post-div").getAttribute("data-post-id");
      let post = medicalPosts.find((post) => post.id == productId);
      mainPost = post;
      let needed = post.Amount;
      let html = ``;
      for (let i = 1; i <= needed; i++) {
        html += `<option value="${i}">${i}</option>`;
      }

      var modal = document.getElementById("donateModal");
      var select = document.getElementById("numberSelect");

      // Simulate fetching product details
      select.innerHTML = html;
      // In a real scenario, you might fetch this data from a server

      modal.style.display = "block";
    });
  });
  // Get the <span> element that closes the modal
  var closeButton = document.querySelector(".close-button-donate");
  var confirmButton = document.querySelector(".confirm-button");

  // When the user clicks on <span> (x), close the modal
  closeButton.onclick = function () {
    var modal = document.getElementById("donateModal");
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

  confirmButton.addEventListener("click", function () {
    var numberSelect = document.getElementById("numberSelect");
    addDonation({
      id: "",
      postId: mainPost.id,
      donationCategory: "Medical Donation",
      deviceType: mainPost.deviceType,
      Usage: mainPost.Usage,
      image: mainPost.image,
      Organization: mainPost.Organization,
      Amount: numberSelect.value,
    });
    console.log(AllDonations.length);

    let thankhtml = `
    <div class="modal-donate-content">
    <div class = "inside-thank-content">
    <div class = "upper-inside-thank">
    <div class = "close-button-div"><span class="close-button-donate">×</span></div>
    </div>
    Thank You for Your Donation!
    <div class = "continue-button-div"><button class = "continue-button">Another Donation?</div></div>
    </div>
    </div>
    `;

    var modal = document.getElementById("donateModal");
    modal.innerHTML = thankhtml;

    var closeButton = document.querySelector(".close-button-donate");
    var continueButton = document.querySelector(".continue-button");

    // When the user clicks on <span> (x), close the modal
    closeButton.onclick = function () {
      window.location.reload();
    };

    continueButton.onclick = function () {
      html = medicalPostsGenerate();
      postsDiv.innerHTML = html;
      detailsButtonMedical();
      donateButtonMedical();
    };

    // Optional: close the modal if someone clicks outside of it
    window.onclick = function (event) {
      var modal = document.getElementById("donateModal");
      if (event.target == modal) {
        window.location.reload();
      }
    };
  });
}

function donateButtonStationary() {
  let mainPost = null;
  document.querySelectorAll(".donate-button").forEach((button) => {
    button.addEventListener("click", function () {
      var productId = this.closest(".post-div").getAttribute("data-post-id");
      let post = stationaryPosts.find((post) => post.id == productId);
      mainPost = post;
      let needed = post.Amount;
      let html = ``;
      for (let i = 1; i <= needed; i++) {
        html += `<option value="${i}">${i}</option>`;
      }

      var modal = document.getElementById("donateModal");
      var select = document.getElementById("numberSelect");

      // Simulate fetching product details
      select.innerHTML = html;
      // In a real scenario, you might fetch this data from a server

      modal.style.display = "block";
    });
  });
  // Get the <span> element that closes the modal
  var closeButton = document.querySelector(".close-button-donate");
  var confirmButton = document.querySelector(".confirm-button");

  // When the user clicks on <span> (x), close the modal
  closeButton.onclick = function () {
    var modal = document.getElementById("donateModal");
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    document.querySelectorAll(".modal").forEach(function (modal) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  };

  confirmButton.addEventListener("click", function () {
    var numberSelect = document.getElementById("numberSelect");
    addDonation({
      id: "",
      postId: mainPost.id,
      donationCategory: "Stationary Donation",
      Type: mainPost.Type,
      image: mainPost.image,
      Organization: mainPost.Organization,
      Amount: numberSelect.value,
    });
    console.log(AllDonations.length);

    let thankhtml = `
    <div class="modal-donate-content">
    <div class = "inside-thank-content">
    <div class = "upper-inside-thank">
    <div class = "close-button-div"><span class="close-button-donate">×</span></div>
    </div>
    Thank You for Your Donation!
    <div class = "continue-button-div"><button class = "continue-button">Another Donation?</div></div>
    </div>
    </div>
    `;

    var modal = document.getElementById("donateModal");
    modal.innerHTML = thankhtml;

    var closeButton = document.querySelector(".close-button-donate");
    var continueButton = document.querySelector(".continue-button");

    // When the user clicks on <span> (x), close the modal
    closeButton.onclick = function () {
      window.location.reload();
    };

    continueButton.onclick = function () {
      html = schoolPostsGenerate();
      postsDiv.innerHTML = html;
      detailsButtonStationary();
      detailsButtonBooks();
      donateButtonStationary();
      donateButtonBooks();
    };

    // Optional: close the modal if someone clicks outside of it
    window.onclick = function (event) {
      var modal = document.getElementById("donateModal");
      if (event.target == modal) {
        window.location.reload();
      }
    };
  });
}

function donateButtonBooks() {
  let mainPost = null;
  document.querySelectorAll(".donate-button").forEach((button) => {
    button.addEventListener("click", function () {
      var productId = this.closest(".post-div").getAttribute("data-post-id");
      let post = bookPosts.find((post) => post.id == productId);
      mainPost = post;
      let needed = post.Amount;
      let html = ``;
      for (let i = 1; i <= needed; i++) {
        html += `<option value="${i}">${i}</option>`;
      }

      var modal = document.getElementById("donateModal");
      var select = document.getElementById("numberSelect");

      // Simulate fetching product details
      select.innerHTML = html;
      // In a real scenario, you might fetch this data from a server

      modal.style.display = "block";
    });
  });
  // Get the <span> element that closes the modal
  var closeButton = document.querySelector(".close-button-donate");
  var confirmButton = document.querySelector(".confirm-button");

  // When the user clicks on <span> (x), close the modal
  closeButton.onclick = function () {
    var modal = document.getElementById("donateModal");
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

  confirmButton.addEventListener("click", function () {
    var numberSelect = document.getElementById("numberSelect");
    addDonation({
      id: "",
      postId: mainPost.id,
      donationCategory: "Book Donation",
      Name: mainPost.Name,
      Author: mainPost.Author,
      Language: mainPost.Language,
      Edition: mainPost.Edition,
      image: mainPost.image,
      Summary: mainPost.Summary,
      Organization: mainPost.Organization,
      Amount: numberSelect.value,
    });
    console.log(AllDonations.length);

    let thankhtml = `
    <div class="modal-donate-content">
    <div class = "inside-thank-content">
    <div class = "upper-inside-thank">
    <div class = "close-button-div"><span class="close-button-donate">×</span></div>
    </div>
    Thank You for Your Donation!
    <div class = "continue-button-div"><button class = "continue-button">Another Donation?</div></div>
    </div>
    </div>
    `;

    var modal = document.getElementById("donateModal");
    modal.innerHTML = thankhtml;

    var closeButton = document.querySelector(".close-button-donate");
    var continueButton = document.querySelector(".continue-button");

    // When the user clicks on <span> (x), close the modal
    closeButton.onclick = function () {
      window.location.reload();
    };

    continueButton.onclick = function () {
      html = schoolPostsGenerate();
      postsDiv.innerHTML = html;
      detailsButtonStationary();
      detailsButtonBooks();
      donateButtonStationary();
      donateButtonBooks();
    };

    // Optional: close the modal if someone clicks outside of it
    window.onclick = function (event) {
      var modal = document.getElementById("donateModal");
      if (event.target == modal) {
        window.location.reload();
      }
    };
  });
}

function donateButtonBlood() {
  let mainPost = null;
  document.querySelectorAll(".donate-button").forEach((button) => {
    button.addEventListener("click", function () {
      var productId = this.closest(".post-div").getAttribute("data-post-id");
      let post = bloodPosts.find((post) => post.id == productId);
      mainPost = post;
      let needed = post.Amount;
      let html = ``;
      for (let i = 1; i <= needed; i++) {
        html += `<option value="${i}">${i}</option>`;
      }

      var modal = document.getElementById("donateModal");
      var select = document.getElementById("numberSelect");

      // Simulate fetching product details
      select.innerHTML = html;
      // In a real scenario, you might fetch this data from a server

      modal.style.display = "block";
    });
  });
  // Get the <span> element that closes the modal
  var closeButton = document.querySelector(".close-button-donate");
  var confirmButton = document.querySelector(".confirm-button");

  // When the user clicks on <span> (x), close the modal
  closeButton.onclick = function () {
    var modal = document.getElementById("donateModal");
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

  confirmButton.addEventListener("click", function () {
    var numberSelect = document.getElementById("numberSelect");
    addDonation({
      id: "",
      postId: mainPost.id,
      donationCategory: "Blood Donation",
      patientName: mainPost.patientName,
      bloodType: mainPost.bloodType,
      RHType: mainPost.RHType,
      hospitalName: mainPost.hospitalName,
      hospitalArea: mainPost.hospitalArea,
      hospitalGovernorate: mainPost.hospitalGovernorate,
      hospitalAddress: mainPost.hospitalAddress,
      Organization: mainPost.Organization,
      Amount: numberSelect.value,
    });
    console.log(AllDonations.length);

    let thankhtml = `
    <div class="modal-donate-content">
    <div class = "inside-thank-content">
    <div class = "upper-inside-thank">
    <div class = "close-button-div"><span class="close-button-donate">×</span></div>
    </div>
    Thank You for Your Donation!
    <div class = "continue-button-div"><button class = "continue-button">Another Donation?</div></div>
    </div>
    </div>
    `;

    var modal = document.getElementById("donateModal");
    modal.innerHTML = thankhtml;

    var closeButton = document.querySelector(".close-button-donate");
    var continueButton = document.querySelector(".continue-button");

    // When the user clicks on <span> (x), close the modal
    closeButton.onclick = function () {
      window.location.reload();
    };

    continueButton.onclick = function () {
      html = bloodPostsGenerate();
      postsDiv.innerHTML = html;
      detailsButtonBlood();
      donateButtonBlood();
    };

    // Optional: close the modal if someone clicks outside of it
    window.onclick = function (event) {
      var modal = document.getElementById("donateModal");
      if (event.target == modal) {
        window.location.reload();
      }
    };
  });
}

function clothesPostsGenerate() {
  let clotheshtml = "";
  clothesPosts.forEach((post) => {
    clotheshtml += `<div class="post-div" data-post-id="${post.id}" id = "clothes">
  <div class="post-pic-div">
    <img
      src="../${post.image}"
      alt=""
      class="product-pic"
    />
  </div>
  <div class="details-div">
    <div class="item-name">${post.Name}</div>
    <div class="org-posting">${post.Organization}</div>
    <div class="buttons-div">
      <button class="details-button">View Details</button>
      <div id="productModal" class="modal">
        <div class="modal-content">
          <span class="close-button">×</span>
          <h2>Product Details</h2>
          <div class="productDetails"></div>
        </div>
      </div>
      <button class="donate-button"  >Donate</button>
      <div id="donateModal" class="modal">
        <div class="modal-donate-content">
        <div class = "inside-donate-content">
        <div class = "upper-inside-donate">
        <div class = "quantity-div">Quantity</div>
        <div class = "close-button-div"><span class="close-button-donate">×</span></div>
        </div>
        <select id="numberSelect" name="number" >
        </select>
        <div class = "confirm-button-div">
          <button class="confirm-button">Confirm</button>
        </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  </div>`;
  });
  return clotheshtml;
}

function toysPostsGenerate() {
  let toyshtml = "";
  toysPosts.forEach((post) => {
    toyshtml += `<div class="post-div" data-post-id="${post.id}" id = "toys">
  <div class="post-pic-div">
    <img
      src="../${post.image}"
      alt=""
      class="product-pic"
    />
  </div>
  <div class="details-div">
    <div class="item-name">${post.Type}</div>
    <div class="org-posting">${post.Organization}</div>
    <div class="buttons-div">
      <button class="details-button">View Details</button>
      <div id="productModal" class="modal">
        <div class="modal-content">
          <span class="close-button">×</span>
          <h2>Product Details</h2>
          <div class="productDetails"></div>
        </div>
      </div>
      <button class="donate-button" data-post-id="toys">Donate</button>
      <div id="donateModal" class="modal">
      <div class="modal-donate-content">
      <div class = "inside-donate-content">
      <div class = "upper-inside-donate">
      <div class = "quantity-div">Quantity</div>
      <div class = "close-button-div"><span class="close-button-donate">×</span></div>
      </div>
      <select id="numberSelect" name="number">
      </select>
      <div class = "confirm-button-div">
        <button class="confirm-button">Confirm</button>
      </div>
      </div>
      </div>
    </div>
    </div>
  </div>
  </div>`;
  });
  return toyshtml;
}

function foodPostsGenerate() {
  let foodhtml = "";
  foodPosts.forEach((post) => {
    foodhtml += `<div class="post-div" data-post-id="${post.id}" id = "food">
  <div class="post-pic-div">
    <img
      src="../${post.image}"
      alt=""
      class="product-pic"
    />
  </div>
  <div class="details-div">
    <div class="item-name">${post.Name}</div>
    <div class="org-posting">${post.Organization}</div>
    <div class="buttons-div">
      <button class="details-button">View Details</button>
      <div id="productModal" class="modal">
        <div class="modal-content">
          <span class="close-button">×</span>
          <h2>Product Details</h2>
          <div class="productDetails"></div>
        </div>
      </div>
      <button class="donate-button" data-post-id="food">Donate</button>
      <div id="donateModal" class="modal">
      <div class="modal-donate-content">
      <div class = "inside-donate-content">
      <div class = "upper-inside-donate">
      <div class = "quantity-div">Quantity</div>
      <div class = "close-button-div"><span class="close-button-donate">×</span></div>
      </div>
      <select id="numberSelect" name="number">
      </select>
      <div class = "confirm-button-div">
        <button class="confirm-button">Confirm</button>
      </div>
      </div>
      </div>
    </div>
    </div>
  </div>
  </div>`;
  });
  return foodhtml;
}
function medicalPostsGenerate() {
  let medicalhtml = "";
  medicalPosts.forEach((post) => {
    medicalhtml += `<div class="post-div" data-post-id="${post.id}" id = "medical">
  <div class="post-pic-div">
    <img
      src="../${post.image}"
      alt=""
      class="product-pic"
    />
  </div>
  <div class="details-div">
    <div class="item-name">${post.deviceType}</div>
    <div class="org-posting">${post.Organization}</div>
    <div class="buttons-div">
      <button class="details-button">View Details</button>
      <div id="productModal" class="modal">
        <div class="modal-content">
          <span class="close-button">×</span>
          <h2>Product Details</h2>
          <div class="productDetails"></div>
        </div>
      </div>
      <button class="donate-button" data-post-id="medical">Donate</button>
      <div id="donateModal" class="modal">
      <div class="modal-donate-content">
      <div class = "inside-donate-content">
      <div class = "upper-inside-donate">
      <div class = "quantity-div">Quantity</div>
      <div class = "close-button-div"><span class="close-button-donate">×</span></div>
      </div>
      <select id="numberSelect" name="number">
      </select>
      <div class = "confirm-button-div">
        <button class="confirm-button">Confirm</button>
      </div>
      </div>
      </div>
    </div>
    </div>
  </div>
  </div>`;
  });
  return medicalhtml;
}
function schoolPostsGenerate() {
  let schoolhtml = "";
  stationaryPosts.forEach((post) => {
    schoolhtml += `<div class="post-div" data-post-id="${post.id}" id = "stationary">
  <div class="post-pic-div">
    <img
      src="../${post.image}"
      alt=""
      class="product-pic"
    />
  </div>
  <div class="details-div">
    <div class="item-name">${post.Type}</div>
    <div class="org-posting">${post.Organization}</div>
    <div class="buttons-div">
      <button class="details-stationary">View Details</button>
      <div id="productModal" class="modal">
        <div class="modal-content">
          <span class="close-button">×</span>
          <h2>Product Details</h2>
          <div class="productDetails"></div>
        </div>
      </div>
      <button class="donate-button" data-post-id="school">Donate</button>
      <div id="donateModal" class="modal">
      <div class="modal-donate-content">
      <div class = "inside-donate-content">
      <div class = "upper-inside-donate">
      <div class = "quantity-div">Quantity</div>
      <div class = "close-button-div"><span class="close-button-donate">×</span></div>
      </div>
        <select id="numberSelect" name="number">
        </select>
        <div class = "confirm-button-div">
          <button class="confirm-button">Confirm</button>
        </div>
        </div>
      </div>
    </div>
    </div>
  </div>
  </div>`;
  });

  bookPosts.forEach((post) => {
    schoolhtml += `<div class="post-div" data-post-id="${post.id}" id = "books">
  <div class="post-pic-div">
    <img
      src="../${post.image}"
      alt=""
      class="product-pic"
    />
  </div>
  <div class="details-div">
    <div class="item-name">${post.Name}</div>
    <div class="org-posting">${post.Organization}</div>
    <div class="buttons-div">
      <button class="details-books">View Details</button>
      <div id="productModal" class="modal">
        <div class="modal-content">
          <span class="close-button">×</span>
          <h2>Product Details</h2>
          <div class="productDetails"></div>
        </div>
      </div>
      <button class="donate-button" data-post-id="stationary">Donate</button>
      <div id="donateModal" class="modal">
      <div class="modal-donate-content">
      <div class = "inside-donate-content">
      <div class = "upper-inside-donate">
      <div class = "quantity-div">Quantity</div>
      <div class = "close-button-div"><span class="close-button-donate">×</span></div>
      </div>
      <select id="numberSelect" name="number">
      </select>
      <div class = "confirm-button-div">
        <button class="confirm-button">Confirm</button>
      </div>
      </div>
      </div>
    </div>
    </div>
  </div>
  </div>`;
  });
  return schoolhtml;
}
function bloodPostsGenerate() {
  let bloodhtml = "";
  bloodPosts.forEach((post) => {
    bloodhtml += `<div class="post-div" data-post-id="${post.id}" id = "blood">

  <div class="details-div">
    <div class="item-name">${post.bloodType} ${post.RHType}</div>
    <div class="org-posting">${post.Organization}</div>
    <div class="buttons-div">
      <button class="details-button">View Details</button>
      <div id="productModal" class="modal">
        <div class="modal-content">
          <span class="close-button">×</span>
          <h2>Product Details</h2>
          <div class="productDetails"></div>
        </div>
      </div>
      <button class="donate-button" data-post-id="books">Donate</button>
      <div id="donateModal" class="modal">
      <div class="modal-donate-content">
      <div class = "inside-donate-content">
      <div class = "upper-inside-donate">
      <div class = "quantity-div">Quantity</div>
      <div class = "close-button-div"><span class="close-button-donate">×</span></div>
      </div>
      <select id="numberSelect" name="number">
      </select>
      <div class = "confirm-button-div">
        <button class="confirm-button">Confirm</button>
      </div>
      </div>
      </div>
    </div>
    </div>
  </div>
  </div>`;
  });
  return bloodhtml;
}

var html = "";
let postsDiv = document.querySelector(".posts-part-div");
html = clothesPostsGenerate();
postsDiv.innerHTML = html;
detailsButtonClothes();
donateButtonClothes();

document.querySelectorAll(".single-cat-div").forEach((div) => {
  div.addEventListener("click", function () {
    if (div.id === "clothes-cat-div") {
      html = clothesPostsGenerate();
      postsDiv.innerHTML = html;
      detailsButtonClothes();
      donateButtonClothes();
    }
    if (div.id === "toys-cat-div") {
      html = toysPostsGenerate();
      postsDiv.innerHTML = html;
      detailsButtonToys();
      donateButtonToys();
    }
    if (div.id === "food-cat-div") {
      html = foodPostsGenerate();
      postsDiv.innerHTML = html;
      detailsButtonFood();
      donateButtonFood();
    }
    if (div.id === "med-cat-div") {
      html = medicalPostsGenerate();
      postsDiv.innerHTML = html;
      detailsButtonMedical();
      donateButtonMedical();
    }
    if (div.id === "school-cat-div") {
      html = schoolPostsGenerate();
      postsDiv.innerHTML = html;
      detailsButtonStationary();
      detailsButtonBooks();
      donateButtonStationary();
      donateButtonBooks();
    }
    if (div.id === "blood-cat-div") {
      html = bloodPostsGenerate();
      postsDiv.innerHTML = html;
      detailsButtonBlood();
      donateButtonBlood();
    }
  });
});

function accountButton() {
  document
    .querySelector(".account-button")
    .addEventListener("click", function () {
      if (this.nextElementSibling.style.display === "flex")
        this.nextElementSibling.style.display = "none";
      else {
        this.nextElementSibling.style.display = "flex";
      }
    });
}

accountButton();

let ageValue = "";
const radioButtons = document.querySelectorAll(
  'input[type="radio"][name="age"]'
);

// Add change event listener to each radio button
radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("change", () => {
    if (radioButton.checked) {
      ageValue = radioButton.value;
    }
  });
});

const genderRadios = document.querySelectorAll(
  'input[type="radio"][name="gender"]'
);
let genderValue = "";
// Add change event listener to each gender radio button
genderRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    if (radio.checked) {
      genderValue = radio.value;
    }
  });
});

const seasonRadios = document.querySelectorAll(
  'input[type="radio"][name="season"]'
);
let seasonValue = "";
// Add change event listener to each season radio button
seasonRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    if (radio.checked) {
      seasonValue = radio.value;
    }
  });
});
