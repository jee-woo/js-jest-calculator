import {Calculator} from '..';

describe('계산기 미션', () => {
  const calculator = new Calculator();

  test('2개의 숫자에 대해 덧셈이 가능하다.', () => {
    expect(calculator.sum(1, 2)).toBe(3);
  });

  test('2개의 숫자에 대해 뺄셈이 가능하다.', () => {
    expect(calculator.subtract(3, 1)).toBe(2);
  });

  test('2개의 숫자에 대해 곱셈이 가능하다.', () => {
    expect(calculator.multiply(2, 4)).toBe(8);
  });

  test('2개의 숫자에 대해 나눗셈이 가능하다.', () => {
    expect(calculator.divide(8, 4)).toBe(2);
  });

  test('0으로는 나눌 수 없다.', () => {
    expect(() => calculator.divide(5, 0)).toThrowError('0으로 나눌 수 없습니다.');
  });

  test.each([
    [1000, 1],
    [1, 1000],
    [-999, 1000],
    [-1000, 999],
    [10000, 10],
  ])('3자리가 넘는 수는 다룰 수 없다.', (num1, num2) => {
    const errorMessage = '숫자는 한번에 최대 3자리의 수까지만 다룰 수 있습니다.';

    expect(() => calculator.sum(num1, num2)).toThrowError(errorMessage);
    expect(() => calculator.subtract(num1, num2)).toThrowError(errorMessage);
    expect(() => calculator.multiply(num1, num2)).toThrowError(errorMessage);
    expect(() => calculator.divide(num1, num2)).toThrowError(errorMessage);
  });

  test.each([
    [999, 999],
    [-999, -999],
    [0, 100],
    [999, -999],
    [-999, 999],
  ])('3자리 이하의 수는 다룰 수 있다.', (num1, num2) => {
    expect(calculator.sum(num1, num2)).toBe(num1 + num2);
    expect(calculator.subtract(num1, num2)).toBe(num1 - num2);
    expect(calculator.multiply(num1, num2)).toBe(num1 * num2);
    expect(calculator.divide(num1, num2)).toBe(num1 / num2);
  });

  test('계산 결과를 표현할 때 소수점 이하는 버림한다.', () => {
    expect(calculator.sum(1, 2.5)).toBe(3);
    expect(calculator.subtract(3.5, 1)).toBe(2);
    expect(calculator.multiply(2.5, 3)).toBe(7);
    expect(calculator.divide(8, 3)).toBe(2);
  });

  test.each([
    ['1', 2],
    [1, '2'],
    [undefined, 2],
    [1, null],
    [{}, 5],
    [[], 3],
    [true, 2],
    [1, () => {}],
  ])('숫자가 아닌 값이 들어올 경우 에러를 발생한다.', (value1, value2) => {
    const errorMessage = '숫자만 입력 가능합니다.';

    expect(() => calculator.sum(value1, value2)).toThrowError(errorMessage);
    expect(() => calculator.subtract(value1, value2)).toThrowError(errorMessage);
    expect(() => calculator.multiply(value1, value2)).toThrowError(errorMessage);
    expect(() => calculator.divide(value1, value2)).toThrowError(errorMessage);
  });
});
