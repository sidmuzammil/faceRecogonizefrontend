const takeSelfieButton = document.querySelector('.left-side button');
const heroFaceElement = document.querySelector('.HeroFace img');
const tickGif = document.querySelector('.tickGif');
const detection = document.querySelector('.detection');
const detectionGreen = document.querySelector('.DetectionGreen');
const notification = document.querySelector('.notification');
const backArrowButton = document.querySelector('.BackArrow');

takeSelfieButton.addEventListener('click', function() {
    if (takeSelfieButton.textContent === 'Take Selfie') {
        heroFaceElement.classList.add('animate-border');
        heroFaceElement.classList.add('border-color-change'); // Add this class
        tickGif.style.opacity = '1';
        detection.style.display = 'none';
        detectionGreen.style.display = 'block';
        takeSelfieButton.style.backgroundColor = "#fff";
        takeSelfieButton.style.border = "2px solid #4e9459";
        takeSelfieButton.style.color = "#4e9459";

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
        heroFaceElement.classList.remove('border-color-change'); // Remove this class
        tickGif.style.opacity = '0';
        detection.style.display = 'block';
        detectionGreen.style.display = 'none';
        detectionGreen.style.opacity = '0';
        takeSelfieButton.style.backgroundColor = "#4e9459";
        takeSelfieButton.style.color = "#fff";

        takeSelfieButton.textContent = 'Take Selfie';
    }
});


function handleResponsiveLayout() {
    const leftSide = document.querySelector('.left-side');
    const rightSide = document.querySelector('.Right-side');
    
    if (window.innerWidth <= 1025) {
        rightSide.style.display = 'flex';
        leftSide.style.display = 'none';
        backArrowButton.style.display = 'none';  

        setTimeout(() => {
            rightSide.style.display = 'none';
            leftSide.style.display = 'flex';
            leftSide.style.opacity = '1';
            leftSide.style.transition = 'opacity 0.5s ease-in-out';
            backArrowButton.style.display = 'block';  
        }, 6000);
    } else {
        rightSide.style.display = 'flex';
        leftSide.style.display = 'flex';
        backArrowButton.style.display = 'none';  
        detectionGreen.style.opacity = '1';
    }
}

backArrowButton.addEventListener('click', function() {
    const leftSide = document.querySelector('.left-side');
    const rightSide = document.querySelector('.Right-side');

    if (window.innerWidth <= 1025) {
        leftSide.style.display = 'flex';
        rightSide.style.display = 'none';
        backArrowButton.style.display = 'flex'; 
    }
});

window.addEventListener('load', handleResponsiveLayout);
window.addEventListener('resize', handleResponsiveLayout);


// function handleResponsiveLayout() {
//     const leftSide = document.querySelector('.left-side');
//     const rightSide = document.querySelector('.Right-side');

//     if (window.innerWidth <= 1025) {
//         rightSide.classList.add('slide-out');
//         rightSide.classList.remove('visible');
//         leftSide.classList.add('visible');
//         leftSide.classList.remove('hidden-left');

//         setTimeout(() => {
//             rightSide.classList.add('hidden');
//             rightSide.classList.remove('slide-out');
//         }, 500); // This should match your CSS transition duration
//     } else {
//         rightSide.classList.add('visible');
//         rightSide.classList.remove('hidden');
//         leftSide.classList.add('visible');
//         leftSide.classList.remove('hidden-left');
//     }
// }

// backArrowButton.addEventListener('click', function() {
//     const leftSide = document.querySelector('.left-side');
//     const rightSide = document.querySelector('.Right-side');

//     if (window.innerWidth <= 1025) {
//         leftSide.classList.add('hidden-left');
//         leftSide.classList.remove('visible');
//         rightSide.classList.add('visible');
//         rightSide.classList.remove('hidden');
//         backArrowButton.style.display = 'none'; 
//     }
// });

// window.addEventListener('load', handleResponsiveLayout);
// window.addEventListener('resize', handleResponsiveLayout);
