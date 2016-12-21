import { translateToIndexes } from './internals';

const _board = Symbol('board');

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
    this[_board] = [
      ['E', 'E', 'E'],
      ['E', 'E', 'E'],
      ['E', 'E', 'E']
    ];
  }

  /**
   * Helper to determine if the board is empty
   *
   * @public
   *
   * @returns {boolean}
   */
  isEmpty() {
    let isEmpty = true;
    this.state.forEach(row => {
      isEmpty = row.some(col => col === 'E') && isEmpty;
    });
    return isEmpty;
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
    const { x, y } = translateToIndexes(position);
    return this.state[x][y];
  }

  /**
   * Sets the value at a current position. Checks to make sure the position is empty.
   *
   * @public
   *
   * @param {number} position - The position 1-9
   * @param {'X'|'O'} value - An X or O
   *
   * @returns {*}
   */
  setAt(position, value) {
    if (this.canMove(position)) {
      const { x, y } = translateToIndexes(position);
      return this[_board][x][y] = value;
    } else {
      throw new Error('Invalid position');
    }
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
    const value = this.valueAt(position);
    return value === 'E';
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
    this.setAt(position, value);
  }

}
