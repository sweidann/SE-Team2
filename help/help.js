document.querySelectorAll(".view-details").forEach((button) => {
  button.addEventListener("click", function () {
    var productId = this.closest(".product").getAttribute("data-product-id");
    var modal = document.getElementById("productModal");
    var details = document.getElementById("productDetails");

    // Simulate fetching product details
    details.textContent = "Loading details for product " + productId;
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
  var modal = document.getElementById("productModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.querySelectorAll(".donate-button").forEach((button) => {
  button.addEventListener("click", function () {
    var productId = this.closest(".post-div").getAttribute("data-post-id");
    const postCat = this.id.split("-")[0];
    if (postCat === "c") {
      let post = clothesPosts.find((post) => post.id == productId);
    }
    if (postCat === "t") {
      let post = toysPosts.find((post) => post.id == productId);
    }
    if (postCat === "f") {
      let post = foodPosts.find((post) => post.id == productId);
    }
    if (postCat === "m") {
      let post = medicalPosts.find((post) => post.id == productId);
    }
    if (postCat === "s") {
      let post = stationaryPosts.find((post) => post.id == productId);
    }
    if (postCat === "bo") {
      let post = bookPosts.find((post) => post.id == productId);
    }
    if (postCat === "bl") {
      let post = bloodPosts.find((post) => post.id == productId);
    }
    var modal = document.querySelector(".donate-modal");

    modal.style.display = "block";
  });
});

// Get the <span> element that closes the modal
var confirmButton = document.querySelector(".confirm-button");

// When the user clicks on <span> (x), close the modal
confirmButton.onclick = function () {
  var modal = document.querySelector(".donate-modal");
  if (postCat === "c") {
    let newPost = {
      id,
      patientName,
      bloodType,
      RHType,
      hospitalName,
      hospitalArea,
      hospitalGovernorate,
      hospitalAddress,
    };
    bloodPosts.push(newPost);
  }
  if (postCat === "t") {
    let newPost = {
      id,
      patientName,
      bloodType,
      RHType,
      hospitalName,
      hospitalArea,
      hospitalGovernorate,
      hospitalAddress,
    };
    bloodPosts.push(newPost);
  }
  if (postCat === "f") {
    let newPost = {
      id,
      patientName,
      bloodType,
      RHType,
      hospitalName,
      hospitalArea,
      hospitalGovernorate,
      hospitalAddress,
    };
    bloodPosts.push(newPost);
  }
  if (postCat === "m") {
    let newPost = {
      id,
      patientName,
      bloodType,
      RHType,
      hospitalName,
      hospitalArea,
      hospitalGovernorate,
      hospitalAddress,
    };
    bloodPosts.push(newPost);
  }
  if (postCat === "s") {
    let newPost = {
      id,
      patientName,
      bloodType,
      RHType,
      hospitalName,
      hospitalArea,
      hospitalGovernorate,
      hospitalAddress,
    };
    bloodPosts.push(newPost);
  }
  if (postCat === "bo") {
    let newPost = {
      id,
      patientName,
      bloodType,
      RHType,
      hospitalName,
      hospitalArea,
      hospitalGovernorate,
      hospitalAddress,
    };
    bloodPosts.push(newPost);
  }
  if (postCat === "bl") {
    //let post = bloodPosts.find((post) => post.id == productId);
    const id = post.id;
    const patientName = post.patientName;
    const bloodType = post.bloodType;
    const RHType = post.RHType;
    const hospitalName = post.hospitalName;
    const hospitalArea = post.hospitalArea;
    const hospitalGovernorate = post.hospitalGovernorate;
    const hospitalAddress = post.hospitalAddress;
    let newPost = {
      id,
      patientName,
      bloodType,
      RHType,
      hospitalName,
      hospitalArea,
      hospitalGovernorate,
      hospitalAddress,
    };
    bloodDonations.push(newPost);
  }

  modal.style.display = "none";
};

// Optional: close the modal if someone clicks outside of it
window.onclick = function (event) {
  var modal = document.querySelector(".donate-modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
