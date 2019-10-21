<template>
  <div class="q-pa-md">
    <q-table 
      :data="employees"
      :columns="columns"
      row-key="name"
    />
    <!-- <q-btn round color="warning" icon="add" type="submit" href="/#/post"/> -->
  </div>
</template>

<script>
import employee from '../api/employee/index'
export default {
  data () {
    return {
      columns: [
        {
          name: 'Nama',
          required: true,
          label: 'Nama',
          align: 'left',
          field: row => row.Nama,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        },
        {
          name: 'JenisKelamin',
          required: true,
          label: 'Jenis Kelamin',
          align: 'left',
          field: row => row.JenisKelamin,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        },
        {
          name: 'TanggalLahir',
          required: true,
          label: 'Tanggal Lahir',
          align: 'left',
          field: row => row.TanggalLahir,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        },
        {
          name: 'NoTelepon',
          required: true,
          label: 'No Telepon',
          align: 'left',
          field: row => row.NoTelepon,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        },
        {
          name: 'Email',
          required: true,
          label: 'Email',
          align: 'left',
          field: row => row.Email,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        },
        {
          name: 'id',
          required: true,
          label: 'ID',
          align: 'left',
          field: row => row.id,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        }
         ],
      employees: [ ]
    }
  },  
  beforeCreate() {
      let self = this
      employee.getEmployee(window).then(function(result){
      self.employees = result
    })
  }  
  }

  
 
</script>
<style lang="sass">

.my-sticky-header-table
  /* max height is important */
  .q-table__middle
    max-height: 200px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th /* bg color is important for th; just specify one */
    background-color: #4682B4

  thead tr:first-child th
    position: sticky
    top: 0
    opacity: 1
    z-index: 1
</style>