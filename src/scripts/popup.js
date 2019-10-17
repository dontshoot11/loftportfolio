let popup = document.querySelector('.popup');
let buttonBurger = document.querySelector('.button-burger');
let exit = popup.querySelector('.exit-button');
let nav = popup.querySelector('.navigation--popup')




buttonBurger.addEventListener('click', function() { popup.style.right = "0" });
exit.addEventListener('click', function() { popup.style.right = "-3000px" });
nav.addEventListener('click', function() { popup.style.right = "-3000px" });