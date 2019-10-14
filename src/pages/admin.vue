<template>
  <div class="q-pa-md">
    <q-table
      class="my-sticky-header-table"
      title="OWNERS"
      :data="admins"
      :columns="columns"
      row-key="name"
    />
    <!-- <q-btn round color="warning" icon="add" type="submit" href="/#/post"/> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      columns: [
        {
          name: 'Username',
          required: true,
          label: 'Username',
          align: 'left',
          field: row => row.Username,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        },
        {
          name: 'Password',
          required: true,
          label: 'Password',
          align: 'left',
          field: row => row.Password,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        },
        {
          type:"date",
          name: 'TanggalMasuk',
          required: true,
          label: 'Tanggal Masuk',
          align: 'left',
          field: row => row.TanggalMasuk,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        },
        {
          name: 'email',
          required: true,
          label: 'Email',
          align: 'left',
          field: row => row.email,
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
      admins: [
        {
          // nama : '',
          // email : ''
        }
      ]
    }
  },
  async mounted(){
    const response = await axios.get('http://localhost:3000/api/admins')
    this.admins=response.data
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
    background-color: #3CB371

  thead tr:first-child th
    position: sticky
    top: 0
    opacity: 1
    z-index: 1
</style>