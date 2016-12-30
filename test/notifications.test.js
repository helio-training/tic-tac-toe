import Test from 'ava';
import * as Notifications from '../src/notifications';

Test.beforeEach(t => {
  Notifications.reset();
});

Test(`#events() are empty by default`, t => {
  t.deepEqual(Notifications.events(), []);
});

Test(`Can register and fire an event`, t => {
  const event = 'blah';
  const payload = { hello: 'world' };

  Notifications.on(event, (data) => {
    t.is(data, payload);
  });

  Notifications.fire(event, payload);
});
