"use strict"

const showSpoilerText = document.querySelector('.spoiler__text');
const spoilerDescription = document.querySelector('.spoiler__description');


showSpoilerText.addEventListener('click', function(){
    if (showSpoilerText.textContent == 'Показать спойлер'){
        showSpoilerText.textContent = 'Скрыть спойлер'
    } else {
        showSpoilerText.textContent = 'Показать спойлер'
    }
    spoilerDescription.classList.toggle('_hide')
})