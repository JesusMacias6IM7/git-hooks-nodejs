const mult = require('../src/mult');

it('should return correct sum', () => {
    const result = mult(2, 3);
    expect(result).toBe(6);
});