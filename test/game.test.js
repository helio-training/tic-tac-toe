import Test from 'ava';
import Game from '../src/game';
import { PIECES, STATES } from '../src/internals';

Test(`The board is accessible`, t => {
  const game = new Game();
  t.truthy(game.board);
});

Test('X goes first', t => {
  const game = new Game();
  t.is(game.turn, PIECES.X);
});

Test('Toggle turn flips the current players turn', t => {
  const game = new Game();
  t.is(game.turn, PIECES.X);
  
  game.toggleTurn();
  t.is(game.turn, PIECES.O);
  
  game.toggleTurn();
  t.is(game.turn, PIECES.X);
});


Test('START is the default status', t => {
  const game = new Game();
  t.is(game.state, STATES.Start);
});

Test('moves is empty by default', t => {
  const game = new Game();
  t.deepEqual(game.moves, []);
});

Test(`#start() changes the status to running`, t => {
  const game = new Game();
  t.is(game.state, STATES.Start);
  
  game.start('Bob');
  t.is(game.state, STATES.Running);
  t.is(game.human.name, 'Bob');
});


Test(`#ai is set by default`, t => {
  const game = new Game();
  t.truthy(game.ai);
});
