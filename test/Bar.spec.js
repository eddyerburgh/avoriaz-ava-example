import { mount } from 'avoriaz';
import test from 'ava';
import Bar from '../src/components/Bar.vue';

test('renders a div with class bar', (t) => {
  const wrapper = mount(Bar);
  t.true(wrapper.hasClass('bar'));
});

test('renders 4 list elements inside .parent-ul', (t) => {
  const wrapper = mount(Bar);
  const listElements = wrapper.find('.parent-ul li');
  t.is(listElements.length, 4);
});

test('renders 2 list elements as direct descendants of .parent-ul', (t) => {
  const wrapper = mount(Bar);
  const listElements = wrapper.find('.parent-ul > li');
  t.is(listElements.length, 2);
});

test('.child-ul has color style set to red', (t) => {
  const wrapper = mount(Bar);
  const childUl = wrapper.find('.child-ul')[0];
  t.true(childUl.hasStyle('color', 'red'));
});
