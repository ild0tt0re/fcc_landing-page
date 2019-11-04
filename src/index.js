var $videoWrapper;
var $videoPoster;
var $closeBtn;
var $hamburgerMenu;
var $navBar;

document.addEventListener("DOMContentLoaded", DOMReadyHandler);

function DOMReadyHandler() {
	initModal();
	initHamburgerMenu();
}

function initHamburgerMenu() {
	$hamburgerMenu = document.querySelector(".hamburger-menu");
	$navBar = document.getElementById("nav-bar");
	$hamburgerMenu.addEventListener("click", showHideMobileMenu);
	$navBar.addEventListener('click', closeMobileMenu);
}

function closeMobileMenu(e) {
	if (e.target instanceof HTMLAnchorElement) {
		showHideMobileMenu();
	}
}

function showHideMobileMenu() {
	$navBar.classList.toggle("visible");
}

function initModal() {
	$videoWrapper = document.querySelector(".video-wrapper");
	$videoPoster = document.querySelector(".video-poster");
	$closeBtn = document.querySelector(".close-btn");

	$videoPoster.addEventListener("click", showVideoModal);
	$closeBtn.addEventListener("click", closeVideoModal);
}

function showVideoModal() {
	$videoWrapper.classList.add("visible");
}

function closeVideoModal() {
	$videoWrapper.classList.remove("visible");
}
