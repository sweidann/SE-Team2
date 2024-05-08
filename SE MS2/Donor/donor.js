import {
  clothesPosts,
  toysPosts,
  foodPosts,
  medicalPosts,
  bookPosts,
  bloodPosts,
  stationaryPosts,
} from "../data/posts.js";

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

      var prodName = post.name;
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
    var modal = document.getElementById("productModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
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
    var modal = document.getElementById("productModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
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
    var modal = document.getElementById("productModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
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
    var modal = document.getElementById("productModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
function detailsButtonStationary() {
  document.querySelectorAll(".details-button").forEach((button) => {
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
    var modal = document.getElementById("productModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
function detailsButtonBooks() {
  document.querySelectorAll(".details-button").forEach((button) => {
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
    var modal = document.getElementById("productModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
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
    var modal = document.getElementById("productModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

function clothesPostsGenerate() {
  let clotheshtml = "";
  clothesPosts.forEach((post) => {
    clotheshtml += `<div class="post-div" data-post-id="${post.id}">
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
      <button class="donate-button">Donate</button>
    </div>
  </div>
  </div>`;
  });
  return clotheshtml;
}

function toysPostsGenerate() {
  let toyshtml = "";
  toysPosts.forEach((post) => {
    toyshtml += `<div class="post-div" data-post-id="${post.id}">
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
      <button class="donate-button">Donate</button>
    </div>
  </div>
  </div>`;
  });
  return toyshtml;
}

function foodPostsGenerate() {
  let foodhtml = "";
  foodPosts.forEach((post) => {
    foodhtml += `<div class="post-div" data-post-id="${post.id}">
  <div class="post-pic-div">
    <img
      src="../${post.image}"
      alt=""
      class="product-pic"
    />
  </div>
  <div class="details-div">
    <div class="item-name">${post.name}</div>
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
      <button class="donate-button">Donate</button>
    </div>
  </div>
  </div>`;
  });
  return foodhtml;
}
function medicalPostsGenerate() {
  let medicalhtml = "";
  medicalPosts.forEach((post) => {
    medicalhtml += `<div class="post-div" data-post-id="${post.id}">
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
      <button class="donate-button">Donate</button>
    </div>
  </div>
  </div>`;
  });
  return medicalhtml;
}
function schoolPostsGenerate() {
  let schoolhtml = "";
  stationaryPosts.forEach((post) => {
    schoolhtml += `<div class="post-div" data-post-id="${post.id}">
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
      <button class="donate-button">Donate</button>
    </div>
  </div>
  </div>`;
  });

  bookPosts.forEach((post) => {
    schoolhtml += `<div class="post-div" data-post-id="${post.id}">
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
      <button class="donate-button">Donate</button>
    </div>
  </div>
  </div>`;
  });
  return schoolhtml;
}
function bloodPostsGenerate() {
  let bloodhtml = "";
  bloodPosts.forEach((post) => {
    bloodhtml += `<div class="post-div" data-post-id="${post.id}">
  <div class="post-pic-div">
    <img
      src="../${post.image}"
      alt=""
      class="product-pic"
    />
  </div>
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
      <button class="donate-button">Donate</button>
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

document.querySelectorAll(".single-cat-div").forEach((div) => {
  div.addEventListener("click", function () {
    if (div.id === "clothes-cat-div") {
      html = clothesPostsGenerate();
      postsDiv.innerHTML = html;
      detailsButtonClothes();
    }
    if (div.id === "toys-cat-div") {
      html = toysPostsGenerate();
      postsDiv.innerHTML = html;
      detailsButtonToys();
    }
    if (div.id === "food-cat-div") {
      html = foodPostsGenerate();
      postsDiv.innerHTML = html;
      detailsButtonFood();
    }
    if (div.id === "med-cat-div") {
      html = medicalPostsGenerate();
      postsDiv.innerHTML = html;
      detailsButtonMedical();
    }
    if (div.id === "school-cat-div") {
      html = schoolPostsGenerate();
      postsDiv.innerHTML = html;
      detailsButtonBooks();
      detailsButtonStationary();
    }
    if (div.id === "blood-cat-div") {
      html = bloodPostsGenerate();
      postsDiv.innerHTML = html;
      detailsButtonBlood();
    }
  });
});
