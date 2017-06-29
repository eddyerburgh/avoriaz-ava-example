<template>
    <div class="example">
        <h1>{{ message }}</h1>
        <h2>prop: {{ msg }}</h2>
        <button id="change-message" @click="changeMessage">Change message</button>
    </div>
</template>

<script>
    export default {
        name: 'Example',

        data () {
            return {
                message: 'Default message'
            }
        },

        props: ['msg'],

        methods: {
            changeMessage () {
                this.message = 'new message'
            }
        }
    }
</script>