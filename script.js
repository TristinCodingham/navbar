const navToggle = document.getElementById("nav-toggle");
const navLinks = document.querySelector('.nav-links');
const topBar = document.querySelector('.top-bar');
const middleBar = document.querySelector('.middle-bar');
const bottomBar = document.querySelector('.bottom-bar');

const toggleLinks = () => {
    navLinks.classList.toggle('show-links');
    topBar.classList.toggle('top-bar-active');
    middleBar.classList.toggle('middle-bar-active');
    bottomBar.classList.toggle('bottom-bar-active');
}

navToggle.onclick = toggleLinks;