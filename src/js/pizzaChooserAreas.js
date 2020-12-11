import { cart, updateCart } from './cart.js';
import { json1, json2, json3 } from './getJson.js';
import { closeModal } from './script.js';

(function () {
    const correspondentAreasAndURLs = [
        { area: '.pizza-area1', data: json1 },
        { area: '.pizza-area2', data: json2 },
        { area: '.pizza-area3', data: json3 },
    ];
    for (const correspondentAreasAndURL of correspondentAreasAndURLs) {
        getPizzaJson(correspondentAreasAndURL);
    }
})();

async function getPizzaJson({ area, data }) {
    const pizzaJson = await data;
    pizzaJson.map((pizza, index) => {
        let pizzaItem = pizzaBlockGenerator(index, pizza, pizzaJson);
        document.querySelector(area).append(pizzaItem);
    });
}

let modalCount = 1;
let modalKey = 0;

document
    .querySelector('.pizzaInfo--addButton')
    .addEventListener('click', async () => {
        let size = Number(
            document
                .querySelector('.pizzaInfo--size.selected')
                .getAttribute('data-key')
        );
        const pizzaJson1 = await json1;
        let Ident = pizzaJson1[modalKey].id + '@' + size;
        let key = cart.findIndex(item => item.Ident === Ident);
        if (key > -1) {
            const carKey = cart[key];
            carKey.Quantidade += modalCount;
        } else {
            cart.push({
                Id: pizzaJson1[modalKey].id,
                Ident,
                Nome: pizzaJson1[modalKey].name,
                Tamanho: size,
                Quantidade: modalCount,
            });
        }
        localStorage.setItem('session', JSON.stringify(cart));
        console.log(cart);
        updateCart();
        closeModal();
    });

function pizzaBlockGenerator(index, pizza, pizzaJson) {
    let pizzaItem = document
        .querySelector('.models .pizza-item')
        .cloneNode(true);
    pizzaItem.setAttribute('data-key', index);
    pizzaItem.querySelector('.pizza-item--img img').src = pizza.img; //Consegue-se usar a class e a tag num mesmo querySelector
    pizzaItem.querySelector(
        '.pizza-item--price'
    ).innerHTML = pizza.price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'EUR',
    });
    pizzaItem.querySelector('.pizza-item--name').innerHTML = pizza.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = pizza.description;
    pizzaItem.querySelector('a').addEventListener('click', e => {
        e.preventDefault();
        let key = e.target.closest('.pizza-item').getAttribute('data-key');
        const pizzaKey = pizzaJson[key];
        modalCount = 1;
        modalKey = key;

        document.querySelector('.pizzaBig img').src = pizzaKey.img;
        document.querySelector('.pizzaInfo h1').innerHTML = pizzaKey.name;
        document.querySelector('.pizzaInfo--desc').innerHTML =
            pizzaKey.description;
        document.querySelector(
            '.pizzaInfo--actualPrice'
        ).innerHTML = pizzaKey.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'EUR',
        });
        document
            .querySelector('.pizzaInfo--size.selected')
            .classList.remove('selected');
        document.querySelector('.pizzaInfo--qt').innerHTML = modalCount;
        document
            .querySelectorAll('.pizzaInfo--size')
            .forEach((size, sizeIndex) => {
                if (sizeIndex === 2) size.classList.add('selected');

                size.querySelector('span').innerHTML =
                    pizzaJson[key].sizes[sizeIndex];
            });

        document.querySelector('.pizzaWindowArea').style.opacity = 0;
        document.querySelector('.pizzaWindowArea').style.display = 'flex';
        setTimeout(() => {
            document.querySelector('.pizzaWindowArea').style.opacity = 1;
        }, 200);
    });
    return pizzaItem;
}

// зменшуємо і добавляємо кількість піц
document.querySelector('.pizzaInfo--qtmenos').addEventListener('click', () => {
    if (modalCount > 1) {
        modalCount--;
        document.querySelector('.pizzaInfo--qt').innerHTML = modalCount;
    }
});
document.querySelector('.pizzaInfo--qtmais').addEventListener('click', () => {
    modalCount++;
    document.querySelector('.pizzaInfo--qt').innerHTML = modalCount;
});
