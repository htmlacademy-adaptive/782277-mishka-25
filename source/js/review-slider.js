// Слайдер с отзывами о продукции
let slideList = document.querySelector('.slider__list');
let slideItems = slideList.querySelectorAll('.slider__item');
let sliderControl = document.querySelector('.slider__toggles');
let sliderPrevious = sliderControl.querySelector('.slider__toggle--previous');
let sliderForward = sliderControl.querySelector('.slider__toggle--forward');

let slideIndex = 1;

let showSlide = function (index) {
  if (index < 1) {
    slideIndex = slideItems.length;
  } else if (index > slideItems.length) {
    slideIndex = 1;
  }

  for (let i = 0; i < slideItems.length; i++) {
    slideItems[i].classList.add('slider__item--hidden');
  }

  slideItems[slideIndex - 1].classList.remove('slider__item--hidden');
};

let changeSlide = function (index) {
  showSlide(slideIndex += index);
};

sliderPrevious.addEventListener('click', function () {
  changeSlide(-1);
});

sliderForward.addEventListener('click', function () {
  changeSlide(1);
});
