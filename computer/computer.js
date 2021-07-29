// URL input functionality
function setBrowserFrameSource() {
    var browserFrame = document.getElementById("browser");
    browserFrame.src= "https://" + document.getElementById("txtUrl").value;
}

// Home button functionality
function goHome() {
    var browserFrame = document.getElementById("browser");
    browserFrame.src= "home.html";
}