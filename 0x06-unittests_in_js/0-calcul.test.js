const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {

  // int int
  it('should return 4 when inputs are 2 and 2', () => {
    assert.strictEqual(calculateNumber(2, 2), 4);
  });

  // float float
  it('should return 5 when inputs are 1.5 and 2.5', () => {
    assert.strictEqual(calculateNumber(1.5, 2.5), 5);
  });
  it('should return -3 when inputs are -1.5 and -2.5', () => {
    assert.strictEqual(calculateNumber(-1.5, -2.5), -3);
  });



});
