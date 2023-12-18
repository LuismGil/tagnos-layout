<template>
  <q-layout view="lHh Lpr lFf">
    <main-header />
    <main-menu/>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent } from 'vue'
import MainHeader from 'src/layouts/MainHeader.vue'
import MainMenu from 'src/components/MainMenu.vue'

export default defineComponent({
  name: 'MainLayout',
  components: {
    MainHeader,
    MainMenu
  }
})
</script>

<style
  scoped
  lang="scss"
>
  .q-page-container {
    background-color: $bgSecondary;
    min-height: 100vh;
    /* padding: 100px 5% 90px 5%;

    @media (min-width: map-get($mediaQueries, 'md')) {
      padding: 100px 0 90px 370px ;
    } */
  }
</style>
