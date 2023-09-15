import { describe, test } from 'node:test';
import assert from 'node:assert';

import UniqueId from './index.js';

describe('Create unique user ID', () => {
  test('generates a unique ID', (t) => {
    assert.strictEqual(Boolean(UniqueId()), true);
  });

  test('generated ID is alphanumric', (t) => {
    assert.strictEqual(/^[A-z0-9]+$/.test(UniqueId()), true);

    const uid = UniqueId() + '£$%^&*';
    assert.strictEqual(/^[A-z0-9]+$/.test(uid), false);
  });
});

describe('Test unique value with 100 IDs', () => {
  const ids = [];
  for (let i = 1; i <= 100; i++) {
    const uid = UniqueId();
    test(`generated ID ${i}: ${uid} is unique`, (t) => {
      if (ids.includes(uid)) {
        assert.fail('ID is not unique');
      } else {
        ids.push(uid);
        assert.ok(uid, 'ID is not unique');
      }
    });
  }
});
