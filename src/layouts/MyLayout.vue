<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-secondary">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />
        <q-toolbar-title>
          Muhammad Faqih
        </q-toolbar-title>
        <q-btn-dropdown label="AKUN" 
        elevated class="bg-white text-secondary">
        <q-list>
          <q-item clickable v-close-popup 
          tag="a" href="/#/login">
            <q-item-section>
              <q-item-label id="font">Log Out</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :width="200"
      show-if-above
      bordered
      content-class="bg-secondary"
    >
      <q-list>
        <q-item-label header style="color : white">MENU</q-item-label>
        <q-item clickable tag="a" href="/#/">
          <q-item-section avatar>
            <q-icon name="public" style="color : white"/>
          </q-item-section>
          <q-item-section>
            <q-item-label style="color : white">HOME</q-item-label>
            <q-item-label caption style="color : white">-----</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="/#/employee">
          <q-item-section avatar>
            <q-icon name="face" style="color : white"/>
          </q-item-section>
          <q-item-section>
            <q-item-label style="color : white">EMPLOYEE</q-item-label>
            <q-item-label caption style="color : white">Data Employee</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="/#/spinner">
          <q-item-section avatar>
            <q-icon name="warning" style="color : white"/>
          </q-item-section>
          <q-item-section>
            <q-item-label style="color : white">SPINNER</q-item-label>
            <q-item-label caption style="color : white">_________</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="/#/get">
          <q-item-section avatar>
            <q-icon name="book" style="color : white"/>
          </q-item-section>
          <q-item-section>
            <q-item-label style="color : white">GET</q-item-label>
            <q-item-label caption style="color : white">Get Data Owner</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="/#/post">
          <q-item-section avatar>
            <q-icon name="add" style="color : white"/>
          </q-item-section>
          <q-item-section>
            <q-item-label style="color : white">POST</q-item-label>
            <q-item-label caption style="color : white">Post Data</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" href="/#/admin">
          <q-item-section avatar>
            <q-icon name="face" style="color : white"/>
          </q-item-section>
          <q-item-section>
            <q-item-label style="color : white">GET</q-item-label>
            <q-item-label caption style="color : white">Get Data Admin</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<style scoped>
#font {
    font-size : 15px;
    font-family: times-new-roman;
    color: #26A69A
  }
</style>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
