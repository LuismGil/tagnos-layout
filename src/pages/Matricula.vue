<template>
  <div class="matricula">
    <div class="matricula__title">
      {{ titulo }}
    </div>
    <div class="matricula__telas">
      <div
        v-for="(tela, indexTela) in telasAbertas"
        :key="indexTela"
        class="matricula__telas__wp"
      >
        <div :class="!tela.active ? 'matricula__telas__wp__x' : 'matricula__telas__wp__x active'">X</div>
        <div :class="!tela.active ? 'matricula__telas__wp__descricao' : 'matricula__telas__wp__descricao active'">
          {{ tela.descricao }}
        </div>
      </div>
    </div>
    <q-separator />
    <div class="matricula__tabs">

    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EducacaoMatriculas',
  components: {
  },
  data () {
    return {
      titulo: 'Consulta de Matrícula',
      telasAbertas: [
        { descricao: 'Ocorrências' },
        { descricao: 'Transferências' },
        { descricao: 'Matrículas', active: true },
        { descricao: 'Uniformes' }
      ]
    }
  }
})
</script>

<style
  scoped
  lang="scss"
>
.matricula {
  &__title {
    color: #3E464E;
    font-size: 32px;
    font-weight: 600;
    margin: 25px 60px 15px;
  }

  &__telas {
    display: flex;
    flex-direction: row;
    gap: 33px;
    margin: 0 60px 22px;

    &__wp {
      display: flex;
      flex-direction: row;
      gap: 10px;

      &__descricao, &__x {
        color: #A5A5A5;
        font-size: 16px;
        font-weight: 500;
      }

    }
  }
}

.active {
  color: #123760;
}

.q-separator {
  height: 1px;
  margin: 0 60px;
}

</style>
