function openClose() {
    let navLinks = document.getElementById("header-links");
    navLinks.classList.toggle("open-header-links"); 
}

let toggleButton = document.getElementById("toggle-btn");

toggleButton.addEventListener("click", openClose);
