const gallery = document.querySelector('.gallery');
const images = document.querySelectorAll('.image-wrapper');

let currentIndex = 0;

function moveGallery(direction) {
    if (direction === 'right') {
        currentIndex = (currentIndex + 1) % images.length;
    } else {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    }
    const offset = currentIndex * -100;
    gallery.style.transform = `translateX(${offset}%)`;
}

document.addEventListener('wheel', (event) => {
    event.preventDefault();
    const direction = event.deltaY > 0 ? 'right' : 'left';
    moveGallery(direction);
});
