<template>
  <div class="q-pa-md">
    <q-item-label id="font" class="flex flex-center">PLEASE INPUT</q-item-label>
    <div id="form" class="q-pa-md" style="max-width: 400px">
      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
      >
        <q-input
          filled
          v-model="username"
          label="Username"
          hint="Username"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />
        <q-input
          filled
          v-model="email"
          label="Email"
          hint="Email"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />
  
        <q-input
          filled
          type="password"
          v-model="password"
          label="Password "
          hint="Password"
          lazy-rules
          :rules="[
            val => val !== null && val !== '' || 'Please enter your password',
          ]"
        />
        <div>
          <q-btn class="full-width" label="Submit" type="submit" color="red"/>
        </div>
        <div>
          <q-item-label id="or" class="flex flex-center">OR</q-item-label>
        </div>
        <div>
          <router-link to="/login"><q-btn class="full-width" color="red"
          label="Sign In"/></router-link>
        </div>
      </q-form>
    </div>
  </div>
</template>

<style scoped>
  #or {
    font-size : 15px;
    font-family: times-new-roman;
    color: black
  }
  #font {
    font-size : 50px;
    font-family: times-new-roman;
    color: #26A69A
  }
    #form {
    margin-top: 0%;
    margin-left: 36.4%;
    border:15px solid #26A69A
  }
  
</style>

<script>

import axios from 'axios'
export default {

  data(){
    return{
      username : "",
      email:"",
      password : ""
    }
  },
  
  methods : {
    onSubmit(){
      let self = this;
      
    axios.post('http://localhost:3000/api/Users', {
    username: self.username,
    email: self.email,
    password: self.password,
    })
    .then(function (response) {
      return  self.$router.push('/login')
         
    })
    .catch(function (error) {
      console.log(error);
    });
    }
  }
}
</script>