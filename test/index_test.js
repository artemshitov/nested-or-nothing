var assert = require('assert');
var non    = require('./../index.js');

var object = {
  a: {
    b: {
      c: 1
    }
  }
};

assert.deepEqual(non(object, 'a'), {b: {c: 1}});
assert.deepEqual(non(object, 'a', 'b'), {c: 1});
assert.deepEqual(non(object), object);
assert.strictEqual(non(object, 'a', 'b', 'c'), 1);

assert.strictEqual(non(object, 'a', 'b', 'a'), void 0);
assert.strictEqual(non(object, 'a', 'a'), void 0);
assert.strictEqual(non(), void 0);
