// Яндекс карта
let map = document.querySelector('.map');
let interactiveMap = map.querySelector('.map__image-interactive');
interactiveMap.classList.add('map__image-interactive--disabled');

// Создаю всплывающую подсказку
let mapInfo = document.createElement('div');
mapInfo.classList.add('map__info');
mapInfo.textContent = 'Нажмите, чтобы активировать.';
map.appendChild(mapInfo);

// Активирую и скрываю подсказку
map.addEventListener('click', function () {
  interactiveMap.classList.remove('map__image-interactive--disabled');
  mapInfo.classList.add('map__info--disabled');
});

// Функция, которая перемещает подсказку по карте
let moveMapInfo = function () {
  map.addEventListener('mousemove', function (evt) {
    if (evt.offsetY > 10 || evt.offsetX > 10) {
      mapInfo.style.top = evt.offsetY + 20 + 'px';
      mapInfo.style.left = evt.offsetX + 20 + 'px';
    }
  });
}

// Показываю и перемещаю подсказку
map.addEventListener('mouseover', function () {
  mapInfo.classList.add('map__info--active');
  moveMapInfo();
});

// Скрываю подсказку
map.addEventListener('mouseout', function () {
  mapInfo.classList.remove('map__info--active');
});
