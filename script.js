// your code goes here
// Hero Gallery Infinite Scrolling
const gallerySlider = document.querySelector('.gallery-slider');
let scrollValue = 0;

// Clone the first few images to the end for continuous scrolling
const images = document.querySelectorAll('.gallery-slider img');
const numberOfClones = 2; // Number of clones for circular loop
const imageWidth = images[0].clientWidth;
const totalImages = images.length;
// Hero Gallery Infinite Scrolling
const gallerySlider = document.querySelector('.gallery-slider');
let scrollValue = 0;

// Clone the first few images to the end for continuous sliding
const images = document.querySelectorAll('.gallery-slider img');
const numberOfClones = 2; // Number of clones for continuous loop
const imageWidth = images[0].clientWidth;
const totalImages = images.length;

// Clone the first few images and append to the end
for (let i = 0; i < numberOfClones; i++) {
    const clone = images[i].cloneNode(true);
    gallerySlider.appendChild(clone);
}

let galleryWidth = gallerySlider.scrollWidth;
const sliderWidth = gallerySlider.offsetWidth;

// Function to move the gallery smoothly in a sliding animation
function moveGallery() {
    scrollValue -= 1; // Move images to the left by 1px at a time

    // When the first image is out of view, reset scroll position to the start for a smooth loop
    if (Math.abs(scrollValue) >= imageWidth * totalImages) {
        scrollValue = 0; // Reset to the beginning
    }

    gallerySlider.style.transform = `translateX(${scrollValue}px)`;
}

// Set the interval for the smooth sliding effect (every 20ms)
setInterval(moveGallery, 10);



<script>
    document.getElementById('login-form').addEventListener('submit', function (e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            alert(`Welcome, ${username}!`);
            window.location.href = 'index.html'; // Redirect to home or dashboard
        } else {
            alert('Please enter both username and password.');
        }
    });
</script>
