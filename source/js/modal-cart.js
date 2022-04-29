// Модальное окно с формой заказа
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
