import{organizationAccounts,donorsAccounts,currentUser} from "../data/accounts.js"

import{requestOrg,allrequests} from "../data/requests.js";

function updateOrgSize() {
    const orgsizeInput = document.getElementById('orgsize');
    if (orgsizeInput instanceof HTMLInputElement) { // Check if the element is an input
        orgsizeInput.value = organizationAccounts.length.toString(); // Convert to string
    }
}

// Call the function to update the input value
updateOrgSize();


function updatedonorSize() {
    const orgsizeInput = document.getElementById('donorsize');
    if (orgsizeInput instanceof HTMLInputElement) { // Check if the element is an input
        orgsizeInput.value = donorsAccounts.length.toString(); // Convert to string
    }
}

// Call the function to update the input value
updatedonorSize();
function updatetotalSize() {
    const orgsizeInput = document.getElementById('total');
    if (orgsizeInput instanceof HTMLInputElement) {
        let total= donorsAccounts.length+organizationAccounts.length
        orgsizeInput.value = total.toString(); // Convert to string
    }
}

// Call the function to update the input value
updatetotalSize();

const lowerRightPart = document.querySelector('.lower-right-part');
const orgButton = document.getElementById('org');
const volunteerButton = document.getElementById('volunteer');
const acc = document.getElementById('acc');
const set = document.getElementById('settings');

orgButton.addEventListener('click', handleOrgButtonClick);
volunteerButton.addEventListener('click', handlevolButtonClick);
acc.addEventListener('click', handleaccButtonClick);
set.addEventListener('click', handlesettingsButtonClick);
// Function to handle click on Organization button
////////////////////////////////////////////////////////////////
function handleOrgButtonClick() {
    // Replace the content of the lower right part with the desired content
    lowerRightPart.innerHTML = `
        <div class="name-div">Organization</div>
        <div class="button2">
           <button id="regorg">Registered</button>
           <button id="reqorg">Required</button>
        </div>
        <div class="posts-part-div"></div>
    `;
    const reqorgButton = document.getElementById('reqorg');
    const regorgButton = document.getElementById('regorg');
    // Add event listener to the "Required" button to generate organization posts
    reqorgButton.addEventListener('click', generatereqOrgPosts);
    regorgButton.addEventListener('click', generateregOrgPosts);
}
////////////////////////////////////////////////////////////////////////////
function generatereqOrgPosts() {
    // Call the orgPostsGenerate function to generate HTML for organization posts
    const orgPostsHTML = orgreqPostsGenerate();
    const postsPartDiv = document.querySelector('.posts-part-div');
    // Append the generated HTML to the container element
    postsPartDiv.innerHTML = orgPostsHTML;
    detailsButtons();
    approveButtons();
    downloadButtons();
}
function orgreqPostsGenerate() {
    let teacherhtml = "";
    requestOrg.forEach((post) => {
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
                            <button class="download-button">Download Data</button>
                            <button class="donate-button" data-post-id="${post.id}">Approve</button>
                        </div>
                    </div>
                </div>
            </div>`;
    });
    return teacherhtml;
}


function detailsButtons(){
    document.querySelectorAll(".details-button").forEach((button) => {
        button.addEventListener("click", function () {
            const postId = this.closest(".post-div").getAttribute("data-post-id");
            const post = requestOrg.find((post) => post.id === postId);
            displayTeacherDetails(post);
        });
    });
}


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
        const post = requestOrg.find((post) => post.id === postId);
        displayTeacherDetails(post);
    });
});


function closeButtons(){
    // Event listener for close button
document.querySelector(".close-button").addEventListener("click", function () {
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
});
}




// Function to display teach confirmation modal
function displayTeachConfirmation(postId) {
    const modal = document.querySelector(".modal");
    const modalContent = modal.querySelector(".modal-content");

    // Update modal content
    modalContent.innerHTML = `
        <h2> Confirmation</h2>
        <p>You have chosen approve. Are you sure?</p>
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
        const post =requestOrg.find((post) => post.id === postId);
        // Display details
        organizationAccounts.push(post);
        removePost(postId); // Remove post
    });

    // Add event listener for cancel button
    const cancelButton = modalContent.querySelector(".cancel-button");
    cancelButton.addEventListener("click", function () {
        modal.style.display = "none"; // Hide modal on cancel
        
    });
}
function downloadButtons(){
    document.querySelectorAll(".download-button").forEach((button) => {
        button.addEventListener("click", function () {
            const postId = this.getAttribute("data-post-id");
            const modal = document.querySelector(".modal");
            const modalContent = modal.querySelector(".modal-content");
        
            // Update modal content
            modalContent.innerHTML = `
                <h2>Downloaded Data</h2>
                <p>You have successfully downloaded the data</p>
                
                    <button class="cancel-button">Cancel</button>
                </div>
            `;
        
            // Show the modal
            modal.style.display = "block";
        
            
            // Add event listener for cancel button
            const cancelButton = modalContent.querySelector(".cancel-button");
            cancelButton.addEventListener("click", function () {
                modal.style.display = "none"; // Hide modal on cancel
                
            });
        });
    });
}
// Event listener for donate button
function approveButtons(){
    document.querySelectorAll(".donate-button").forEach((button) => {
        button.addEventListener("click", function () {
            const postId = this.getAttribute("data-post-id");
            displayTeachConfirmation(postId);
        });
    });
}



