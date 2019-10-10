<template>
  <q-page class="flex flex-center">
    <!-- <img alt="Quasar logo" src="~assets/asd.png"> -->
    <button @click="clearMessage">clear</button>
    <!-- <button @click="clearMessage=''">clear</button> -->
    <input v-model="message" @keyup="handleKeyup"/>
    <!-- <h1>{{message}}</h1> -->
    <h5 v-if="message.length">{{message}}</h5>
    <h6 v-else> No Message</h6>
    <p>{{uppercaseMessage()}}</p>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
    message:'Test Vue'
    }
  },
  methods: {
    clearMessage(){
      this.message=""
    },
  
    handleKeyup(e) {
      console.log(e)
      if(e.keyCode==27) {
        this.message=''
        
      }      
    },
    uppercaseMessage(){
      return this.message.toUpperCase()
    }
  }
}
</script>
