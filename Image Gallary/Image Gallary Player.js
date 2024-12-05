document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'Gojo1.jpg',
        'Gojo2.png',
        'Gojo3.jpg',
        'Gojo4.jpg',
        'Gojo5.jpg',
        'Gojo6.jpg',
        'Gojo7.png',
        'Gojo8.jpg',
        'Gojo9.jpg',
        'Gojo10.png'
        // Add more image paths as needed
    ];

    let currentIndex = 0;
    const galleryImage = document.getElementById('galleryImage');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    const transitions = ['fade', 'slide', 'zoom'];

    function getTransitionClass() {
        const index = Math.floor(currentIndex / 3) % transitions.length;
        return transitions[index];
    }

    function updateImage() {
        const currentTransition = getTransitionClass();

        galleryImage.className = ''; // Remove all transition classes
        galleryImage.classList.add(currentTransition); // Add the current transition class

        galleryImage.classList.remove('show'); // Hide the image before changing it
        setTimeout(() => {
            galleryImage.src = images[currentIndex];
            galleryImage.classList.add('show'); // Show the image with the new transition
        }, 500); // Adjust delay to match the CSS transition duration
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        updateImage();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updateImage();
    });

    updateImage(); // Initialize with the first image
});
