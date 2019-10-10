<template>
  <q-page class="flex flex-center">
    <!-- <img alt="Quasar logo" src="~assets/asd.png"> -->
    <button @click="clearMessage">clear</button>
    <!-- <button @click="clearMessage=''">clear</button> -->
    <input v-model="message" @keyup="handleKeyup"/>
    <h1>{{message}}</h1>
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
      
    }
  }
}
</script>
