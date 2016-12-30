import Test from 'ava';
import Player from '../src/player';
import { PIECES } from '../src/internals';

Test(`name and piece are required`, t => {
  const player = new Player('Bob', PIECES.X);
  t.truthy(player.name);
  t.is(player.piece, PIECES.X);
});



