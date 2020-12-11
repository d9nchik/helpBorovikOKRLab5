import './js/script.js';
import './js/pizzaChooserAreas.js';
import './js/cart.js';
import './js/service.js';
import './js/order.js';
import './css/main.css';

//слайдер
// по документації materialize слайдер
document.addEventListener('DOMContentLoaded', function () {
    var sidenav = document.querySelectorAll('.sidenav');
    // eslint-disable-next-line no-undef
    M.Sidenav.init(sidenav, { edge: 'left', draggable: true });
    var slider = document.querySelectorAll('.slider');
    // eslint-disable-next-line no-undef
    M.Slider.init(slider, {
        height: 400,
        indicators: false,
        interval: 4000,
    });
    var MBox = document.querySelectorAll('.materialboxed');
    // eslint-disable-next-line no-undef
    M.Materialbox.init(MBox);
    var parallax = document.querySelectorAll('.parallax');
    // eslint-disable-next-line no-undef
    M.Parallax.init(parallax);
});

// додає піци до html
function load() {
    let urlToCheck = window.location.href;
    if (urlToCheck.indexOf('?') === -1) {
        window.location.href += '?#';
    }
}

document.getElementsByTagName('body')[0].addEventListener('load', load);
