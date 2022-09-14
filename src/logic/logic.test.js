import calculate from './Calculate';
import operate from './Operate';

describe('testing logic components', () => {
  test('Test the calculator logic', () => {
    const data = {
      total: 4,
      next: 3,
      operation: null,
    };
    const value = { total: 3, next: null, operation: '+' };
    expect(calculate(data, '+')).toEqual(value);
  });
  test('Check operate for dividion by 0', () => {
    const str = "Can't divide by 0.";
    expect(operate(4, 0, '÷')).toBe(str);
  });
});
