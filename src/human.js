import Player from './player';
import { EVENTS, PIECES } from './internals';
import * as Notifications from './notifications';

const _piece = Symbol('piece');

export default class extends Player {
  
  constructor(name) {
    super(name, PIECES.X);
//    Notifications.on(EVENTS.PlayerTurn, () => {
//      // Do turn based logic
//      // Fire the TurnOver
//    });
  }
  
  /**
   * Play
   *
   * @public
   *
   * @param {Object} game
   */
  play(game = {}) {
    
  }
  
}
