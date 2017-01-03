import Board from './board';
import AI from './ai';
import Human from './human';

import { PIECES, STATES, EVENTS } from './internals';
import * as Notifications from './notifications';


const _board = Symbol('board');
const _turn = Symbol('turn');
const _status = Symbol('status');
const _moves = Symbol('moves');

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
  
  /**
   * Current turn
   */
  get turn() {
    return this[_turn];
  }
  
  
  /**
   * Current State of the game
   */
  get state() {
    return this[_status];
  }
  
  /**
   * Moves
   */
  get moves() {
    return this[_moves];
  }
  
  constructor() {
    this[_board] = new Board();
    this[_turn] = PIECES.X;
    this[_status] = STATES.Start;
    this[_moves] = [];
    
    this.ai = new AI();
    
    Notifications.on(EVENTS.Turn, (turn) => this[_moves].push(turn));
    Notifications.on(EVENTS.Win, (context = {}) => { });
    Notifications.on(EVENTS.Draw, (context = {}) => { });
  }
  
  /**
   * Toggles the turn
   *
   * @public
   */
  toggleTurn() {
    this[_turn] = this.turn === PIECES.O ? PIECES.X : PIECES.O;
    
    if (this.turn === PIECES.X) {
      Notifications.fire(EVENTS.PlayersTurn, {});
    } else {
      Notifications.fire(EVENTS.AITurn, {});
    }
    
    // Populate with historical data
    Notifications.fire(EVENTS.Turn, {});
  }
  
  
  /**
   * Starts the game
   *
   */
  start(name = '') {
    this.human = new Human(name);
    
    
    if (this.state === STATES.Start) {
      this[_status] = STATES.Running;
      Notifications.fire(EVENTS.StateChanged, this.state);
      
      
      // Start the turn based logic
//      Notifications.fire(EVENTS.TurnStart, this.state);
    } else {
      throw new Error('Game in invalid status');
    }
  }
  
}