// Function to remove post from the array and the page
function removePost(postId) {
    const postIndex = requestOrg.findIndex((post) => post.id === postId);
    if (postIndex !== -1) {
        requestOrg.splice(postIndex, 1); // Remove post from array
        const postElement = document.querySelector(`[data-post-id="${postId}"]`);
        if (postElement) {
            postElement.remove(); // Remove post from page
        }
    }
}
///////////////////////////////////////////
function generateregOrgPosts() {
    // Call the orgPostsGenerate function to generate HTML for organization posts
    const orgPostsHTML = orgregPostsGenerate();
    const postsPartDiv = document.querySelector('.posts-part-div');
    // Append the generated HTML to the container element
    postsPartDiv.innerHTML = orgPostsHTML;
    detailsButtons1();
    
}
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
///////////////////////////////////////////////////////////////////////////////
function handlevolButtonClick() {
    // Replace the content of the lower right part with the desired content
    lowerRightPart.innerHTML = `
    <div class="name-div">Volunteer Requests</div>
    
    <div class="posts-part-div"></div>
`;
//const reqvolButton = document.getElementById('reqvol');
//const regvolButton = document.getElementById('regvol');
// Add event listener to the "Required" button to generate organization posts
//reqvolButton.addEventListener('click', generatereqvolPosts);
//regvolButton.addEventListener('click', generateregvolPosts);
generatereqvolPosts();
}


function generatereqvolPosts() {
    // Call the orgPostsGenerate function to generate HTML for organization posts
    const orgPostsHTML = volreqPostsGenerate();
    const postsPartDiv = document.querySelector('.posts-part-div');
    // Append the generated HTML to the container element
    postsPartDiv.innerHTML = orgPostsHTML;
    detailsButtons2();
    approveButtons2();
    downloadButtons2();
}
function volreqPostsGenerate() {
    let teacherhtml = "";
    allrequests.forEach((post) => {
        teacherhtml +=
            `<div class="post-div" data-post-id="${post.id}" id="teach">
                
                <div class="details-div">
                    <div class="item-subj">${post.firstName} ${post.lastName}</div>
                    <div class="org-posting">${post.type}</div>
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
                            <button class="download-button">Download Data</button>
                            <button class="donate-button" data-post-id="${post.id}">Approve</button>
                        </div>
                    </div>
                </div>
            </div>`;
    });
    return teacherhtml;
}


function detailsButtons2(){
    document.querySelectorAll(".details-button").forEach((button) => {
        button.addEventListener("click", function () {
            const postId = this.closest(".post-div").getAttribute("data-post-id");
            const post = allrequests.find((post) => post.id === postId);
            displayTeacherDetails2(post);
        });
    });
}


