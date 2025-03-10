


// Funksjon for å åpne video-overlay

// Overlayen for New Kategorien
function openNew() {
    document.getElementById("NewPageOverlay").style.display = "flex";
}
function closeNew() {
    document.getElementById("NewPageOverlay").style.display = "none";
}
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
const randomFunctions = [openVideo1, openVideo2, openVideo4];

function takeMeAnywhere() {
    let randomFunction = Math.floor(Math.random() * randomFunctions.length)
    randomFunctions[randomFunction]();
}


//SearchBar for Overlayen New
const suggestions = [
    { name: "One Piece", image:"Bilder/OnePiece.jpg", action: function() { openVideo2(); } },
    { name: "Solo Leveling", image:"Bilder/soloLeveling.jpg", action: function() { openVideo1(); } },
    { name: "Suzume", image:"Bilder/Suzume.jpg", action:  function() { openVideo4(); } }
];

// Function to show suggestions
function showSuggestions() {
    let input = document.getElementById("searchInputNew").value.toLowerCase();
    let suggestionsBox = document.getElementById("suggestionsBoxNew");

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

    // Show filtered suggestions with functions
    filteredSuggestions.forEach(item => {
        let div = document.createElement("div");
        div.textContent = item.name;
        div.onclick = item.action;  // Link the function to the onclick event
        suggestionsBox.appendChild(div);
    });

    // Display suggestions only if there are matches
    suggestionsBox.style.display = "block";
}

// Hide suggestions when clicking outside
document.addEventListener("click", function(event) {
    if (!event.target.closest("search-container")) {
        document.getElementById("suggestionsBoxNew").style.display = "none";
    }
});


//SearchBar for Headeren i main siden
function showSuggestions2() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let suggestionsBox = document.getElementById("suggestionsBox");

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

    // Show filtered suggestions with functions
    filteredSuggestions.forEach(item => {
        let div = document.createElement("div");
        div.textContent = item.name;
        div.onclick = item.action;  // Link the function to the onclick event
        suggestionsBox.appendChild(div);
    });

    // Display suggestions only if there are matches
    suggestionsBox.style.display = "block";
}

// Hide suggestions when clicking outside
document.addEventListener("click", function(event) {
    if (!event.target.closest(".search-container")) {
        document.getElementById("suggestionsBox").style.display = "none";
    }
});

//Suggestions for SearchBar i Suzume playeren
function showSuggestions3() {
    let input = document.getElementById("searchInputVideo").value.toLowerCase();
    let suggestionsBox = document.getElementById("suggestionsBoxVideo");

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
    if (!event.target.closest(".search-container")) {
        document.getElementById("suggestionsBoxVideo").style.display = "none";
    }
});