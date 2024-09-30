const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const captionText = document.getElementById('caption');
const closeBtn = document.getElementById('close');

document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

closeBtn.addEventListener('click', function() {
    modal.style.display = "none";
});

// Close modal when clicking outside the image
modal.addEventListener('click', function(event) {
    if (event.target !== modalImg) {
        modal.style.display = "none";
    }
});
