<template>
	<div id="app">
		<foo />
	</div>
</template>

<script>
import Foo from './components/Foo.vue';

export default {
  name: 'app',
  components: {
    Foo,
  },
};
</script>