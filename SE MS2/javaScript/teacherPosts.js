import { teacherPosts } from "../data/posts.js";
console.log("here");

function teacherPostsGenerate() {
    let teacherhtml = "";
    teacherPosts.forEach((post) => {
        teacherhtml +=
            `<div class="post-div" data-post-id="${post.id}" id="teach">
                <div class="post-pic-div">
                    <img src="../media/book.png" alt="" class="book-pic" />
                </div>
                <div class="details-div">
                    <div class="item-subj">${post.subject}</div>
                    <div class="org-posting">${post.Organization}</div>
                    <div class="details-div">
                        <div class="buttons-div">
                            <button class="details-button">View Details</button>
                            <div class="modal">
                                <div class="modal-content">
                                    <span class="close-button">×</span>
                                    <h2>Teaching Details</h2>
                                    <div class="productDetails"></div>
                                </div>
                            </div>
                            <button class="donate-button" data-post-id="${post.id}">Teach</button>
                        </div>
                    </div>
                </div>
            </div>`;
    });
    return teacherhtml;
}

const postsPartDiv = document.querySelector('.posts-part-div');

// Generate HTML using teacherPostsGenerate function
const teacherPostsHTML = teacherPostsGenerate();

// Append the generated HTML to the container element
postsPartDiv.innerHTML += teacherPostsHTML;

// Event listener for details button
document.querySelectorAll(".details-button").forEach((button) => {
    button.addEventListener("click", function () {
        const postId = this.closest(".post-div").getAttribute("data-post-id");
        const post = teacherPosts.find((post) => post.id === postId);
        displayTeacherDetails(post);
    });
});

function displayTeacherDetails(post) {
    const postDiv = document.querySelector(`[data-post-id="${post.id}"]`);
    const modal = postDiv.querySelector(".modal");
    const modalContent = modal.querySelector(".modal-content");
    const productDetails = modalContent.querySelector(".productDetails");

    // Check if productDetails exists
    if (!productDetails) {
        console.error("Product details container not found.");
        return;
    }

    // Clear previous content
    productDetails.innerHTML = "";

    // Create elements for each detail
    const details = document.createElement("div");
    details.classList.add("details");

    const subject = document.createElement("p");
    subject.textContent = `Subject: ${post.subject}`;
    details.appendChild(subject);

    const numberOfStudents = document.createElement("p");
    numberOfStudents.textContent = `Number of Students: ${post.numberOfStudents}`;
    details.appendChild(numberOfStudents);

    const address = document.createElement("p");
    address.textContent = `Address: ${post.address}`;
    details.appendChild(address);

    const image = document.createElement("img");
    image.src = post.image;
    image.alt = "Teacher Image";
    image.style.width = "400px"; // Adjust width as needed
    image.style.height = "auto";
    image.classList.add("teacher-image");
    details.appendChild(image);

    // Append details to productDetails
    productDetails.appendChild(details);

    // Display the modal
    modal.style.display = "block";
}


// Event listener for details button
document.querySelectorAll(".details-button").forEach((button) => {
    button.addEventListener("click", function () {
        const postId = this.closest(".post-div").getAttribute("data-post-id");
        const post = teacherPosts.find((post) => post.id === postId);
        displayTeacherDetails(post);
    });
});

// Event listener for close button
document.querySelector(".close-button").addEventListener("click", function () {
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
});

// Event listener for donate button
document.querySelectorAll(".donate-button").forEach((button) => {
    button.addEventListener("click", function () {
        const postId = this.getAttribute("data-post-id");
        displayTeachConfirmation(postId);
    });
});

// Function to display teach confirmation modal
function displayTeachConfirmation(postId) {
    const modal = document.querySelector(".modal");
    const modalContent = modal.querySelector(".modal-content");

    // Update modal content
    modalContent.innerHTML = `
        <h2>Teach Confirmation</h2>
        <p>You have chosen to teach this subject. Are you sure?</p>
        <div class="button-container">
            <button class="confirm-button">Confirm</button>
            <button class="cancel-button">Cancel</button>
        </div>
    `;

    // Show the modal
    modal.style.display = "block";

    // Add event listener for confirm button
    const confirmButton = modalContent.querySelector(".confirm-button");
    confirmButton.addEventListener("click", function () {
        modal.style.display = "none"; // Hide modal after confirming
        const post = teacherPosts.find((post) => post.id === postId);
        // Display details
        removePost(postId); // Remove post
    });

    // Add event listener for cancel button
    const cancelButton = modalContent.querySelector(".cancel-button");
    cancelButton.addEventListener("click", function () {
        modal.style.display = "none"; // Hide modal on cancel
        
    });
}

// Event listener for donate button
document.querySelectorAll(".donate-button").forEach((button) => {
    button.addEventListener("click", function () {
        const postId = this.getAttribute("data-post-id");
        displayTeachConfirmation(postId);
    });
});

// Function to remove post from the array and the page
function removePost(postId) {
    const postIndex = teacherPosts.findIndex((post) => post.id === postId);
    if (postIndex !== -1) {
        teacherPosts.splice(postIndex, 1); // Remove post from array
        const postElement = document.querySelector(`[data-post-id="${postId}"]`);
        if (postElement) {
            postElement.remove(); // Remove post from page
        }
    }
}

// Close modal when clicking outside of it
window.onclick = function (event) {
    document.querySelectorAll(".modal").forEach(function (modal) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
};
