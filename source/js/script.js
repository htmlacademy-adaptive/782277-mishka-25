// Оживление меню-бургера
let navigation = document.querySelector('.navigation');
let navigationToggle = navigation.querySelector('.navigation__toggle');

navigation.classList.remove('navigation--nojs');

navigationToggle.addEventListener('click', function () {
  if (navigation.classList.contains('navigation--closed')) {
    navigation.classList.remove('navigation--closed');
    navigation.classList.add('navigation--opened');
  } else {
    navigation.classList.add('navigation--closed');
    navigation.classList.remove('navigation--opened');
  }
});

// Оживление модального окна
let modal = document.querySelector('.modal');
let orderButtons = document.querySelectorAll('.js-order');

for (let i = 0; i < orderButtons.length; i++) {
  orderButtons[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.remove('modal--hidden');
  });
}

modal.addEventListener('click', function (evt) {
  if (evt.target === modal) {
    modal.classList.add('modal--hidden');
  }
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    modal.classList.add('modal--hidden');
  }
});

// Оживление слайдера с отзывами
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
