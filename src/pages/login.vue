<template>
  <div id="form" class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="onSubmit"
      
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="username"
        label="Your Username *"
        hint="Username"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
    <q-input
        filled
        type="password"
        v-model="password"
        label="Your Password *"
        hint="Password"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
      </div>
    </q-form>
  </div>
</template>

<style scoped>
#form {
    margin-top: 10%;
    margin-left: 30%;
}
</style>
<script>

import login_api from '../api/login/index'

export default {
  data () {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    onSubmit () {
      let self = this;
      login_api
        .userLogin(window, self.username, self.password)
        .then(function(result){
            console.log(result)
            if (result){
                self.$router.push("/");
            }
        })
        .catch(function(err){
            console.log(err);
        });
      }
}
}
</script>