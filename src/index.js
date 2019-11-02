var $videoWrapper;
var $videoPoster;
var $closeBtn;

console.log("TODO: JS not loaded for missing resources (CodeSandbox Issue)...");

document.addEventListener("DOMContentLoaded", DOMReadyHandler);

function DOMReadyHandler() {
	$videoWrapper = document.querySelector(".video-wrapper");
	$videoPoster = document.querySelector(".video-poster");
	$closeBtn = document.querySelector(".close-btn");

	$videoPoster.addEventListener("click", showVideoModal);
	$closeBtn.addEventListener("click", closeVideoModal);
}

function showVideoModal() {
	debugger;
	$videoWrapper.classList.add("visible");
}

function closeVideoModal() {
	debugger;
	$videoWrapper.classList.remove("visible");
}
