
function pickup(){
    let timehtml = `<div class="title-fulfilled">Pickup Time</div>`;
    timehtml += `
    <div class = "date-div">
    <form class = "calendar-form">
    <label class="choose-date">Choose Date </label>
      <input
        class="date-selector"
        type="datetime-local"
        required
        placeholder="Select DateTime" 
      />
      <label class="choose-date">Choose Transportation</label>
      <select name="area" id="area-dropdown">
      <option value="" disabled selected>--Choose--</option>
      <option value="truck">Truck</option>
      <option value="car">Car</option>
      <option value="motorcycle">Motorcycle</option>
    </select>
      <button class ="submit-time">Submit</button>
    </form>
    
    </div>
    
     `;
    
     
    
    document.getElementById("postsarea").innerHTML = timehtml;
    loadFlat();
    assignSubmitTime();
    
    }
    
    pickup();
    
    
    function assignSubmitTime() {
        document
          .querySelector(".submit-time")
          .addEventListener("click", function () {
            submitTime();
          });
      }
    
     function submitTime() {
        document.getElementById(
          "postsarea"
        ).innerHTML += `<h2>Pickup Time set</h2>`;
      }
      function loadFlat() {
        const datetimeInput = document.querySelector(".date-selector");
    
        // Initialize Flatpickr
        flatpickr(datetimeInput, {
          enableTime: true,
          dateFormat: "Y-m-dTH:i",
          time_24hr: true, // If you want 24-hour format
          onChange: function (selectedDates, dateStr, instance) {
            // When the value changes, log it to the console
            console.log("Selected date and time:", dateStr);
    
            // You can store the value in a variable or send it to a server for further processing
            // For example:
            selectedDateTime = dateStr;
            // You can now use selectedDateTime variable to access the selected value
          },
        });
      }
      
      var modalButtons = document.querySelectorAll(".modal-button");
    
    // Add click event listeners to modal buttons
    modalButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var modalId = button.getAttribute("data-modal-id");
            var modal = document.getElementById(modalId);
            modal.style.display = "block";
        });
    });
    
    // Get all close buttons
    var closeButtons = document.querySelectorAll(".close");
    
    // Add click event listeners to close buttons
    closeButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var modal = button.parentElement.parentElement;
            modal.style.display = "none";
        });
    });
    
    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target.classList.contains("modal")) {
            event.target.style.display = "none";
        }
    };