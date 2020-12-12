import { closeModal } from './script.js';
import { json1 } from './getJson.js';

export let cart = JSON.parse(localStorage.getItem('session'))
    ? JSON.parse(localStorage.getItem('session'))
    : [];

export async function updateCart() {
    //FIXME: should be used all products
    const pizzaJson1 = await json1;
    document.querySelector('.menu-openner span').innerHTML = cart.length;

    if (cart.length > 0) {
        const carrinho = document.querySelector('.cart');
        carrinho.innerHTML = '';

        document.querySelector('aside').classList.add('show');

        let subtotal = 0;
        let desconto;
        let total;

        for (let i in cart) {
            let pizzaItem = pizzaJson1.find(item => item.id === cart[i].Id);
            let cartItem = document
                .querySelector('.models .cart--item')
                .cloneNode(true);
            let pizzaSizeName;
            subtotal += pizzaItem.price * cart[i].Quantidade;
            switch (cart[i].Tamanho) {
                case 0:
                    pizzaSizeName = 'P';
                    break;

                case 1:
                    pizzaSizeName = 'M';
                    break;

                case 2:
                    pizzaSizeName = 'G';
                    break;
            }

            let pizzaName = `${pizzaItem.name} (${pizzaSizeName})`;

            cartItem.querySelector('.cart--item img').src = pizzaItem.img;
            cartItem.querySelector(
                '.cart--item .cart--item-nome'
            ).innerHTML = pizzaName;
            cartItem.querySelector('.cart--item--qt').innerHTML =
                cart[i].Quantidade;
            cartItem
                .querySelector('.cart--item-qtmenos')
                .addEventListener('click', () => {
                    cart[i].Quantidade > 1
                        ? cart[i].Quantidade--
                        : cart.splice(i, 1);
                    updateCart();
                });
            cartItem
                .querySelector('.cart--item-qtmais')
                .addEventListener('click', () => {
                    cart[i].Quantidade++;
                    updateCart();
                });

            carrinho.append(cartItem);
        }

        desconto = subtotal * 0.1;
        total = subtotal - desconto;

        document.querySelector(
            '.subtotal span:last-child'
        ).innerHTML = subtotal.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'EUR',
        });
        document.querySelector(
            '.desconto span:last-child'
        ).innerHTML = desconto.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'EUR',
        });
        document.querySelector(
            '.total span:last-child'
        ).innerHTML = total.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'EUR',
        });
    } else {
        document.querySelector('aside').classList.remove('show');
        document.querySelector('aside').style.left = '100vw';
    }
}

// якщо не пуста вона відображається
document.querySelector('.menu-openner').addEventListener('click', () => {
    if (cart.length > 0) {
        document.querySelector('aside').style.left = '0';
    }
});
document
    .querySelector('.menu-closer')
    .addEventListener(
        'click',
        () => (document.querySelector('aside').style.left = '100vw')
    );

updateCart();

// оновлення корзини до нуля
export function doTask() {
    cart = [];
    localStorage.setItem('session', JSON.stringify(cart));
    alert('Pizza be pordered');
    updateCart();
    closeModal();
}

document.querySelector('.cart--finalizar').addEventListener('click', doTask);

export function setCart(value) {
    cart = value;
}
