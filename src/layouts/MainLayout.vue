<template>
  <q-layout view="lHh Lpr lFf">
    <main-header />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import MainHeader from 'src/layouts/MainHeader.vue'

export default defineComponent({
  name: 'MainLayout',
  components: {
    MainHeader
  }
})
</script>
