document.addEventListener("DOMContentLoaded", function() {
   
    const buttonsRows = document.querySelectorAll(".button-row");
    const postButton = document.querySelector(".post-button");
    const postNow = document.getElementById("postnow");
    const popup = document.getElementById("postpopup");
    const xbutt = document.getElementById("closepop");

    buttonsRows.forEach(buttonRow => {
        buttonRow.addEventListener("click", function() {
            const buttonText = buttonRow.querySelector("button").textContent.trim().toLowerCase();

            switch (buttonText) {
                case "home":
                    window.location.href = "hompage.html";
                    break;
                default:
                    console.log("Button action not defined");
            }
        });
    });

    postButton.addEventListener("click",function(){
        popup.style.display = "block";
    });

    postNow.addEventListener("click",function(){
        popup.style.display = "none";
    });

    xbutt.addEventListener("click",function(){
        popup.style.display = "none";
    });


});
