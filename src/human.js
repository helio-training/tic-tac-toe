import Player from './player';
import { EVENTS, PIECES } from './internals';
import * as Notifications from './notifications';

const _piece = Symbol('piece');

export default class extends Player {
  
  constructor(name) {
    super(name, PIECES.X);
  }
  
  /**
   * Play
   *
   * @public
   *
   * @param {object} game
   * @param {number} position
   *
   */
  play(game = {}, position) {
    const { board } = game;
    
    try {
      board.move(position, this.piece);
      this.finishTurn();
    } catch (ex) {
      Notifications.fire(EVENTS.Invalid, { position });
    }
  }
  
  
}
