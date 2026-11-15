// Run: node --test client/src/lib/help.test.mjs
import assert from 'node:assert/strict';
import test from 'node:test';
import { answerHelp } from './help.js';

test('answers questions about SARVAS', () => {
  assert.match(answerHelp('How do I sign in?').answer, /Connect GitHub/);
  assert.match(answerHelp('Who merges the pull requests?').answer, /never pushes/);
  assert.match(answerHelp('Is my code sent to an AI?').answer, /AI provider/);
  assert.match(answerHelp('How do I ask about my codebase?').answer, /Ask tab/);
});

test('handles small talk and typos', () => {
  for (const q of ['hi', 'Hello!', 'hey there', 'good morning', 'help', 'What can you do?', 'who are you']) {
    assert.match(answerHelp(q).answer, /help assistant/, q);
  }
  assert.match(answerHelp('thanks!').answer, /welcome/);
  assert.match(answerHelp('hi, how do I sign in?').answer, /Connect GitHub/);
  assert.match(answerHelp('how do i sigin').answer, /Connect GitHub/);
  assert.match(answerHelp('is my data privte?').answer, /encrypted/);
  assert.match(answerHelp('How does it work?').answer, /install the GitHub App/);
  assert.match(answerHelp('How do I use the demo?').answer, /demo visitor/);
  assert.match(answerHelp('Does it support python?').answer, /any text-based code/);
  assert.match(answerHelp('is it free').answer, /Pricing/);
});

test('says when a question is out of context', () => {
  for (const q of ["What's the weather in Paris?", 'Who won the world cup', 'best pizza near me', 'tell me a joke', '', '!!!']) {
    assert.equal(answerHelp(q).status, 'outside_context', q);
  }
});
