<template>
  <h1>{{title}}</h1>
  <p>Welcome...</p>
  <div v-if="showModal">
    <Modal theme="" @close="toggleModal">
      <template v-slot:links>
            <a href="#">sign up now</a>
            <a href="#">more info</a>
      </template>
      
      <h1>Ninja Giveaway!</h1>
      <p> Grab your ninja swag for half price!</p>
    </Modal>
  </div>
  <div v-if="showModalTwo">
    <Modal @close="toggleModalTwo">      
      <h1>Sign up for the newsletter</h1>
      <p>For updates and promo codes!</p>
    </Modal>
  </div>
  <button @click.alt="toggleModal">open modal (alt + click)</button>
  <button @click="toggleModalTwo">open modal 2 (click)</button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
      title: 'Welcome to your Vue.js App :)',
      header: 'Sign up for the giveaway!',
      text: 'Grab your ninja swag for half price!',
      showModal: false,
      showModalTwo: false
    }
  },
  methods:{
    toggleModal(){
      this.showModal = !this.showModal
    },
    toggleModalTwo(){
      this.showModalTwo = !this.showModalTwo
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
