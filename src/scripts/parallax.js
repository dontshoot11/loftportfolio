var parallaxes = document.querySelectorAll('.parallax');
var parallaxesS = document.querySelectorAll('.parallax-s');
window.onscroll = function() { parallax(parallaxes), parallax(parallaxesS) };
//window.onscroll = function() { parallax(parallaxesS) };

function parallax(data) {
    var vScroll = window.pageYOffset;
    for (var i = 0; i < data.length; i++) {
        var coeff = (i - data.length) * 2;
        var currentParallax = data[i];
        console.log(currentParallax);
        var strafe = (vScroll / coeff + 'px');
        var transformString = 'translate3d(0,' + strafe + ',0)';
        console.log(transformString);
        currentParallax.style.transform = 'translate3d(0,' + strafe + ',0)';
        currentParallax.style.webkitTransform = 'translate3d(0,' + strafe + ',0)';

    }
}