<template>
<qpage padding>
  <div class="q-pa-md">
    <div id="form" class="q-pa-md" style="max-width: 400px">
      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
      >
        <q-input
          filled
          v-model="Username"
          label="Username"
          hint="Username"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

        <q-input
          filled
          type="password"
          v-model="Password"
          label="Password "
          hint="Password"
          lazy-rules
          :rules="[
            val => val !== null && val !== '' || 'Please enter your password',
          ]"
        />

        <q-input
          filled
          type="date"
          v-model="TanggalMasuk"
          hint="Tanggal Masuk "
          lazy-rules
          :rules="[
            val => val !== null && val !== '' || 'Please enter your password',
          ]"
        />

        <q-input
          filled
          v-model="email"
          label="Email "
          hint="Email"
          lazy-rules
          :rules="[
            val => val !== null && val !== '' || 'Please enter your password',
          ]"
        />

        <div>
          <q-btn label="Login" type="submit" color="primary"/>
          
        </div>
      </q-form>
    </div>
  </div>
  </qpage>
</template>

<style scoped>

  #form{
    /* margin-top: 15%;  */
  }
  
</style>

<script>

import axios from 'axios'
export default {

  data(){
    return{
      Username : "",
      Password : "",
      TanggalMasuk : "",
      email : ""
    }
  },

  methods : {
    onSubmit(){
      let self = this;
      
    axios.post('http://localhost:3000/api/admins', {
    Username: self.Username,
    Password: self.Password,
    TanggalMasuk: self.TanggalMasuk,
    email: self.email
    })
    .then(function (response) {
      return  self.$router.push('/admin')
         
    })
    .catch(function (error) {
      console.log(error);
    });
    }
  }
}
</script>
