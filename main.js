const textBlock = document.getElementById('text-block');
const colorButton = document.getElementById('color-button');
let isOriginalColor = true;

colorButton.addEventListener('click', function() {
    if (isOriginalColor) {
        textBlock.style.color = 'red';
    } else {
        textBlock.style.color = 'black';
    }
    isOriginalColor = !isOriginalColor;
});