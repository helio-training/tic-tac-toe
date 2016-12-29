import Test from 'ava';
import Game from '../src/game';

Test(`The board is accessible`, t => {
  const game = new Game();
  t.truthy(game.board);
});

Test(`The board is empty by default`, t => {
  const game = new Game();
  t.truthy(game.board.isEmpty());
});


Test(`The can get values at certain positions`, t => {
  const game = new Game();
  const empty = game.board.valueAt(1);
  t.is(empty, 'E');
});
