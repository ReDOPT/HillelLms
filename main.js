// Получаем случайное число от 1 до 9
const randomNumber = Math.floor(Math.random() * 9) + 1;

// Формируем путь к случайному изображению
const imagePath = randomNumber + '.jpg';

// Устанавливаем случайное изображение в тэг <img>
document.getElementById('random-image').src = imagePath;