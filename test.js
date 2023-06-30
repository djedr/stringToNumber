import {stringToNumber} from './mod.js'

import test from 'node:test'
import assert from 'node:assert/strict';

test('main', () => {
  assert.equal(stringToNumber(' 111 '), 111)
  assert.equal(stringToNumber('123_456'), 123456)
  assert.throws(() => stringToNumber(''), /SyntaxError/)
})