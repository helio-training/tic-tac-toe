const _piece = Symbol('piece');
const _name = Symbol('name');

export default class {
  
  get piece() {
    return this[_piece];
  }
  
  get name() {
    return this[_name];
  }
  
  constructor(name, piece) {
    this[_name] = name;
    this[_piece] = piece;
  }
  
  
  
}
