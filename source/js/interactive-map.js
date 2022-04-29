// Интерактивная карта
let map = document.querySelector('.map');
let interactiveMap = map.querySelector('.map__image-interactive');
interactiveMap.classList.add('map__image-interactive--disabled');

// Создаю всплывающую подсказку
let mapTooltip = document.createElement('p');
mapTooltip.classList.add('map__tooltip');
mapTooltip.textContent = 'Нажмите, чтобы активировать.';
map.appendChild(mapTooltip);

// Активирую карту и скрываю подсказку
map.addEventListener('click', function () {
  interactiveMap.classList.remove('map__image-interactive--disabled');
  mapTooltip.classList.add('map__tooltip--disabled');
});

// Показываю подсказку
map.addEventListener('mouseover', function () {
  mapTooltip.classList.add('map__tooltip--active');
});

// Скрываю подсказку
map.addEventListener('mouseout', function () {
  mapTooltip.classList.remove('map__tooltip--active');
});
