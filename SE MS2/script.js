let selectedFiles = [];

function handleUploadButtonClick() {
    
    const fileInput = document.getElementById('fileInput');
    
  
    fileInput.click();
    
    
    function handleFileInputChange() {
        
        Array.from(fileInput.files).forEach(file => {
            
            if (!selectedFiles.some(selectedFile => selectedFile.name === file.name)) {
            
                selectedFiles.push(file);
                alert("FIle Uploaded")
            }
        });
        
        console.log('Selected Files:', selectedFiles);
        
        
        fileInput.removeEventListener('change', handleFileInputChange);
    }
    
   
    fileInput.addEventListener('change', handleFileInputChange);
}

function handleSubmitButtonClick() {
  const statusMessage = document.getElementById('statusMessage');
  
  if (selectedFiles.length == 5) {
      statusMessage.textContent = 'Success: All files uploaded.';
  } else {
    f
  }
} 