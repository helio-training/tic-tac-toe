import Player from './player';
import { EVENTS, PIECES } from './internals';
import * as Notifications from './notifications';

const _piece = Symbol('piece');

export default class extends Player {

  constructor(name, piece) {
    super(name, PIECES.X);
    Notifications.on(EVENTS.PlayerTurn, () => {
      // Do turn based logic
      // Fire the TurnOver
    });
  }

}
