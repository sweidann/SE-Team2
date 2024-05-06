document.addEventListener("DOMContentLoaded", function() {
   
    const buttonsRows = document.querySelectorAll(".button-row");
    const postButton = document.querySelector(".post-button");
    const postNow = document.getElementById("postnow");
    const xbutt = document.getElementById("closepop");

    buttonsRows.forEach(buttonRow => {
        buttonRow.addEventListener("click", function() {
            const buttonText = buttonRow.querySelector("button").textContent.trim().toLowerCase();

            switch (buttonText) {
                case "home":
                    window.location.href = "hompage.html";
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

    //volunteer when clicked on info

    //org when clicked on

});
