import Test from 'ava';
import * as Helpers from '../../src/internals';


Test(`#translateToIndex(place) must have a place parameter greater than 0 and less than 10`, t => {
  t.throws(() => Helpers.translateToIndexes(0), /Invalid/);
  t.throws(() => Helpers.translateToIndexes(10), /Invalid/);
});

Test(`#translateToIndex(3) returns valid [0,2] `, t => {
  const result = Helpers.translateToIndexes(3);
  t.deepEqual(result, { x: 0, y: 2 });
});
