<template>
  <div class="q-pa-md">
    <router-link to="/post"><q-btn color="primary" icon="add_box"
    label="admin" class="sp"/>
    </router-link>
    <q-table
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
<style scoped></style>
