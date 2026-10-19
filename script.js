const aboutButton = document.getElementById("about-button");
const aboutPanel = document.getElementById("about-panel");
const closeButton = document.getElementById("close-about");

function openAbout() {
    aboutPanel.showModal();
}

function closeAbout() {
    aboutPanel.close();
}

aboutButton.addEventListener("click", openAbout);
closeButton.addEventListener("click", closeAbout);