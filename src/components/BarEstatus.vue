<template>
  <div class="container-status">
    <div
      class="container-status__status"
      v-for="(status, indexStatus) in statusMatricula"
      :key="indexStatus"
    >
      <p>{{ status.nome }}</p>
      <div
        class="container-status__status__bar-color"
        :style="{ background: `${status.cor}`} "
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BarEstatus',
  props: {
    statusMatricula: {
      type: Array,
      default: () => []
    }
  },
  created () {
  }
})
</script>

<style
  scoped
  lang="scss"
>

.container-status {
  display: flex;
  overflow: auto;
  width: 100%;

  width: 100%;

  &__status {
    align-items: center;
    color: #3E464E;
    display: flex;
    flex-direction: column;
    font-weight: 500;
    justify-content: center;
    margin: 25px 29px 25px 0;
    width: max-content;

    p {
      margin: 0 0 5px 0;
    }

    &__bar-color {
      border-radius: 8px;
      height: 6px;
      width: 90px;
    }
  }
}

</style>
