const hamburgerBtn = document.getElementById('hamburgerBtn');
const navbarItems = document.querySelector('.navbar-items');

hamburgerBtn.addEventListener('click', () => {
    navbarItems.classList.toggle('show');
});

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slides = document.querySelector('.slides');
const slideWidth = slides.firstElementChild.clientWidth;
const totalSlides = slides.children.length;
let currentIndex = 0;
let intervalId;

function goToSlide(index) {
    currentIndex = index;
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    goToSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    goToSlide(currentIndex);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

function startCarousel() {
    intervalId = setInterval(nextSlide, 5000);
}

function stopCarousel() {
    clearInterval(intervalId);
}

startCarousel();


const indicatorElements = document.querySelectorAll('.indicator');

indicatorElements.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        goToSlide(currentIndex);
        updateIndicators();
    });
});

function updateIndicators() {
    indicatorElements.forEach((indicator, index) => {
        if (index === currentIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}
