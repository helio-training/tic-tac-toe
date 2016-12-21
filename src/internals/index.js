/**
 * Coordinates
 *
 * @private
 *
 */
const COORDINATES = {
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

/**
 * Translates a place to an index
 *
 * @public
 *
 * @param {number} place
 * @returns {object}
 */
export const translateToIndexes = (place = 0) => {
  if (place <= 0 || place >= 10) throw Error('Invalid place');
  let x, y;
  [x, y] = COORDINATES[place];
  return { x, y };
};

