import { PIECES, EVENTS } from './internals';
import Player from './player';

/**
 * AI Player
 *
 * @public
 *
 * @extends {Player} Player
 */
export default class extends Player {
  
  /**
   * Creates a new AI Player
   */
  constructor() {
    super('AI', PIECES.O);
  }
  
  /**
   * Determine what to play, then play it
   *
   * @public
   *
   * @param {Object} game
   *
   */
  play(game = {}) {
    const { board } = game;
    const position = this.getNextPosition(board);
    board.move(position, this.piece);
    this.finishTurn();
  }
  
  /**
   * Determine the next position that should be played
   *
   * @private
   *
   * @returns {Array}
   */
  getNextPosition(board) {
    const moves = board.validMoves();
    
    // AI CODE
    
    return moves;
  }
  
}
