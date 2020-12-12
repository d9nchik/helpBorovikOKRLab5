import './setup.test';
import '../service';

test('test button in footer has been pressed', () => {
    document.querySelector('.service').click();
    expect(document.querySelector('#service_content').innerHTML).toBe(
        '<p>Test</p>'
    );
});

test('test ability to scroll', () => {
    document.getElementsByClassName('oury')[0].click();
    document.getElementsByClassName('pizzochka')[0].click();
});
