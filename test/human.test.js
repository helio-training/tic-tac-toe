import Test from 'ava';
import Human from '../src/human';
import { PIECES } from '../src/internals';

Test(`name and piece are required`, t => {
  const player = new Human('Bob', PIECES.X);
  t.truthy(player.name);
  t.is(player.piece, PIECES.X);
});


Test(`can play a move`, t => {
  const player = new Human('Bob', PIECES.X);
  t.truthy(player.play);
});
