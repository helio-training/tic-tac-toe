import Test from 'ava';
import AI from '../src/ai';
import { PIECES } from '../src/internals';

Test(`name and piece are required`, t => {
  const name = 'AI';
  const ai = new AI();
  t.is(ai.name, name);
  t.is(ai.piece, PIECES.O);
});

Test(`can play a move`, t => {
  const ai = new AI();
  t.truthy(ai.play);
});
