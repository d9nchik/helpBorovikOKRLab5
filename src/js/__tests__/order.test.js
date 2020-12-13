import './setup.test.js';
import { isEmpty, showServerError } from '../order';

test('test isEmpty', () => {
    expect(isEmpty('')).toBeTruthy();
    expect(isEmpty(null)).toBeTruthy();
    expect(isEmpty('1')).toBeFalsy();
});

test('test validate form', async () => {
    expect(document.querySelector('form').submit()).toBeFalsy();
    document.getElementById('name').value = 'name';
    expect(document.querySelector('form').submit()).toBeFalsy();
    document.getElementById('address').value = 'address';
    expect(document.querySelector('form').submit()).toBeFalsy();
    document.getElementById('city').value = 'city';
    expect(document.querySelector('form').submit()).toBeFalsy();
    document.getElementById('state').value = 'state';
    expect(document.querySelector('form').submit()).toBeFalsy();
    const before = String.prototype.match;
    String.prototype.match = () => true;
    document.getElementById('phone').value = '+38 (096) 588-45-36';
    localStorage.setItem('session', '[]');
    expect(document.querySelector('form').submit()).toBe(undefined);
    String.prototype.match = before;
});

test('error message has been displayed', () => {
    showServerError();
    expect(document.querySelector('.serverError').style.display).toBe('block');
});

test('test order is closed', () => {
    document.querySelector('div#order button').click();
    expect(document.querySelector('.orderPage').style.display).toBe('none');
});
