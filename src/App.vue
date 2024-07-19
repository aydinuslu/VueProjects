<template>
  <h1>Ninja Reaction Timer</h1>
  <button @click="start" :disabled="isPlaying">Play</button>
  <!-- The video I am watching at:
   https://youtu.be/bc6czIBLKTg?list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&t=644-->
   <Block v-if="isPlaying" v-bind:delay="delay"/>
</template>


<script>
import Block from './components/Block.vue';
export default {
  name: 'App',
  components: {Block},
  data() {
    return {
      isPlaying: false,
      delay: null,
    }
  },
  methods: {
    start() {
      this.isPlaying = true;
      this.delay = Math.floor(Math.random() * 5000) + 2000;
      console.log(this.delay);      
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
  color: #444;
  margin-top: 60px;
}
</style>
