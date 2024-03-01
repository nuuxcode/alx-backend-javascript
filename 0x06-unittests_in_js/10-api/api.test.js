const request = require('supertest');
const app = require('./api');

describe('POST /login', () => {
  it('responds with a welcome message', async () => {
    const response = await request(app)
      .post('/login')
      .send({ userName: 'Betty' })
      .set('Accept', 'application/json');

    expect(response.text).toEqual('Welcome Betty');
    expect(response.statusCode).toBe(200);
  });
});

describe('GET /available_payments', () => {
  it('responds with payment methods', async () => {
    const response = await request(app).get('/available_payments');

    expect(response.body).toEqual({
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    });
    expect(response.statusCode).toBe(200);
  });
});
