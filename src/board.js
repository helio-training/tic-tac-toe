const _board = Symbol('board');

export const COORDINATES = {
  1: [0, 0],
  2: [0, 1],
  3: [0, 2],
  4: [1, 0],
  5: [1, 1],
  6: [1, 2],
  7: [2, 0],
  8: [2, 1],
  9: [2, 2]
};

const getCoordinate = number => {
  const x = COORDINATES[number][0];
  const y = COORDINATES[number][1];
  return { x, y };
};

export default class {
  
  constructor() {
    this[_board] = [
      [E, E, E],
      [E, E, E],
      [E, E, E]
    ];
  }
  
  /**
   * Can move to the coordinate
   *
   * @public
   *
   * @param number
   * @returns {boolean}
   */
  canMove(number) {
    const { x, y } = getCoordinate(number);
    return this[_board][x][y] === 'E';
  }
  
  /**
   * Do a move on the coordindate
   *
   * @param player
   * @param number
   */
  move(player, number) {
    if (this.canMove(number)) {
      const { x, y } = getCoordinate(number);
      this[_board][x][y] = player;
    }
  }
  
}
