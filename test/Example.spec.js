import test from 'ava'
import { mount } from 'avoriaz'

// Component
import Example from '../src/components/Example.vue'

// Saving mounted instance of component
const wrapper = mount(Example)

test('renders one h1', t => {
    t.is(wrapper.find('h1').length, 1)
    // results in an error, so I add the following to check if I get HTML:
    const html = wrapper.html()
    console.log(html)
    // results in an error what is a bit clear
})