const slideContainer = document.querySelector('.container');
const slide = document.querySelector('.slides');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const interval = 1000;

let slides = document.querySelectorAll('.slide');
let index = 1;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slide.append(firstClone);
slide.prepend(lastClone);

slideWidth = slides[index].clientWidth;
console.log(slideWidth); // 576 in this case

slide.style.transform = `translate(${-slideWidth * index}px)`;

const startSlide = () => {
    slideId = setInterval(() => {
        moveToNextSlide();
    }, interval)
}

const getSlides = () => document.querySelectorAll('.slide');

slide.addEventListener('transitionend', () => {
    slides = getSlides();
    if (slides[index].id === firstClone.id) {
        slide.style.transition = 'none';
        index = 1;
        slide.style.transform = `translate(${-slideWidth * index}px)`;
    }
    if (slides[index].id === lastClone.id) {
        slide.style.transition = 'none';
        index = slides.length - 2;
        slide.style.transform = `translate(${-slideWidth * index}px)`;
    }


    console.log("Transition End");
})

const moveToNextSlide = () => {
    slides = getSlides();
    if (index >= slides.length - 1) return;
    index++;
    slide.style.transform = `translate(${-slideWidth * index}px)`;
    slide.style.transition = '.7s';
};
const moveToPrevSlide = () => {
    slides = getSlides();
    if (index <= 0) return;
    index--;
    slide.style.transform = `translate(${-slideWidth * index}px)`;
    slide.style.transition = '.7s';
};

slideContainer.addEventListener('mouseenter', () => {
    clearInterval(slideId);
});
slideContainer.addEventListener('mouseleave', startSlide);

nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPrevSlide);




startSlide();