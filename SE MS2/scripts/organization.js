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

    postNow.addEventListener("click", function () {
        // add post to posts
        document.getElementById("postpopup").style.display = "none";
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

        var clothesElements = document.querySelectorAll(".post-window #name, .post-window #gender, .post-window #season, .post-window #Clothesage, .post-window #type, .post-window #material, .post-window #amount");
        var toysElements = document.querySelectorAll(".post-window #Toytype, .post-window #gender, .post-window #Toysage, .post-window #category, .post-window #amount");
        var foodElements = document.querySelectorAll(".post-window #name, .post-window #Toytype, .post-window #amount");
        var medicalElements = document.querySelectorAll(".post-window #Medicaluse, .post-window #Toytype, .post-window #amount");
        var stationaryElements = document.querySelectorAll(".post-window #school, .post-window #Toytype, .post-window #amount");
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
                statOrbook.addEventListener("change", function(){
                    if(statOrbook.value=="Stationary"){
                        stationaryElements.forEach(function (element) {
                            element.style.display = "inline";
                        });
                    }
                    else{
                        stationaryElements.forEach(function (element) {
                            element.style.display = "none";
                        });
                        statOrbook.style.display = "inline";
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
                bloodElements.forEach(function (element) {
                    element.style.display = "inline";
                });
                fileUpload.style.display = "block";
                break;
            default:
                break;
        }
    });

    //org when clicked on
});
