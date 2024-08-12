const takeSelfieButton = document.querySelector('.left-side button');
const heroFaceElement = document.querySelector('.HeroFace');
const tickGif = document.querySelector('.tickGif');
const detection = document.querySelector('.detection');
const detectionGreen = document.querySelector('.DetectionGreen');
const notification = document.querySelector('.notification');

takeSelfieButton.addEventListener('click', function() {
    if (takeSelfieButton.textContent === 'Take Selfie') {
        // this if statemant is taking selfie 
        heroFaceElement.classList.add('animate-border');
        tickGif.style.display = 'block';
        detection.style.display = 'none';
        detectionGreen.style.display = 'block';
        takeSelfieButton.style.backgroundColor ="#fff"
        takeSelfieButton.style.border = "2px solid #4e9459";
        takeSelfieButton.style.color ="#4e9459"

        setTimeout(() => {
            detectionGreen.style.opacity = '1';
        }, 10);

        takeSelfieButton.textContent = 'Take Another';
        notification.style.display = 'block';
          setTimeout(() => {
              notification.style.display = 'none';
          }, 1000);
    } else {
        heroFaceElement.classList.remove('animate-border');
        tickGif.style.display = 'none';
        detection.style.display = 'block';
        detectionGreen.style.display = 'none';
        detectionGreen.style.opacity = '0';
        takeSelfieButton.style.backgroundColor ="#4e9459"
        takeSelfieButton.style.color ="#ffff"


        takeSelfieButton.textContent = 'Take Selfie';
    }
});






function handleResponsiveLayout() {
  const leftSide = document.querySelector('.left-side');
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
    }, 3000);
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


  
