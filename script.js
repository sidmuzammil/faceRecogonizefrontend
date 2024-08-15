const takeSelfieButton = document.querySelector('.left-side button');
const heroFaceElement = document.querySelector('.HeroFace img');
const tickGif = document.querySelector('.tickGif');
const detection = document.querySelector('.detection');
const detectionGreen = document.querySelector('.DetectionGreen');
const notification = document.querySelector('.notification');

takeSelfieButton.addEventListener('click', function() {
    if (takeSelfieButton.textContent === 'Take Selfie') {
        heroFaceElement.classList.add('animate-border');
        heroFaceElement.classList.add('border-color-change');
        detection.style.display = 'none';
        detectionGreen.style.display = 'block';
        takeSelfieButton.style.backgroundColor = "#fff";
        takeSelfieButton.style.border = "2px solid #4e9459";
        takeSelfieButton.style.color = "#4e9459";

        setTimeout(() => {
            detectionGreen.style.opacity = '1';
        }, 10);
        setTimeout(() => {
            tickGif.style.opacity = '1';
        }, 2000); //this is the tick mark dely

        takeSelfieButton.textContent = 'Take Another';
        notification.style.display = 'block';
        heroFaceElement.style.padding="0.3em"
        setTimeout(() => {
            notification.style.display = 'none';
        }, 1000);
    } else {
        heroFaceElement.classList.remove('animate-border');
        heroFaceElement.classList.remove('border-color-change');
        tickGif.style.opacity = '0'; 
        detection.style.display = 'block';
        detectionGreen.style.display = 'none';
        detectionGreen.style.opacity = '0';
        takeSelfieButton.style.backgroundColor = "#4e9459";
        takeSelfieButton.style.color = "#fff";
       heroFaceElement.style.padding="0em"
        takeSelfieButton.textContent = 'Take Selfie';
    }
});

function handleResponsiveLayout() {
    const leftSide = document.querySelector('.left-side');
    const rightSide = document.querySelector('.Right-side');
    const windowWidth = window.innerWidth;

    if (windowWidth <= 1025) {
        rightSide.style.display = 'flex';
        leftSide.style.display = 'none';
        
        setTimeout(() => {
            rightSide.style.display = 'none';
            leftSide.style.display = 'flex';
            leftSide.style.opacity = '1';
            leftSide.style.transition = 'opacity 0.5s ease-in-out';
        }, 6000);
    } else {
        rightSide.style.display = 'flex';
        leftSide.style.display = 'flex';
        leftSide.style.opacity = '1';
        rightSide.style.opacity = '1';
    }
}

window.addEventListener('load', handleResponsiveLayout);
window.addEventListener('resize', handleResponsiveLayout);
