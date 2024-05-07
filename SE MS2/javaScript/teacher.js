console.log('Script loaded');
document.getElementById('fileInput').addEventListener('change', function() {
    var fileLabel = document.querySelector('.file-label'); // Get the label element associated with the file input
    var fileName = this.value.split('\\').pop(); // Get the filename without path
  
    if (fileName) {
      fileLabel.innerHTML = '<img src="../media/checkmark.png" alt="Checkmark icon" class="checkmark-icon" style="width: 20px; height: 20px;">' + fileName;
    } else {
      fileLabel.innerHTML = '<img src="../media/upload.png" alt="Upload icon" class="upload-icon">Choose File';
    }
  });
