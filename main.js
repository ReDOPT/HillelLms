let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showSlide(index) {

    if (index >= slides.length) {
        currentIndex = slides.length - 1;
    } else if (index < 0) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }


    const offset = -currentIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;


    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');


    prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
    nextButton.style.display = currentIndex === slides.length - 1 ? 'none' : 'block';
}

function moveSlide(step) {
    showSlide(currentIndex + step);
}

function currentSlide(index) {
    showSlide(index - 1);
}

showSlide(currentIndex);