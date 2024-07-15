<template>
  <h1>{{title}}</h1>
  <input type="text" ref="name">
  <button v-on:click="handleClick">click me</button>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: 'Welcome to your Vue.js App :)'
    }
  },
  methods: {
    handleClick() {
      console.log('Hello ' + this.$refs.name.value)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    }
  }  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1{
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
