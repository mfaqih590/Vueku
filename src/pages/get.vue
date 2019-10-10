<template>
  <div class="q-pa-md">
    <q-table
      class="my-sticky-header-table"
      title="Treats"
      :data="data"
      :columns="columns"
      row-key="name"
      flat
      bordered
    />
  </div>
</template>
<script>
export default {
  data () {
    return {
      columns: [
        { name: 'Nama', required: true, label: 'Nama', align: 'left',
          field: row => row.name, format: val => `${val}`, sortable: true },
        { name: 'JenisKelamin', align: 'center', label: 'Jenis Kelamin', field: 'JenisKelamin', sortable: true},
        { name: 'TanggalLahir', label: 'Tanggal Lahir ', field: 'TanggalLahir', sortable: true },
        { name: 'NoTelepon', label: 'No Telepon', field: 'NoTelepon', sortable: true },
        { name: 'Email', label: 'Email', field: 'Email', sortable: true },
        { name: 'id', label: 'ID', field: 'id', sortable: true}
      ],

      data: [ ]
    }
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
    background-color: #c1f4cd

  thead tr:first-child th
    position: sticky
    top: 0
    opacity: 1
    z-index: 1
</style>