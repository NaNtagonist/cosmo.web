
// Получаем ссылку на кнопку "Показать ещё"
const showMoreButton = document.getElementById('showMoreButton');

// Получаем все элементы с классом "news"
const newsItems = document.getElementsByClassName('news');

// Устанавливаем начальное количество видимых плашек
let visibleCount = 6;

// Скрыть все плашки, кроме первых "visibleCount" штук
for (let i = visibleCount; i < newsItems.length; i++) {
  newsItems[i].style.display = 'none';
}

// Обработчик события клика на кнопку "Показать ещё"
showMoreButton.addEventListener('click', function() {
  // Показать следующие 4 плашки
  for (let i = visibleCount; i < visibleCount + 4 && i < newsItems.length; i++) {
    newsItems[i].style.display = 'block';
  }

  // Увеличить количество видимых плашек
  visibleCount += 4;

  // Если все плашки уже показаны, скрыть кнопку "Показать ещё"
  if (visibleCount >= newsItems.length) {
    showMoreButton.style.display = 'none';
  }
});