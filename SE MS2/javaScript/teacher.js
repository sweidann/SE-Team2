console.log('Script loaded');
import {requestTeacher, currentDonor} from "../data/accounts.js"
document.getElementById('fileInput').addEventListener('change', function() {
    var fileLabel = document.querySelector('.file-label'); // Get the label element associated with the file input
    var fileName = this.value.split('\\').pop(); // Get the filename without path
  
    if (fileName) {
      fileLabel.innerHTML = '<img src="../media/checkmark.png" alt="Checkmark icon" class="checkmark-icon" style="width: 20px; height: 20px;">' + fileName;
    } else {
      fileLabel.innerHTML = '<img src="../media/upload.png" alt="Upload icon" class="upload-icon">Choose File';
    }
  });

  function validateForm() {
    const firstname = document.getElementById('firstName').value.trim();
    const lastname = document.getElementById('lastName').value.trim();
    const numberClasses = document.getElementById('numberClasses').value.trim();
    const numberStudents = document.getElementById('numberStudents').value.trim();
    const fileInput = document.getElementById('fileInput').value.trim();
    if ( !numberClasses || !numberStudents) {
      alert('Enter a Number, if none then enter 0');
      return false; 
    }
    if (!firstname || !lastname  || !fileInput) {
      alert('All fields are required');
      return false; 
    }
      
    return true; 
  }
  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
  
    if (validateForm()) {
      // Save data to array
      var fileLabel = document.querySelector('.file-label');
      const teacher = {
        firstName: document.getElementById('firstName').value.trim(),
        lastName: document.getElementById('lastName').value.trim(),
        numberClasses: document.getElementById('numberClasses').value.trim(),
        numberStudents: document.getElementById('numberStudents').value.trim(),
        fileInput: document.getElementById('fileInput').value.trim(),
      };
  
      
      requestTeacher.push(teacher);
      alert("Request to be a volunteer has been sent, wait for confirmation email");
      console.log(requestTeacher.length);
      // Clear form fields
      document.getElementById('myForm').reset();
      document.getElementById('error-message').textContent = ''; 
      fileLabel.innerHTML = '<img src="../media/upload.png" alt="Upload icon" class="upload-icon">Choose File';// Clear error message
    } else {
      
    }
  });
  document.querySelector('.already-button').addEventListener('click', function() {
    // Get the first name submitted in the form
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();

    // Search the donorsAccount array for the submitted first name
    const foundVolunteer = currentDonor.type=="Volunteer";

    // If the first name is found in the donorsAccount array, redirect to another page
    if (foundVolunteer) {
        window.location.href = 'teacherPosts.html';
    } else {
        // If the first name is not found, display an alert or handle the case accordingly
        alert('You are not registered as a volunteer.');
    }
});