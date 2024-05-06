document.addEventListener("DOMContentLoaded", function() {
   
    const buttonsRows = document.querySelectorAll(".button-row");
    const postButton = document.querySelector(".post-button");
    const postNow = document.getElementById("postnow");
    const xbutt = document.getElementById("closepop");
    const notifications = document.querySelectorAll(".notification");
    const volunteers = document.querySelectorAll(".volunteer");

    buttonsRows.forEach(buttonRow => {
        buttonRow.addEventListener("click", function() {
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

    postButton.addEventListener("click",function(){
        document.getElementById("postpopup").style.display = "block";
    });

    postNow.addEventListener("click",function(){
        // add post to posts
        document.getElementById("postpopup").style.display = "none";
    });

    xbutt.addEventListener("click",function(){
        document.getElementById("postpopup").style.display = "none";
    });

    notifications.forEach(notification => {
        viewButton = notification.querySelector(".notification button");
        viewButton.addEventListener("click",function(){
            //show more details regarding notification
        });
        xbutton = notification.querySelector(".notification img");
        xbutton.addEventListener("click",function(){
            notification.style.display = "none";
        });
    });

    volunteers.forEach(volunteer => {
        volunteer.addEventListener("click",function(){
            //show info in pop up same location as notifications
        });
    });

    //org when clicked on
});
