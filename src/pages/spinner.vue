<template>
  <q-page class="flex flex-center">
      <q-spinner-grid
        color="primary"
        size="40em"
        :thickness="10"
      />
      <div>
        <q-btn label="click" color="primary" @click="getData()"/>
      </div>
      <div> {{dataEmployee}}</div>
  </q-page>
</template>
<script>
import employee from '../api/employee/index'
export default {
  data () {
    return {
      dataEmployee: []
    }
  },
  methods: {
   getData() {
     let self = this
     employee.getEmployee(window).then(function(result){
       self.dataEmployee = result
     })
   }
  }
}
</script>
