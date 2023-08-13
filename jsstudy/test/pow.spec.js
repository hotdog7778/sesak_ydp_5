const pow = require('../pow.js');
const assert = require('assert');

describe('pow', function () {
  it('2를 세번 곱하면 8 입니다.', function () {
    assert.equal(pow(2, 3), 8);
  });
  it('3을 네번 곱하면 81 입니다.', function () {
    assert.equal(pow(3, 4), 81);
  });
});
