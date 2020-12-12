import './setup.test.js';
import { cart, doTask, setCart, updateCart } from '../cart';

test('test cart displaying', async () => {
    const cartSpan = document.querySelector(
        '.menu-openner > span:nth-child(1)'
    );
    expect(cartSpan.textContent).toBe('0');
    setCart([
        { Id: 11, Ident: '11@2', Nome: 'Margarita', Tamanho: 2, Quantidade: 1 },
    ]);
    await updateCart();
    expect(cartSpan.textContent).toBe('1');
    setCart([]);
    await updateCart();
    expect(cartSpan.textContent).toBe('0');
    setCart([
        { Id: 11, Ident: '11@2', Nome: 'Margarita', Tamanho: 2, Quantidade: 2 },
        {
            Id: 12,
            Ident: '12@0',
            Nome: 'Calabresa',
            Tamanho: 0,
            Quantidade: 1,
        },
        { Id: 12, Ident: '12@1', Nome: 'Calabresa', Tamanho: 1, Quantidade: 1 },
    ]);
    await updateCart();
    expect(cartSpan.textContent).toBe('3');
    setCart([]);
});

test('test plus of item', async () => {
    setCart([
        { Id: 11, Ident: '11@2', Nome: 'Margarita', Tamanho: 2, Quantidade: 2 },
        {
            Id: 12,
            Ident: '12@0',
            Nome: 'Calabresa',
            Tamanho: 0,
            Quantidade: 1,
        },
        { Id: 12, Ident: '12@1', Nome: 'Calabresa', Tamanho: 1, Quantidade: 1 },
    ]);
    expect(cart[0]['Quantidade']).toBe(2);
    document
        .querySelector(
            '#basket > div > div.cart > div:nth-child(1) > div.cart--item--qtarea > button.cart--item-qtmais'
        )
        .click();
    await updateCart();
    expect(cart[0]['Quantidade']).toBe(3);
    setCart([]);
});

test('test minus sign', async () => {
    setCart([
        { Id: 11, Ident: '11@2', Nome: 'Margarita', Tamanho: 2, Quantidade: 2 },
        {
            Id: 12,
            Ident: '12@0',
            Nome: 'Calabresa',
            Tamanho: 0,
            Quantidade: 1,
        },
        { Id: 12, Ident: '12@1', Nome: 'Calabresa', Tamanho: 1, Quantidade: 1 },
    ]);
    expect(cart[0]['Quantidade']).toBe(2);
    document
        .querySelector(
            '#basket > div > div.cart > div:nth-child(1) > div.cart--item--qtarea > button.cart--item-qtmenos'
        )
        .click();
    await updateCart();
    expect(cart[0]['Quantidade']).toBe(1);
    setCart([]);
});

test('test doTask', () => {
    setCart([
        { Id: 11, Ident: '11@2', Nome: 'Margarita', Tamanho: 2, Quantidade: 2 },
        {
            Id: 12,
            Ident: '12@0',
            Nome: 'Calabresa',
            Tamanho: 0,
            Quantidade: 1,
        },
        { Id: 12, Ident: '12@1', Nome: 'Calabresa', Tamanho: 1, Quantidade: 1 },
    ]);
    doTask();
    expect(cart).toEqual([]);
});

test('test visibility of cart', () => {
    setCart([
        { Id: 11, Ident: '11@2', Nome: 'Margarita', Tamanho: 2, Quantidade: 2 },
        {
            Id: 12,
            Ident: '12@0',
            Nome: 'Calabresa',
            Tamanho: 0,
            Quantidade: 1,
        },
        { Id: 12, Ident: '12@1', Nome: 'Calabresa', Tamanho: 1, Quantidade: 1 },
    ]);

    document.querySelector('.menu-openner').click();
    expect(document.querySelector('aside').style.left).toBe('0px');
    setCart([]);
});
