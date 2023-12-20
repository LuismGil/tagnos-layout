<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainModulos',
  components: {
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
