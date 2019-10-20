let popup = document.querySelector('.popup');
let buttonBurger = document.querySelector('.button-burger');
let exit = popup.querySelector('.exit-button');
let nav = popup.querySelector('.navigation--popup')



function close() { popup.style.right = "-3000px" }
buttonBurger.addEventListener('click', function() { popup.style.right = "0" });
exit.addEventListener('click', function() { close() });
nav.addEventListener('click', function() { close() });