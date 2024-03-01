const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getPaymentTokenFromAPI', function () {
  it('should return a promise', function (done) {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        assert.equal(res.data, 'Successful response from the API');
        done();
      })
      .catch((error) => done(error));
  });
});
