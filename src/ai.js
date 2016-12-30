import { PIECES, EVENTS } from './internals';
import Player from './player';
import * as Notifications from './notifications';


export default class extends Player {

  constructor() {
    super('AI', PIECES.O);

    Notifications.on(EVENTS.AITurn, () => {
      // Do AI based logic
      // Fire the TurnOver

    });
  }


}
