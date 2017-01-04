import Test from 'ava';
import Board from '../src/Board';
import { PIECES } from '../src/internals'
import Enum from 'symbol-enum';


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


Test(`hasWon() is false when someone hasn't won yet`, t => {
  const board = new Board();
  t.falsy(board.hasWon());
});


Test(`hasWon() is true when someone has won on a row`, t => {
  const board = new Board();
  board.move(0, 'X');
  board.move(1, 'X');
  board.move(2, 'X');
  t.truthy(board.hasWon());
  
  board.reset();
  t.falsy(board.hasWon());
  
  board.move(3, 'X');
  board.move(4, 'X');
  board.move(5, 'X');
  t.truthy(board.hasWon());
  
  board.reset();
  t.falsy(board.hasWon());
  
  board.move(6, 'X');
  board.move(7, 'X');
  board.move(8, 'X');
  t.truthy(board.hasWon());
});


Test(`hasWon() is true when someone has won vertically`, t => {
  const board = new Board();
  board.move(0, 'X');
  board.move(3, 'X');
  board.move(6, 'X');
  t.truthy(board.hasWon());
  
  board.reset();
  t.falsy(board.hasWon());
  
  board.move(1, 'X');
  board.move(4, 'X');
  board.move(7, 'X');
  t.truthy(board.hasWon());
  
  board.reset();
  t.falsy(board.hasWon());
  
  board.move(2, 'X');
  board.move(5, 'X');
  board.move(8, 'X');
  t.truthy(board.hasWon());
});

Test(`hasWon() is true when someone has won diagonally`, t => {
  const board = new Board();
  board.move(0, 'X');
  board.move(4, 'X');
  board.move(8, 'X');
  t.truthy(board.hasWon());
  
  board.reset();
  board.move(2, 'X');
  board.move(4, 'X');
  board.move(6, 'X');
  t.truthy(board.hasWon());
});



