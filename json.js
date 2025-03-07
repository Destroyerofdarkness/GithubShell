// Funksjon for å åpne video-overlay
function openVideo1() {
    document.getElementById("videoOverlay1").style.display = "flex";
    document.getElementById("videoPlayer").play(); // Starter videoen automatisk
}
function openVideo2() {
    document.getElementById("videoOverlay2").style.display = "flex";
    document.getElementById("videoPlayer").play(); // Starter videoen automatisk
}
function openVideo3() {
    document.getElementById("videoOverlay3").style.display = "flex";
    document.getElementById("videoPlayer").play(); // Starter videoen automatisk
}
function openVideo4() {
    document.getElementById("videoOverlay4").style.display = "flex";
    document.getElementById("videoPlayer").play(); // Starter videoen automatisk
}
// Funksjon for å lukke video-overlay
function closeVideo1() {
    document.getElementById("videoOverlay1").style.display = "none";
    document.getElementById("videoPlayer1").pause(); // Stopper videoen når den lukkes
}
function closeVideo2() {
    document.getElementById("videoOverlay2").style.display = "none";
    document.getElementById("videoPlayer2").pause(); // Stopper videoen når den lukkes
}
function closeVideo3() {
    document.getElementById("videoOverlay3").style.display = "none";
    document.getElementById("videoPlayer").pause(); // Stopper videoen når den lukkes
}
function closeVideo4() {
    document.getElementById("videoOverlay4").style.display = "none";
    document.getElementById("videoPlayer").pause(); // Stopper videoen når den lukkes
}
function changeVideo1(videoSrc) {
    let videoPlayer = document.getElementById("videoPlayer1");
    videoPlayer.src = videoSrc;
    videoPlayer.play(); // Starter automatisk
}
function changeVideo2(videoSrc) {
    let videoPlayer = document.getElementById("videoPlayer2");
    videoPlayer.src = videoSrc;
    videoPlayer.play(); // Starter automatisk
}
function changeVideo4(videoSrc) {
    let videoPlayer = document.getElementById("videoPlayer4");
    videoPlayer.src = videoSrc;
    videoPlayer.play(); // Starter automatisk
}
function showOverlay(id) {
    document.getElementById(id).style.display = 'flex';
}
// Overlayen for New Kategorien
function openNew() {
    document.getElementById("videoOverlay5").style.display = "flex";
}
function closeNew() {
    document.getElementById("videoOverlay5").style.display = "none";
}
//Transparent scrolling for headeren
window.addEventListener("scroll", function () {
    let header = document.querySelector("header"); // Selects the header
    if (window.scrollY > 50) { 
        header.classList.add("transparent"); // Add transparency when scrolled
    } else {
        header.classList.remove("transparent"); // Remove when back to top
    }
});

