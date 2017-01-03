import { PIECES } from './internals';

const _board = Symbol('board');

const INITIAL_STATE = [
  PIECES.Empty, PIECES.Empty, PIECES.Empty,
  PIECES.Empty, PIECES.Empty, PIECES.Empty,
  PIECES.Empty, PIECES.Empty, PIECES.Empty
];

//
//const checkRows = board => {
//  for (let i = 0; i <= 6; i += 3) {
//    if (board[i] !== 'E' && board[i] === B[i + 1] && board[i + 1] == board[i + 2]) {
//      return true;
//    }
//  }
//  return false;
//};
//
//const checkColumns = board => {
//  for (let i = 0; i <= 2; i++) {
//    if (board[i] !== 'E' && board[i] === B[i + 3] && board[i + 3] === board[i + 6]) {
//      return true;
//    }
//  }
//  return false;
//};
//
//const checkDiagnols = board => {
//  for (let i = 0, j = 4; i <= 2; i += 2, j -= 2) {
//    if (board[i] !== 'E' && board[i] == board[i + j] && board[i + j] === board[i + 2 * j]) {
//      return true;
//    }
//  }
//  return false;
//};


export default class {
  
  /**
   * Retrieves the current state of the board.
   *
   * @public
   *
   * @type {Array<number>}
   */
  get state() {
    return this[_board];
  }
  
  constructor() {
    this.reset();
  }
  
  reset() {
    this[_board] = INITIAL_STATE.slice();
  }
  
  /**
   * Helper to determine if the board is empty
   *
   * @public
   *
   * @returns {boolean}
   */
  isEmpty() {
    return this.state.every(value => value === PIECES.Empty);
  }
  
  /**
   * Retrieves the value at the current position
   *
   * @public
   *
   * @param {number} position
   * @returns {'E'|'X'|'O'}
   */
  valueAt(position) {
    return this.state[position];
  }
  
  /**
   * Can move to the coordinate
   *
   * @public
   *
   * @param position
   * @returns {boolean}
   */
  canMove(position) {
    return this.state[position] === PIECES.Empty;
  }
  
  /**
   * Do a move on the coordindate
   *
   * @public
   *
   * @param {number} position
   * @param {'X'|'O'} value
   */
  move(position, value) {
    if (this.canMove(position)) {
      this[_board][position] = value;
    } else {
      throw new Error('Invalid position');
    }
  }
  
  /**
   * Determines if a player has won
   *
   * @public
   *
   */
  hasWon() {
//    return !checkRows(this.state) &&
//        !checkColumns(this.state) &&
//        !checkDiagnols(this.state) &&
//        this.validMoves().length === 0;
    
    return false;
  }
  
  /**
   * Retrieves the valid moves as a position
   *
   * @public
   *
   */
  validMoves() {
    const indexes = [];
    this.state.forEach((v, index) => {
      if (v === PIECES.Empty) {
        indexes.push(index);
      }
    });
    return indexes;
  }
  
  /**
   * Returns the positions that shul
   * @returns {Array}
   */
  shouldBlock() {
    return [];
  }
  
}
