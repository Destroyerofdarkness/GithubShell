function openOverlay() {
    const overlay = document.getElementById('newPage');
    overlay.style.display = 'block';
}

function closeOverlay() {
    const overlay = document.getElementById('newPage');
    overlay.style.display = 'none';
}

// Optional: Close overlay when clicking outside of it
window.onclick = function(event) {
    const overlay = document.getElementById('newPage');
    if (event.target === overlay) {
        closeOverlay();
    }
}
