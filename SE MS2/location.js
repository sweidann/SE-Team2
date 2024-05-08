// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Listener for 'myButton' to process multiple inputs
    const myButton = document.getElementById('myButton');
    myButton.addEventListener('click', function() {
        let inputsArray = [];
        let allFilled = true;

        // Check if all inputs are filled
        for (let i = 1; i <= 6; i++) {
            let input = document.getElementById(`input${i}`);
            if (input.value === "") {
                allFilled = false;
                break; // Stop checking as soon as an empty input is found
            }
        }

        // If all inputs are filled, process them
        if (allFilled) {
            for (let i = 1; i <= 6; i++) {
                let input = document.getElementById(`input${i}`);
                inputsArray.push(input.value);
            }
            console.log(inputsArray); // Output the array to the console
            alert("You have added your address successfully");
        } else {
            alert("Please fill all the inputs.");
        }
    });

    // Listener for 'submitButton' to process numeric input
    const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', function() {
        let numericInput = document.getElementById('numericInput');
        let value = numericInput.value;

        if (value === '') {
            alert('Please enter a number.');
        } else {
            alert('Thank you for entering the number: ' + value);
        }
    });
});
