const calc = require('./')

describe('calc.sum', () => {
  test.only('it should sum two integer number', () => {
    const a = 1
    const b = 2

    const result = calc.sum(a, b)

    expect(result).toBe(3);
  })

  test.skip('it should sum two float number', () => {
    const a = 0.1
    const b = 0.2

    const result = calc.sum(a, b)

    expect(result).toBe(0.3);
  })
})
