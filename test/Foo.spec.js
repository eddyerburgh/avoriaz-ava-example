import { mount } from 'avoriaz';
import test from 'ava';
import Foo from '../src/components/Foo.vue';
import Bar from '../src/components/Bar.vue';

test('renders an h1', (t) => {
  const wrapper = mount(Foo);
  const numberOfH1 = wrapper.find('h1').length;
  t.is(numberOfH1, 1);
});

test('h1 renders data.msg as text', (t) => {
  const wrapper = mount(Foo);
  const message = wrapper.data().msg;
  const h1Text = wrapper.find('h1')[0].text();

  t.is(h1Text, message);
});

test('h1 text changes when button is clicked', (t) => {
  const expectedMessage = 'new message';

  const wrapper = mount(Foo);
  const button = wrapper.find('#change-message')[0];
  button.trigger('click');
  const h1Text = wrapper.find('h1')[0].text();

  t.is(h1Text, expectedMessage);
});

test('renders a message that equals prop msg2', (t) => {
  const msg2 = 'test message';
  const wrapper = mount(Foo, { propsData: { msg2 } });
  const text = wrapper.find('p')[0].text();

  t.is(text, msg2);
});

test('renders Bar', (t) => {
  const wrapper = mount(Foo);
  const bar = wrapper.find(Bar)[0];
  t.true(bar.is(Bar));
});
