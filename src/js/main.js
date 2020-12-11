import './script.js';
import './pizzaChooserAreas.js';
import './cart.js';
import './service.js';
import './order.js';
import M from 'minimatch';

//слайдер
// по документації materialize слайдер
document.addEventListener('DOMContentLoaded', function () {
    var sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav, { edge: 'left', draggable: true });
    var slider = document.querySelectorAll('.slider');
    M.Slider.init(slider, {
        height: 400,
        indicators: false,
        interval: 4000,
    });
    var MBox = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(MBox);
    var parallax = document.querySelectorAll('.parallax');
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
