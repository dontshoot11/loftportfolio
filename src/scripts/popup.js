let popup = document.querySelector('.popup');
let buttonBurger = document.querySelector('.button-burger');
let buttonExit = document.querySelector('.exit-button');
let navigationItem = document.querySelectorAll('.navigation__item--popup');
let navigation = document.querySelector('.navigation--popup')

buttonBurger.addEventListener('click', function() { popup.style.right = "0" });
buttonExit.addEventListener('click', function() { popup.style.right = "-2000px" });
navigation.addEventListener('click', function() { popup.style.right = "-2000px" });

for (let i; i < navigationItem.length; i++) { navigationItem[i].addEventListener('click', function() { popup.style.right = "-2000px" }) }