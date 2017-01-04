import Test from 'ava';
import Board from '../src/Board';


Test('Board is empty by default', t => {
  const board = new Board();
  t.truthy(board.isEmpty());
});


Test('Set and X at 0, and is empty should be false', t => {
  const board = new Board();
  board.move(0, 'X');
  t.falsy(board.isEmpty());
});


Test('Reset should set it to the initial state', t => {
  const board = new Board();
  board.move(0, 'X');
  t.falsy(board.isEmpty());
  
  board.reset();
  t.truthy(board.isEmpty());
});

Test('#canMove(position) will allow a valid move', t => {
  const board = new Board();
  t.truthy(board.canMove(0));
});


Test('#validMoves returns all indexes by default', t => {
  const board = new Board();
  console.log(board.validMoves());
  t.truthy(board.validMoves().length === 9);
});


Test('#validMoves returns all indexes by default', t => {
  const board = new Board();
  board.move(0, 'X');
  t.truthy(board.validMoves().length === 8);
  
  board.move(5, 'X');
  t.truthy(board.validMoves().length === 7);
});

Test('#move(position) throws and error if a piece is played from invalid position', t => {
  const board = new Board();
  board.move(0, 'X');
  
  t.throws(() => board.move(0, 'X'));
});

