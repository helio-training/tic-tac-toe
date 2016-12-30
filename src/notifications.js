import EventEmitter from 'events';

const emitter = new EventEmitter();

export const fire = (event, ...args) => {
  emitter.emit(event, ...args);
};

export const on = (event, fn) => emitter.on(event, fn);

export const once = (event, fn) => emitter.once(event, fn);

export const events = () => emitter.eventNames();

export const reset = () => emitter.removeAllListeners();

export const remove = (name, fn) => emitter.removeListener(name, fn);
