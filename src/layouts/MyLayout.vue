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
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-primary"
    >
      <q-list>
        <q-item-label header style="color : white">Essential Links</q-item-label>
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
        <q-item clickable tag="a" target="_blank" href="https://chat.quasar.dev">
          <q-item-section avatar>
            <q-icon name="chat" style="color : white"/>
          </q-item-section>
          <q-item-section>
            <q-item-label style="color : white">Discord Chat Channel</q-item-label>
            <q-item-label caption style="color : white">chat.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://forum.quasar.dev">
          <q-item-section avatar>
            <q-icon name="record_voice_over" style="color : white"/>
          </q-item-section>
          <q-item-section>
            <q-item-label style="color : white">Forum</q-item-label>
            <q-item-label caption style="color : white">forum.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://twitter.quasar.dev">
          <q-item-section avatar>
            <q-icon name="rss_feed" style="color : white"/>
          </q-item-section>
          <q-item-section>
            <q-item-label style="color : white">Twitter</q-item-label>
            <q-item-label caption style="color : white">@quasarframework</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://facebook.quasar.dev">
          <q-item-section avatar>
            <q-icon name="public" style="color : white"/>
          </q-item-section>
          <q-item-section>
            <q-item-label style="color : white">Facebook</q-item-label>
            <q-item-label caption style="color : white">@QuasarFramework</q-item-label>
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
