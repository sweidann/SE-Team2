document
  .getElementById("fileInput")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    const fileDisplayArea = document.getElementById("fileDisplayArea");

    if (!file) {
      fileDisplayArea.innerHTML = ""; // Clear previous content
      return;
    }

    // Create a URL for the file
    const fileURL = URL.createObjectURL(file);

    // Clear any existing content
    fileDisplayArea.innerHTML = "";

    // Create a link to open the file
    const link = document.createElement("a");
    link.href = fileURL;
    link.textContent = file.name;
    link.target = "_blank"; // Optional: Open in a new tab/window
    fileDisplayArea.appendChild(link);
  });
