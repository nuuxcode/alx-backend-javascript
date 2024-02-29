const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {


  it('should return -3 when inputs are -1.5 and -2.5', () => {
    assert.strictEqual(calculateNumber(-1.5, -2.5), -3);
  });


  // int float
  it('should return 4 when inputs are 1 and 2.7', () => {
    assert.strictEqual(calculateNumber(1, 2.7), 4);
  });

  // float int
  it('should return 4 when inputs are 1.7 and 2', () => {
    assert.strictEqual(calculateNumber(1.7, 2), 4);
  });

  // all in negative
  it('should return -4 when inputs are -2 and -2', () => {
    assert.strictEqual(calculateNumber(-2, -2), -4);
  });

  it('should return -4 when inputs are -1 and -2.7', () => {
    assert.strictEqual(calculateNumber(-1, -2.7), -4);
  });
  it('should return -4 when inputs are -1.7 and -2', () => {
    assert.strictEqual(calculateNumber(-1.7, -2), -4);
  });


});
