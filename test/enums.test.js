import Test from 'ava';
import States from '../src/internals/states';
import Enums from '../src/internals/enums';

Test(`convertFrom can convert from enum to string`, t => {
  const enums = Enums(States);
  t.truthy(enums.convert('Start'));
  t.truthy(enums.convert('Draw'));
  t.truthy(enums.convert('Win'));
  t.truthy(enums.convert('Start'));
});

Test(`convertTo can convert from enum to string`, t => {
  const enums = Enums(States);
  t.is(enums.convert(States.Start), 'Start');
  t.is(enums.convert(States.Draw), 'Draw');
  t.is(enums.convert(States.Win), 'Win');
  t.is(enums.convert(States.Start), 'Start');
});