function displayTeacherDetails2(post) {
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
    subject.textContent = `First Name: ${post.firstName}`;
    details.appendChild(subject);
    
    const namep = document.createElement("p");
    namep.textContent = `Last Name: ${post.lastName}`;
    details.appendChild(namep);
    const numberOfStudents = document.createElement("p");
    numberOfStudents.textContent = `Type: ${post.type}`;
    details.appendChild(numberOfStudents);

    const gender = document.createElement("p");
    gender.textContent = `Gender: ${post.gender}`;
    details.appendChild(gender);

    const weight = document.createElement("p");
    weight.textContent = `Email: ${post.email}`;
    details.appendChild(weight);
    

    const address = document.createElement("p");
    address.textContent = `Contact Number: ${post.contactNumber}`;
    details.appendChild(address);
    const des2 = document.createElement("p");
    des2.textContent = `Governate: ${post.governate}`;
    details.appendChild(des2);
    const des3 = document.createElement("p");
    des3.textContent = `Area: ${post.area}`;
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
        const post = allrequests.find((post) => post.id === postId);
        displayTeacherDetails2(post);
    });
});






// Function to display teach confirmation modal
function displayTeachConfirmation2(postId) {
    const modal = document.querySelector(".modal");
    const modalContent = modal.querySelector(".modal-content");

    // Update modal content
    modalContent.innerHTML = `
        <h2> Confirmation</h2>
        <p>You have chosen approve. Are you sure?</p>
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
        const post =allrequests.find((post) => post.id === postId);
        // Display details
        donorsAccounts.push(post);
        removePost(postId); // Remove post
    });

    // Add event listener for cancel button
    const cancelButton = modalContent.querySelector(".cancel-button");
    cancelButton.addEventListener("click", function () {
        modal.style.display = "none"; // Hide modal on cancel
        
    });
}

// Event listener for donate button
function approveButtons2(){
    document.querySelectorAll(".donate-button").forEach((button) => {
        button.addEventListener("click", function () {
            const postId = this.getAttribute("data-post-id");
            displayTeachConfirmation2(postId);
        });
    });
}



// Function to remove post from the array and the page
function removePost2(postId) {
    const postIndex = requestOrg.findIndex((post) => post.id === postId);
    if (postIndex !== -1) {
        allrequests.splice(postIndex, 1); // Remove post from array
        const postElement = document.querySelector(`[data-post-id="${postId}"]`);
        if (postElement) {
            postElement.remove(); // Remove post from page
        }
    }
}
function downloadButtons2(){
    document.querySelectorAll(".download-button").forEach((button) => {
        button.addEventListener("click", function () {
            const postId = this.getAttribute("data-post-id");
            const modal = document.querySelector(".modal");
            const modalContent = modal.querySelector(".modal-content");
        
            // Update modal content
            modalContent.innerHTML = `
                <h2>Downloaded Data</h2>
                <p>You have successfully downloaded the data</p>
                
                    <button class="cancel-button">Cancel</button>
                </div>
            `;
        
            // Show the modal
            modal.style.display = "block";
        
            
            // Add event listener for cancel button
            const cancelButton = modalContent.querySelector(".cancel-button");
            cancelButton.addEventListener("click", function () {
                modal.style.display = "none"; // Hide modal on cancel
                
            });
        });
    });
}
///////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////
function handleaccButtonClick() {
    // Replace the content of the lower right part with the desired content
    lowerRightPart.innerHTML = `
    
    <div class="name-div">Manage Accounts</div>
    
    <div class="posts-part-div"></div>
`;
//const reqvolButton = document.getElementById('reqvol');
//const regvolButton = document.getElementById('regvol');
// Add event listener to the "Required" button to generate organization posts
//reqvolButton.addEventListener('click', generatereqvolPosts);
//regvolButton.addEventListener('click', generateregvolPosts);
generateaccPosts();
    
}
function generateaccPosts() {
    // Call the orgPostsGenerate function to generate HTML for organization posts
    const orgPostsHTML = accPostsGenerate();
    const postsPartDiv = document.querySelector('.posts-part-div');
    // Append the generated HTML to the container element
    postsPartDiv.innerHTML = orgPostsHTML;
    detailsButtons3();
    approveButtons3();
    detailsButtons4();
    approveButtons4();
   
}
function accPostsGenerate() {
    let teacherhtml = "";
    donorsAccounts.forEach((post) => {
        teacherhtml +=
            `<div class="post-div" data-post-id="${post.id}" id="teach">
                
                <div class="details-div">
                    <div class="item-subj">${post.firstName} ${post.lastName}</div>
                    <div class="org-posting">Donor</div>
                    <div class="details-div">
                        <div class="buttons-div">
                            <button class="donor-details-button">View Details</button>
                            <div class="modal">
                                <div class="modal-content">
                                    <span class="close-button">×</span>
                                    <h2>Details</h2>
                                    <div class="productDetails"></div>
                                </div>
                            </div>
                           
                            <button class="donor-donate-button" data-post-id="${post.id}">Delete</button>
                        </div>
                    </div>
                </div>
            </div>`;
    });
    organizationAccounts.forEach((post) => {
        teacherhtml +=
            `<div class="post-div" data-post-id="${post.id}" id="teach">
                
                <div class="details-div">
                    <div class="item-subj">${post.organizationName}</div>
                    <div class="org-posting">Organization</div>
                    <div class="details-div">
                        <div class="buttons-div">
                            <button class="org-details-button">View Details</button>
                            <div class="modal">
                                <div class="modal-content">
                                    <span class="close-button">×</span>
                                    <h2>Details</h2>
                                    <div class="productDetails"></div>
                                </div>
                            </div>
                           
                            <button class="org-donate-button" data-post-id="${post.id}">Delete</button>
                        </div>
                    </div>
                </div>
            </div>`;
    });
    return teacherhtml;
}


function detailsButtons3(){
    document.querySelectorAll(".donor-details-button").forEach((button) => {
        button.addEventListener("click", function () {
            const postId = this.closest(".post-div").getAttribute("data-post-id");
            const post = donorsAccounts.find((post) => post.id === postId);
            displayTeacherDetails3(post);
        });
    });
}
function detailsButtons4(){
    document.querySelectorAll(".org-details-button").forEach((button) => {
        button.addEventListener("click", function () {
            const postId = this.closest(".post-div").getAttribute("data-post-id");
            const post = organizationAccounts.find((post) => post.id === postId);
            displayTeacherDetails4(post);
        });
    });
}


function displayTeacherDetails3(post) {
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
    subject.textContent = `First Name: ${post.firstName}`;
    details.appendChild(subject);
    
    const namep = document.createElement("p");
    namep.textContent = `Last Name: ${post.lastName}`;
    details.appendChild(namep);
    const numberOfStudents = document.createElement("p");
    numberOfStudents.textContent = `Type: ${post.type}`;
    details.appendChild(numberOfStudents);

    const gender = document.createElement("p");
    gender.textContent = `Gender: ${post.gender}`;
    details.appendChild(gender);

    const weight = document.createElement("p");
    weight.textContent = `Email: ${post.email}`;
    details.appendChild(weight);
    

    const address = document.createElement("p");
    address.textContent = `Contact Number: ${post.contactNumber}`;
    details.appendChild(address);
    const des2 = document.createElement("p");
    des2.textContent = `Governate: ${post.governate}`;
    details.appendChild(des2);
    const des3 = document.createElement("p");
    des3.textContent = `Area: ${post.area}`;
    details.appendChild(des3);
   
    // Append details to productDetails
    productDetails.appendChild(details);

    // Display the modal
    modal.style.display = "block";
}

function displayTeacherDetails4(post) {
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
document.querySelectorAll(".donor-details-button").forEach((button) => {
    button.addEventListener("click", function () {
        const postId = this.closest(".post-div").getAttribute("data-post-id");
        const post = donorsAccounts.find((post) => post.id === postId);
        displayTeacherDetails3(post);
    });
});

document.querySelectorAll(".org-details-button").forEach((button) => {
    button.addEventListener("click", function () {
        const postId = this.closest(".post-div").getAttribute("data-post-id");
        const post = organizationAccounts.find((post) => post.id === postId);
        displayTeacherDetails4(post);
    });
});





// Function to display teach confirmation modal
function displayTeachConfirmation3(postId) {
    const modal = document.querySelector(".modal");
    const modalContent = modal.querySelector(".modal-content");

    // Update modal content
    modalContent.innerHTML = `
        <h2> Confirmation</h2>
        <p>You have chosen to remove account. Are you sure?</p>
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
        const post =donorsAccounts.find((post) => post.id === postId);
        // Display details
        
        removePost3(postId); // Remove post
    });

    // Add event listener for cancel button
    const cancelButton = modalContent.querySelector(".cancel-button");
    cancelButton.addEventListener("click", function () {
        modal.style.display = "none"; // Hide modal on cancel
        
    });
}
function displayTeachConfirmation4(postId) {
    const modal = document.querySelector(".modal");
    const modalContent = modal.querySelector(".modal-content");

    // Update modal content
    modalContent.innerHTML = `
        <h2> Confirmation</h2>
        <p>You have chosen to remove account. Are you sure?</p>
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
        const post =organizationAccounts.find((post) => post.id === postId);
        // Display details
        
        removePost4(postId); // Remove post
    });

    // Add event listener for cancel button
    const cancelButton = modalContent.querySelector(".cancel-button");
    cancelButton.addEventListener("click", function () {
        modal.style.display = "none"; // Hide modal on cancel
        
    });
}
// Event listener for donate button
function approveButtons3(){
    document.querySelectorAll(".donor-donate-button").forEach((button) => {
        button.addEventListener("click", function () {
            const postId = this.getAttribute("data-post-id");
            displayTeachConfirmation3(postId);
        });
    });
}

function approveButtons4(){
    document.querySelectorAll(".org-donate-button").forEach((button) => {
        button.addEventListener("click", function () {
            const postId = this.getAttribute("data-post-id");
            displayTeachConfirmation4(postId);
        });
    });
}


// Function to remove post from the array and the page
function removePost3(postId) {
    const postIndex = requestOrg.findIndex((post) => post.id === postId);
    if (postIndex !== -1) {
        donorsAccounts.splice(postIndex, 1); // Remove post from array
        const postElement = document.querySelector(`[data-post-id="${postId}"]`);
        if (postElement) {
            postElement.remove(); // Remove post from page
        }
    }
}
function removePost4(postId) {
    const postIndex = requestOrg.findIndex((post) => post.id === postId);
    if (postIndex !== -1) {
        organizationAccounts.splice(postIndex, 1); // Remove post from array
        const postElement = document.querySelector(`[data-post-id="${postId}"]`);
        if (postElement) {
            postElement.remove(); // Remove post from page
        }
    }
}
///////////////////////////////////////////////////////////////////////////////////
function handlesettingsButtonClick() {
    // Replace the content of the lower right part with the desired content
    lowerRightPart.innerHTML = `
        <div class="name-div">Change Password</div>
        <div class="change-password-form">
            <label for="current-password">Current Password:</label>
            <input type="password" id="current-password" required><br>
            <label for="new-password">New Password:</label>
            <input type="password" id="new-password" required><br>
            <label for="confirm-new-password">Confirm New Password:</label>
            <input type="password" id="confirm-new-password" required><br>
            <button class="change-btn" id="change">Change Password</button>
            <div class="password-change-message" style="display: none;"></div>
        </div>
    `;
    document.getElementById('change').addEventListener('click', changePassword);
    // Remove the event listener registration for change-password-btn
}

function changePassword() {
    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmNewPassword = document.getElementById('confirm-new-password').value;

    // Validate passwords
    if (newPassword !== confirmNewPassword) {
        displayPasswordChangeMessage("New passwords do not match.");
        return;
    }

    if (newPassword.length < 6) {
        displayPasswordChangeMessage("New password must be at least 6 characters.");
        return;
    }

    if (currentPassword !== currentUser.password) {
        displayPasswordChangeMessage("Incorrect current password.");
        return;
    }

    // Update current user password
    currentUser.password = newPassword;
    displayPasswordChangeMessage("Password changed successfully.");
}

// Function to display password change message
function displayPasswordChangeMessage(message) {
    const messageDiv = document.querySelector('.password-change-message');
    messageDiv.textContent = message;
    messageDiv.style.display = 'block';
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 3000);
}