import { test } from 'node:test';
import assert from 'node:assert/strict';
import { greet, farewell } from '../src/greet.js';

test('greet returns a greeting', () => {
  assert.equal(greet('Jeffrey'), 'Hello, Jeffrey!');
});

test('farewell returns a farewell', () => {
  assert.equal(farewell('Jeffrey'), 'Goodbye, Jeffrey!');
});
