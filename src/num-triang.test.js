const numTrangulares = require('./num-triang');

test('Triangulares debe devolver 20', () => {
    expect(numTrangulares(4)).toBe(20);
})


test('Triangulares debe devolver 84', () => {
    expect(numTrangulares(7)).toBe(84);
})


test('Triangulares debe devolver 220', () => {
    expect(numTrangulares(10)).toBe(220);
})


test('Triangulares debe devolver 680', () => {
    expect(numTrangulares(15)).toBe(680);
})