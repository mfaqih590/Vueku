<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
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
      <q-btn-dropdown label="Setting " elevated class="bg-white text-primary">
      <!-- <q-list>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Photos</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Videos</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup @click="onItemClick">
          <q-item-section>
            <q-item-label>Articles</q-item-label>
          </q-item-section>
        </q-item>
      </q-list> -->
    </q-btn-dropdown>
        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-primary"
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
        <q-item clickable tag="a" href="/#/login">
          <q-item-section avatar>
            <q-icon name="face" style="color : white"/>
          </q-item-section>
          <q-item-section>
            <q-item-label style="color : white">LOGIN</q-item-label>
            <q-item-label caption style="color : white">Login Account</q-item-label>
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
