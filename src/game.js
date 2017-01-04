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
  
  /**
   * @public
   *
   *
   */
  constructor() {
    this[_board] = new Board();
    this[_turn] = PIECES.X;
    this[_status] = STATES.Start;
    this[_moves] = [];
    
    this.ai = new AI();
    
    Notifications.on(EVENTS.Turn, (turn) => this[_moves].push(turn));
    
    Notifications.on(EVENTS.Win, (context = {}) => {
      this[_status] = STATES.Win;
      Notifications.fire(EVENTS.StateChanged, this.state);
      
      const { winner } = context;
      
    });
    
    Notifications.on(EVENTS.Draw, (context = {}) => {
      this[_status] = STATES.Draw;
      Notifications.fire(EVENTS.StateChanged, this.state);
      
    });
    
    Notifications.on(EVENTS.Invalid, context => {
      const input = this.captureInput();
      this.human.play(this, input);
    });
  }
  
  /**
   * Toggles the turn
   *
   * @public
   */
  toggleTurn() {
    this[_turn] = this.turn === PIECES.O ? PIECES.X : PIECES.O;
    
    if (this.turn === PIECES.X) {
      Notifications.fire(EVENTS.PlayersTurn, this);
    } else {
      Notifications.fire(EVENTS.AITurn, this);
    }
    
    // Populate with historical data
    Notifications.fire(EVENTS.Turn, this);
  }
  
  
  /**
   * Starts a game
   * @param {String} name
   */
  start(name = '', position = 1) {
    this.human = new Human(name);
    
    
    if (this.state === STATES.Start) {
      this[_status] = STATES.Running;
      Notifications.fire(EVENTS.StateChanged, this.state);
      
      this.human.play(this, position);
      
      // Start the turn based logic
//      Notifications.fire(EVENTS.TurnStart, this.state);
    } else {
      throw new Error('Game in invalid status');
    }
  }
  
  /**
   *
   */
  captureInput() {
    
  }
  
}
