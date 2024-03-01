function calculateNumber(type, a, b) {
  a = Math.round(a);
  b = Math.round(b);

  switch (type) {
    case 'SUM':
      return a + b;
    case 'SUBTRACT':
      return a - b;
    case 'DIVIDE':
      return b !== 0 ? a / b : 'Error';
    default:
      return 'Error';
  }
}

module.exports = calculateNumber;
