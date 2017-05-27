<template>
	<div class="bar">
	  <ul class="parent-ul">
	    <li />
	    <li />
	    <ul class="child-ul" style="color:red;">
        <li />
        <li />
	    </ul>
	  </ul>
	</div>
</template>

<script>
import { baz } from '../vars.js'

export default {
  name: 'bar',
};
</script>
