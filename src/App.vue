<template>
  <h1>Ninja Reaction Timer</h1>
  <button @click="start" :disabled="isPlaying">Play</button>
  <!-- The video I am watching at:
   https://youtu.be/bc6czIBLKTg?list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&t=644-->
   
  <Block v-if="isPlaying" v-bind:delay="delay" @end="endGame"/>   
  <Results v-if="showResult" v-bind:score="score"/>
</template>


<script>
import Block from './components/Block.vue';
import Results from './components/Results.vue';
export default {
  name: 'App',
  components: {Block, Results},
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResult: false
    }
  },
  methods: {
    start() {      
      this.delay = Math.floor(Math.random() * 5000) + 2000;
      this.isPlaying = true
      this.showResult = false      
    },
    endGame(reactionTime) {    
    this.score = reactionTime
    this.isPlaying = false
    this.showResult = true
  }
  },
  
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
