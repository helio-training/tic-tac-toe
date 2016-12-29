import Board from './board';

const _board = Symbol('board');

export default class {

  /**
   * The board
   *
   * @public
   *
   * @type {Board}
   */
  get board() {
    return this[_board];
  }

  constructor() {
    this[_board] = new Board();
  }



}
