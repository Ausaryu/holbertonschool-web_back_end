export default class Building {
  constructor (sqft) {
    this.sqft = sqft;
    if (
      this.constructor !== Building &&
      this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage
    ) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  set sqft (value) {
    if (typeof value !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = value;
  }

  get sqft () {
    return this._sqft;
  }

  evacuationWarningMessage () {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
