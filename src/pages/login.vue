<template>
  <div id="form" class="flex flex-center" style="max-width: 300px">
    <q-card style="width:300px">
    <q-form
      @submit="onSubmit"
      
      class="q-gutter-md"
    >
      <q-card-section>
      <q-input
        filled
        v-model="username"
        label="Your Username *"
        hint="Username"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      </q-card-section>
      <q-card-section>
    <q-input
        filled
        type="password"
        v-model="password"
        label="Your Password *" 
        hint="Password"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      </q-card-section>
      <div>
        <q-card-section>
        <q-btn class="full-width" label="Submit" type="submit" color="primary"/>
        </q-card-section>
      </div>
    </q-form>
    </q-card>
  </div>
</template>

<style scoped>
#form {
    margin-top: 10%;
    margin-left: 40%;
    border:15px solid #4682B4;
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