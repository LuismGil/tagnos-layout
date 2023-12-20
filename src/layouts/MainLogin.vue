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
  name: 'MainLogin',
  components: {}
})
</script>

<style
  scoped
  lang="scss"
>
.q-page-container {
  background-color: $bgSecondary;
  min-height: 100vh;
}
</style>
