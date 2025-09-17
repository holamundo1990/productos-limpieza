const carrusel = document.querySelector('.carrusel');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;
const items = document.querySelectorAll('.carrusel-item');
const totalItems = items.length;

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarrusel();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarrusel();
});

function updateCarrusel() {
    const offset = -currentIndex * 400; // 400px es el ancho de la imagen
    carrusel.style.transform = `translateX(${offset}px)`;
}