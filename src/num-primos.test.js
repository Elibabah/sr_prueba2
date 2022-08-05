const hallarSiEsPrimo = require('./num-primos');

test('Primos debe devolver true', () => {
    expect(hallarSiEsPrimo(7)).toBe(true);
})

test('Primos debe devolver false', () => {
    expect(hallarSiEsPrimo(1)).toBe(false);
})

test('Primos debe devolver true', () => {
    expect(hallarSiEsPrimo(11)).toBe(true);
})

test('Primos debe devolver false', () => {
    expect(hallarSiEsPrimo(8)).toBe(false);
})