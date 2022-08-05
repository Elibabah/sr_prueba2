const fibonacci = require('./fibonacci');

test('Fibonacci debe devolver 3', () => {
    expect(fibonacci(4)).toBe(3);
})

test('Fibonacci debe devolver 5', () => {
    expect(fibonacci(5)).toBe(5);
})

test('Fibonacci debe devolver 8', () => {
    expect(fibonacci(6)).toBe(8);
})

test('Fibonacci debe devolver 13', () => {
    expect(fibonacci(7)).toBe(13);
})