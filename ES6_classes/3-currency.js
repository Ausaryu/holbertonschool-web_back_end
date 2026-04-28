export default class Currency {
  constructor(code, name) {
    this.code = code
    this.name = name
  }

  set code(value) {
    if (typeof value !== "string") {
      throw new TypeError("code must be a string");
    }
    this._code = value
  }

  get code() {
    return this._code
  }

  set name(value) {
    if (typeof value !== "string") {
      throw new TypeError("name must be a string");
    }
    this._name = value
  }

  get name() {
    return this._name
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`
  }
}
