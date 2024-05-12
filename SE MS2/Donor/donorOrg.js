import{organizationAccounts} from "../data/accounts.js"
console.log(organizationAccounts.length);

const postsPartDiv = document.querySelector('.posts-part-div');

// Generate HTML using teacherPostsGenerate function
const teacherPostsHTML = orgregPostsGenerate();

// Append the generated HTML to the container element
postsPartDiv.innerHTML += teacherPostsHTML;
function orgregPostsGenerate() {
    let teacherhtml = "";
    organizationAccounts.forEach((post) => {
        teacherhtml +=
            `<div class="post-div" data-post-id="${post.id}" id="teach">
                
                <div class="details-div">
                    <div class="item-subj">${post.organizationName}</div>
                    <div class="org-posting">${post.organizationType}</div>
                    <div class="details-div">
                        <div class="buttons-div">
                            <button class="details-button">View Details</button>
                            <div class="modal">
                                <div class="modal-content">
                                    <span class="close-button">×</span>
                                    <h2>Details</h2>
                                    <div class="productDetails"></div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>`;
    });
    return teacherhtml;
}


function detailsButtons1(){
    document.querySelectorAll(".details-button").forEach((button) => {
        button.addEventListener("click", function () {
            const postId = this.closest(".post-div").getAttribute("data-post-id");
            const post = organizationAccounts.find((post) => post.id === postId);
            displayTeacherDetails1(post);
        });
    });
}


function displayTeacherDetails1(post) {
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
    subject.textContent = `Organization Name: ${post.organizationName}`;
    details.appendChild(subject);
    
    const namep = document.createElement("p");
    namep.textContent = `Organization type: ${post.organizationType}`;
    details.appendChild(namep);
    const numberOfStudents = document.createElement("p");
    numberOfStudents.textContent = `First Name: ${post.firstName}`;
    details.appendChild(numberOfStudents);

    const gender = document.createElement("p");
    gender.textContent = `Last Name: ${post.lastName}`;
    details.appendChild(gender);

    const weight = document.createElement("p");
    weight.textContent = `gender: ${post.gender}`;
    details.appendChild(weight);
    

    const address = document.createElement("p");
    address.textContent = `email: ${post.email}`;
    details.appendChild(address);
    const address2 = document.createElement("p");
    address2.textContent = `contact Number: ${post.contactNumber}`;
    details.appendChild(address2);
    const des = document.createElement("p");
    des.textContent = `organizationAddress: ${post.organizationAddress}`;
    details.appendChild(des);
    const des2 = document.createElement("p");
    des2.textContent = `organizationGovernorate: ${post.organizationGovernorate}`;
    details.appendChild(des2);
    const des3 = document.createElement("p");
    des.textContent = `organizationArea: ${post.organizationArea}`;
    details.appendChild(des3);
   
    // Append details to productDetails
    productDetails.appendChild(details);

    // Display the modal
    modal.style.display = "block";
}


// Event listener for details button
document.querySelectorAll(".details-button").forEach((button) => {
    button.addEventListener("click", function () {
        const postId = this.closest(".post-div").getAttribute("data-post-id");
        const post = organizationAccounts.find((post) => post.id === postId);
        displayTeacherDetails1(post);
    });
});


function closeButtons1(){
    // Event listener for close button
document.querySelector(".close-button").addEventListener("click", function () {
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
});
}







// Close modal when clicking outside of it
window.onclick = function (event) {
    document.querySelectorAll(".modal").forEach(function (modal) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
};
