//навігація по сторінці
document.querySelectorAll('.service').forEach(function (elm) {
    elm.addEventListener('click', function () {
        console.log(elm);
        var service_content = document.querySelector('#service_content');
        service_content.innerHTML = '<p>Test</p>';
    });
}); //корзина
document
    .getElementsByClassName('pizzochka')[0]
    .addEventListener('click', function () {
        window.scrollTo(0, document.querySelector('.cart--area').offsetTop);
    });
// меню всіх піц
document
    .getElementsByClassName('oury')[0]
    .addEventListener('click', function () {
        window.scrollTo(0, document.querySelector('.pizza-area').offsetTop);
    });
