import { PIECES, EVENTS } from './internals';
import Player from './player';
import * as Notifications from './notifications';

export default class extends Player {
  
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
    
  }
}
