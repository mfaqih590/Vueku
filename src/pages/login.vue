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
      <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" 
      hint="Password" label="Your Password *">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      </q-card-section>
      <div>
        <q-card-section>
        <q-btn class="full-width" label="Sign In" type="submit" color="primary"/>
        </q-card-section>
        <q-item-label id="font" class="flex flex-center">OR</q-item-label>
        <q-card-section>
        <router-link to="/register"><q-btn class="full-width" color="red"
        label="Sign up"/>
        </router-link>
        </q-card-section>
      </div>
    </q-form>
    </q-card>
  </div>
</template>

<style scoped>
#font {
    font-size : 10px;
    font-family: times-new-roman;
    color: red
  }
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
      password: "",
      isPwd: true
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