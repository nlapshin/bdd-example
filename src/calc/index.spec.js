const calc = require('./')

describe('calc.sum', () => {
  test('it should sum two integer number', () => {
    const a = 1
    const b = 2

    const result = calc.sum(a, b)

    expect(result).toBe(3);
  })
})
