export const closeModal = () => {
    document.querySelector('.pizzaWindowArea').style.opacity = 0;
    setTimeout(() => {
        document.querySelector('.pizzaWindowArea').style.display = 'none';
    }, 500);
};

document
    .querySelectorAll(
        '.pizzaInfo--cancelMobileButton, .pizzaInfo--cancelButton'
    )
    .forEach(item => {
        item.addEventListener('click', closeModal);
    });

document.querySelectorAll('.pizzaInfo--size').forEach(size => {
    size.addEventListener('click', () => {
        document
            .querySelector('.pizzaInfo--size.selected')
            .classList.remove('selected');
        size.classList.add('selected');
    });
});

const can = document.getElementById('can');
can.style.width = window.screen.availWidth + 'px';
// верхнє меню
can.style.height = window.screen.availHeight + 'px';
(function () {
    let c = document.getElementById('can'),
        ctx = c.getContext('2d'),
        pi = Math.PI,
        xCenter = c.width / 2,
        yCenter = c.height / 2,
        radius = 10,
        startSize = radius / 3,
        num = 5,
        posX = [],
        posY = [],
        angle,
        i;

    window.setInterval(function () {
        num++;
        ctx.clearRect(0, 0, xCenter * 2, yCenter * 2);
        for (i = 0; i < 9; i++) {
            ctx.beginPath();
            ctx.fillStyle = 'rgba(240, 68, 0,' + 0.1 * i + ')';
            if (posX.length === i) {
                angle = pi * i * 0.25;
                posX[i] = xCenter + radius * Math.cos(angle);
                posY[i] = yCenter + radius * Math.sin(angle);
            }
            ctx.arc(
                posX[(i + num) % 8],
                posY[(i + num) % 8],
                (startSize / 9) * i,
                0,
                pi * 2,
                1
            );
            ctx.fill();
        }
    }, 100);
})();

document.addEventListener('DOMContentLoaded', ready);

//відображення меню
function ready() {
    setTimeout(() => (can.style = 'display: none'), 1500);
}
