<template>
  <q-page padding>
    <!-- <img alt="Quasar logo" src="~assets/asd.png"> -->
    <!-- <button @click="clearMessage=''">clear</!--> 
    <input v-model="message" @keyup.esc="clearMessage" @keyup.enter="alertMessage"/>
    <button @click="clearMessage">clear</button>
    <h1>{{message}}</h1>
    <h5 class="border-grey" v-if="message.length">{{message}}</h5>
    <h6 v-else> No Message</h6>
    <p>{{uppercaseMessage()}}</p>
    <ul>
      <li v-for="task in tasks"
      :key="task.name">
      <div>{{task.name}}</div>
      <small>due {{task.dueDate}}
        at {{task.dueTime}}
      </small> 
      </li>
    </ul>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
    message:'',
    tasks: [{
      name:"go to shop",
      dueDate:"2019/02/12",
      dueTime:"18.09"
    },
    {
      name:"get some fruits",
      dueDate:"2019/02/13",
      dueTime:"17.60"
    }]
    }
  },
  methods: {
    clearMessage(){
      this.message=""
    },
    alertMessage() {
      alert(this.Message="Succes")
    },
    handleKeyup(e) {
      // console.log(e)
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
<style> 
    .border-grey {
      border: 1px solid grey;
    }
</style>