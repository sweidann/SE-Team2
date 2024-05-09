// import { clothesPosts, toysPosts, foodPosts, medicalPosts, stationaryPosts, bookPosts, bloodPosts } from '../data/posts.js';


document.addEventListener("DOMContentLoaded", function () {

    const buttonsRows = document.querySelectorAll(".button-row");
    const postButton = document.querySelector(".post-button");
    const postNow = document.getElementById("postnow");
    const xbutt = document.getElementById("closepop");
    const notifications = document.querySelectorAll(".notification");
    const volunteers = document.querySelectorAll(".volunteer");

    buttonsRows.forEach(buttonRow => {
        buttonRow.addEventListener("click", function () {
            const buttonText = buttonRow.querySelector("button").textContent.trim().toLowerCase();

            switch (buttonText) {
                case "home":
                    document.getElementById("postsarea").style.display = "block";
                    break;
                case "documents":
                    document.getElementById("postsarea").style.display = "none";
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

    notifications.forEach(notification => {
        viewButton = notification.querySelector(".notification button");
        viewButton.addEventListener("click", function () {
            //show more details regarding notification
        });
        xbutton = notification.querySelector(".notification img");
        xbutton.addEventListener("click", function () {
            notification.style.display = "none";
        });
    });

    volunteers.forEach(volunteer => {
        volunteer.addEventListener("click", function () {
            //show info in pop up same location as notifications
        });
    });

    document.getElementById("dropdown").addEventListener("change", function () {
        var category = this.value;
        selects = document.querySelector(".selects");

        var clothesElements = document.querySelectorAll(".post-window #name, .post-window #gender, .post-window #season, .post-window #Clothesage, .post-window #type, .post-window #material, .post-window #amount, .post-window #color");
        var toysElements = document.querySelectorAll(".post-window #Toytype, .post-window #gender, .post-window #Toysage, .post-window #category, .post-window #amount");
        var foodElements = document.querySelectorAll(".post-window #name, .post-window #Toytype, .post-window #amount");
        var medicalElements = document.querySelectorAll(".post-window #Medicaluse, .post-window #Toytype, .post-window #amount");
        var stationaryElements = document.querySelectorAll(".post-window #school, .post-window #Toytype, .post-window #amount");
        var bookElements = document.querySelectorAll(".post-window #school, .post-window #name, .post-window #summary, .post-window #author, .post-window #language, .post-window #edition, .post-window #amount");
        var bloodElements = document.querySelectorAll(".post-window #bloodtype, .post-window #Patientname, .post-window #RHtype, .post-window #hospitalName, .post-window #hospitalArea, .post-window #hospitalGov, .post-window #hospitalAdd");
        var fileUpload = document.getElementById("imageUploading");
        var statOrbook = document.getElementById("school");

        switch (category) {
            case "Clothes":
                toysElements.forEach(function (element) {
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
                clothesElements.forEach(function (element) {
                    element.style.display = "inline";
                });
                fileUpload.style.display = "block";
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
                    }
                    else {
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
                    image: document.getElementById("imageUpload").value
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
                    image: document.getElementById("imageUpload").value
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
                    image: document.getElementById("imageUpload").value
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
                    image: document.getElementById("imageUpload").value
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
                        image: document.getElementById("imageUpload").value
                    };
                    stationaryPosts.push(content);
                }
                else {
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
                        image: document.getElementById("imageUpload").value
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
                    Amount: document.getElementById("amount").value
                };
                bloodPosts.push(content);
                break;
            default:
                break;
        }

        document.getElementById("postpopup").style.display = "none";
    });


    document.getElementById("logout").addEventListener("click", function () {
        window.location.href = "http://127.0.0.1:5500/SE%20MS2/hompage.html";
    });


    //org when clicked on
});
