const takeSelfieButton = document.querySelector('.left-sid button');
const heroFaceElement = document.querySelector('.HeroFace');

takeSelfieButton.addEventListener('click', function() {
    // Add the animate-border class to trigger the border animation
    heroFaceElement.classList.add('animate-border');

    // Show the tick GIF and hide the original detection image
    document.querySelector('.tickGif').style.display = 'block';
    document.querySelector('.detection').style.display = 'none';
    
    // Show DetectionGreen with a fade-in transition
    const detectionGreen = document.querySelector('.DetectionGreen');
    detectionGreen.style.display = 'block';
    setTimeout(() => {
        detectionGreen.style.opacity = '1';
    }, 10); // Slight delay to ensure the display is set before the transition
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

  
