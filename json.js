function openMenuSection(){
    document.getElementById("menuSection").style.display = "flex"
}

function closeMenuSection(){
    document.getElementById("menuSection").style.display = "none"
}
// Overlayen for New Kategorien
function openNew() {
    document.getElementById("NewPageOverlay").style.display = "flex";
}
function closeNew() {
    document.getElementById("NewPageOverlay").style.display = "none";
}
function openPopular() {
    document.getElementById("PopularPageOverlay").style.display = "flex";
}
function closePopular() {
    document.getElementById("PopularPageOverlay").style.display = "none";
}
function openOverlay(id) {
    // Close all overlays
    var overlays = document.getElementsByClassName('overlay');
    for (var i = 0; i < overlays.length; i++) {
      overlays[i].style.display = 'none';
    }
    
    // Open the selected overlay
    document.getElementById(id).style.display = 'flex';
  }
  
  function closeOverlay(id) {
    document.getElementById(id).style.display = 'none';
  }
  function closeVideo(id) {
    document.getElementById(id).style.display = "none";
  }
// Funksjon for å bytte video

function SoloLevelingChange(videoSrc) {
    let videoPlayer = document.getElementById("SoloLevelingPlayer");
    videoPlayer.src = videoSrc;
    videoPlayer.play(); // Starter automatisk
}
function OnePieceChange(videoSrc) {
    let videoPlayer = document.getElementById("OnePiecePlayer");
    videoPlayer.src = videoSrc;
    videoPlayer.play(); // Starter automatisk
}
function SuzumeChange(videoSrc) {
    let videoPlayer = document.getElementById("SuzumePlayer");
    videoPlayer.src = videoSrc;
    videoPlayer.play(); // Starter automatisk
}
function showOverlay(id) {
    document.getElementById(id).style.display = 'flex';
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
//Transparent scrolling for overlay headeren
// Funksjon for knappen Take me Anywhere
const randomId = ['OnePiece', 'SoloLeveling', 'Suzume'];

function takeMeAnywhere() {
    let randomFunction = Math.floor(Math.random() * randomId.length)
    const id = randomId[randomFunction];

    openOverlay(id)
}


//SearchBar for Overlayen New
const suggestions = [
    { name: "One Piece", image:"Bilder/OnePiece.jpg", action: function() { openOverlay('OnePiece'); } },
    { name: "Solo Leveling", image:"Bilder/soloLeveling.jpg", action: function() { openOverlay('SoloLeveling'); } },
    { name: "Suzume", image:"Bilder/Suzume.jpg", action:  function() { openOverlay('Suzume'); } }
];

// Function to show suggestions


//Suggestions for SearchBar i Suzume playeren
function showResults(inputId, suggestionsBoxId) {
    let input = document.getElementById(inputId).value.toLowerCase();
    let suggestionsBox = document.getElementById(suggestionsBoxId);

    // Clear previous suggestions
    suggestionsBox.innerHTML = "";

    // If input is empty, hide the suggestion box
    if (input === "") {
        suggestionsBox.style.display = "none";
        return;
    }

    // Filter suggestions based on input
    let filteredSuggestions = suggestions.filter(item => item.name.toLowerCase().includes(input));

    if (filteredSuggestions.length === 0) {
        suggestionsBox.style.display = "none";
        return;
    }

    // Show filtered suggestions with images and functions
    filteredSuggestions.forEach(item => {
        let div = document.createElement("div");
        div.classList.add("suggestion-item");

        // Create an image element
        let img = document.createElement("img");
        img.src = item.image; // Set the image source from the item data
        img.alt = item.name;  // Set alt text for the image
        img.classList.add("suggestion-img");

        // Create a text node for the name
        let text = document.createTextNode(item.name);

        // Append the image and text to the div
        div.appendChild(img);
        div.appendChild(text);

        // Add onclick function to the div
        div.onclick = item.action; // Link the function to the onclick event

        // Append the div to the suggestions box
        suggestionsBox.appendChild(div);
    });

    // Display suggestions only if there are matches
    suggestionsBox.style.display = "block";
}

// Hide suggestions when clicking outside
document.addEventListener("click", function(event) {
    let searchContainers = document.querySelectorAll(".search-container");
    searchContainers.forEach(container => {
        if (!event.target.closest(".search-container")) {
            let suggestionsBox = container.querySelector(".suggestions");
            if (suggestionsBox) {
                suggestionsBox.style.display = "none";
            }
        }
    });
});

