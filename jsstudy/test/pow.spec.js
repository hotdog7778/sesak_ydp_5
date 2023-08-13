const pow = require('../pow.js');
const assert = require('assert');

describe('pow', function () {
  /* it('2를 세번 곱하면 8 입니다.', function () {
    assert.equal(pow(2, 3), 8);
  });
  it('3을 네번 곱하면 81 입니다.', function () {
    assert.equal(pow(3, 4), 81);
  }); */

  describe('x를 두 번 곱합니다.', function () {
    function makeTest(x) {
      let expected = x * x;
      it(`${x} 를 두번 곱하면 ${expected} 입니다.`, function () {
        assert.equal(pow(x, 2), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });
});

describe('test', function () {
  before(function () {
    console.log('테스트를 시작합니다 - 테스트가 시작되기 전');
  });
  after(() => console.log('테스트를 종료합니다 - 테스트가 종료된 후'));

  beforeEach(() => console.log('단일 테스트를 시작합니다. 시작 전'));
  afterEach(() => console.log('단일 테스트를 종료합니다. 종료 후'));

  it('test 1', () => console.log(1));
  it('test 2', () => console.log(2));
});
