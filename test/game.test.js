import Test from 'ava';
import Game from '../src/game';

Test(`The board is accessible`, t => {
  const game = new Game();
  t.truthy(game.board);
});

Test(`The board is empty by default`, t => {
  const game = new Game();
  const isEmpty = game.board.isEmpty();
  t.truthy(isEmpty);
});
