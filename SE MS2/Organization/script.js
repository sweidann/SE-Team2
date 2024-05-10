let selectedFiles = [];

function handleUploadButtonClick(int) {
  const fileInput = document.getElementById("fileInput" + int);
  console.log(fileInput.files);

  fileInput.click();

  function handleFileInputChange() {
    Array.from(fileInput.files).forEach((file) => {
      if (
        !selectedFiles.some((selectedFile) => selectedFile.name === file.name)
      ) {
        selectedFiles.push(file);

        var div = document.getElementById("button-text" + int);
        div.innerHTML += `<img src="media/file icon.png" class = "file-icon"><p class = "fileName" >${file.name}</p>`;
      }
    });

    console.log("Selected Files:", selectedFiles);

    fileInput.removeEventListener("change", handleFileInputChange);
  }

  fileInput.addEventListener("change", handleFileInputChange);
  var button = document.getElementById("button" + int);
  button.disabled = true;
}

function handleSubmitButtonClick() {
  const statusMessage = document.getElementById("statusMessage");

  if (selectedFiles.length == 5) {
    statusMessage.textContent = "Success: All files uploaded.";
  } else {
    statusMessage.textContent = "Failed: files missing";
  }
}

function checkFiles() {
  const selectedFiles = document.getElementById("fileInput").files;
  const submitButton = document.getElementById("submitButton");

  // Enable the submit button only if exactly 5 files are selected
  if (selectedFiles.length === 5) {
    submitButton.style.backgroundColor = "#00a292"; // Active color
    submitButton.disabled = false; // Enable the button
  } else {
    submitButton.style.backgroundColor = "00cab6"; // Revert to default color
    submitButton.disabled = true; // Keep the button disabled
  }
}

// 00cab6;
// 00a292
