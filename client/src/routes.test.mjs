// node --test client/src/routes.test.mjs
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { canonical, match, withBase } from './routes.js';

test('match strips the user prefix and keeps old paths working', () => {
  assert.deepEqual(match('/alice/tasks/7', 'alice'), { page: 'task', id: '7', user: 'alice', rest: '/tasks/7' });
  assert.equal(match('/alice', 'Alice').page, 'home');
  assert.equal(match('/alice/repos/o/n', 'alice').owner, 'o');
  assert.equal(match('/tasks/7', 'alice').page, 'task');
  assert.equal(match('/', 'alice').page, 'home');
  assert.equal(match('/privacy', 'alice').page, 'privacy');
  assert.equal(match('/bob/tasks/7', 'alice').page, 'task'); // shared link
  assert.equal(match('/bob', 'alice').page, 'notFound');
  assert.equal(match('/alice/privacy', 'alice').page, 'notFound');
  assert.equal(match('/alice/nope', 'alice').page, 'notFound');
  assert.equal(match('/demo%20visitor/tasks', 'demo visitor').page, 'tasks');
  assert.equal(match('/%E0%A4', 'alice').page, 'notFound');
});

test('withBase and canonical point signed-in users at /<login>/…', () => {
  assert.equal(withBase('/alice', '/'), '/alice');
  assert.equal(withBase('/alice', '/tasks/7'), '/alice/tasks/7');
  assert.equal(withBase('/alice', '/privacy'), '/privacy');
  assert.equal(withBase('/alice', '/alice/tasks'), '/alice/tasks');
  assert.equal(withBase('', '/tasks'), '/tasks');
  assert.equal(canonical('/', match('/', 'alice'), '/alice'), '/alice');
  assert.equal(canonical('/bob/tasks/7', match('/bob/tasks/7', 'alice'), '/alice'), '/alice/tasks/7');
  assert.equal(canonical('/alice/tasks', match('/alice/tasks', 'alice'), '/alice'), null);
  assert.equal(canonical('/privacy', match('/privacy', 'alice'), '/alice'), null);
  assert.equal(canonical('/tasks', match('/tasks'), ''), null);
});
