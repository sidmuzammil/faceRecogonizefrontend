const takeSelfieButton = document.querySelector('.left-sid button');
const heroFaceElement = document.querySelector('.HeroFace');
const tickGif = document.querySelector('.tickGif');
const detection = document.querySelector('.detection');
const detectionGreen = document.querySelector('.DetectionGreen');

takeSelfieButton.addEventListener('click', function() {
    if (takeSelfieButton.textContent === 'Take Selfie') {
        // this if statemant is taking selfie 
        heroFaceElement.classList.add('animate-border');
        tickGif.style.display = 'block';
        detection.style.display = 'none';
        detectionGreen.style.display = 'block';

        setTimeout(() => {
            detectionGreen.style.opacity = '1';
        }, 10);

        takeSelfieButton.textContent = 'Take Another';
    } else {
        heroFaceElement.classList.remove('animate-border');
        tickGif.style.display = 'none';
        detection.style.display = 'block';
        detectionGreen.style.display = 'none';
        detectionGreen.style.opacity = '0';

        takeSelfieButton.textContent = 'Take Selfie';
    }
});




function handleResponsiveLayout() {
  const leftSide = document.querySelector('.left-sid');
  const rightSide = document.querySelector('.Right-side');
  const detectionGreen = document.querySelector('.DetectionGreen');

  if (window.innerWidth <= 1025) {
    // Set initial visibility
    rightSide.style.display = 'flex';
    leftSide.style.display = 'none';
    leftSide.style.opacity = '0'; // Initial opacity

    // Transition after 5 seconds
    setTimeout(() => {
      rightSide.style.display = 'none';
      leftSide.style.display = 'flex';

      // Add opacity transition for left side
      leftSide.style.opacity = '1'; // Set opacity to 1
      leftSide.style.transition = 'opacity 0.5s ease-in-out'; // Smooth transition
    }, 5000);
  } else {
    // Reset to default when screen is larger than 1025px
    rightSide.style.display = 'flex';
    leftSide.style.display = 'flex';
    detectionGreen.style.opacity = '1'; // Ensure opacity is reset
  }
}

// Trigger on page load and window resize
window.addEventListener('load', handleResponsiveLayout);
window.addEventListener('resize', handleResponsiveLayout);


const cameraFeed = document.getElementById('camera-feed');

if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            cameraFeed.srcObject = stream;
        })
        .catch(function(error) {
            console.error("Camera access denied or not available: ", error);
        });
} else {
    console.error("getUserMedia not supported on your browser!");
}


  
