import { doctorPosts } from "../data/posts.js";
import {organizationAccounts} from "../data/accounts.js";
console.log("here");

const organizationDropdown = document.getElementById('organization');
organizationAccounts.forEach(organization => {
    const option = document.createElement('option');
    option.value = organization.id;
    option.textContent = organization.organizationName;
    organizationDropdown.appendChild(option);
});
function teacherPostsGenerate() {
    let teacherhtml = "";
    doctorPosts.forEach((post) => {
        teacherhtml +=
            `<div class="post-div" data-post-id="${post.id}" id="teach">
                <div class="post-pic-div">
                    <img src="../media/doc.png" alt="" class="book-pic" />
                </div>
                <div class="details-div">
                    <div class="item-subj">${post.specialty}</div>
                    <div class="org-posting">${post.Organization}</div>
                    <div class="details-div">
                        <div class="buttons-div">
                            <button class="details-button">View Details</button>
                            <div class="modal">
                                <div class="modal-content">
                                    <span class="close-button">×</span>
                                    <h2>Medical Case</h2>
                                    <div class="productDetails"></div>
                                </div>
                            </div>
                            <button class="donate-button" data-post-id="${post.id}">Aid</button>
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
        const post = doctorPosts.find((post) => post.id === postId);
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
        console.error(" details container not found.");
        return;
    }

    // Clear previous content
    productDetails.innerHTML = "";

    // Create elements for each detail
    const details = document.createElement("div");
    details.classList.add("details");

    const subject = document.createElement("p");
    subject.textContent = `Specialty: ${post.specialty}`;
    details.appendChild(subject);
    
    const namep = document.createElement("p");
    namep.textContent = `Name of Patient: ${post.patientName}`;
    details.appendChild(namep);
    const numberOfStudents = document.createElement("p");
    numberOfStudents.textContent = `Age of Patient: ${post.patientAge}`;
    details.appendChild(numberOfStudents);

    const gender = document.createElement("p");
    gender.textContent = `Gender of Patient: ${post.gender}`;
    details.appendChild(gender);

    const weight = document.createElement("p");
    weight.textContent = `Weight of Patient: ${post.Weight}`;
    details.appendChild(weight);
    

    const address = document.createElement("p");
    address.textContent = `Area: ${post.area}`;
    details.appendChild(address);
    const address2 = document.createElement("p");
    address2.textContent = `Governate: ${post.governate}`;
    details.appendChild(address2);
    const des = document.createElement("p");
    des.textContent = `Description: ${post.description}`;
    details.appendChild(des);
    

    const image = document.createElement("img");
    image.src = post.image;
    image.alt = "Doc Image";
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
        const post = doctorPosts.find((post) => post.id === postId);
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
        <h2>Aid Confirmation</h2>
        <p>You have chosen to aid this patient. Are you sure?</p>
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
        const post =doctorPosts.find((post) => post.id === postId);
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
    const postIndex = doctorPosts.findIndex((post) => post.id === postId);
    if (postIndex !== -1) {
        doctorPosts.splice(postIndex, 1); // Remove post from array
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
