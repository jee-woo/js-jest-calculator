export class Calculator {
  sum(num1, num2) {
    this._validateInput(num1, num2);

    return this._getFloorNumber(num1 + num2);
  }

  subtract(num1, num2) {
    this._validateInput(num1, num2);

    return this._getFloorNumber(num1 - num2);
  }

  multiply(num1, num2) {
    this._validateInput(num1, num2);

    return this._getFloorNumber(num1 * num2);
  }

  divide(num1, num2) {
    if (num2 === 0) {
      throw new Error('0으로 나눌 수 없습니다.');
    }

    this._validateInput(num1, num2);

    return this._getFloorNumber(num1 / num2);
  }

  _validateMaximumInput(num) {
    if (Math.abs(num) >= 1000) {
      throw new Error('숫자는 한번에 최대 3자리의 수까지만 다룰 수 있습니다.');
    }
  }

  _getFloorNumber(num) {
    return Math.floor(num);
  }

  _validateInputType(num) {
    if (typeof num !== 'number') {
      throw new Error('숫자만 입력 가능합니다.');
    }
  }

  _validateInput(num1, num2) {
    this._validateMaximumInput(num1);
    this._validateMaximumInput(num2);
    this._validateInputType(num1);
    this._validateInputType(num2);
  }
}
