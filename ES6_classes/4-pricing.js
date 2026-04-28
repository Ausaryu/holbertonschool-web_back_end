import Currency from './3-currency.js';

export default class Pricing {
  constructor (amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  set amount (value) {
    if (typeof value !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = value;
  }

  get amount () {
    return this._amount;
  }

  set currency (value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be an instance of Currency class');
    }
    this._currency = value;
  }

  get currency () {
    return this._currency;
  }

  displayFullPrice () {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice (amount, conversionRate) {
    return amount * conversionRate;
  }
}
