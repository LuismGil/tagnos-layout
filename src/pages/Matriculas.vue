<template>
  <div class="container-matriculas">
    <h1>
      Controle de Matrículas
    </h1>
    <q-separator />
    <q-input
      outlined
      v-model="text"
      :dense="true"
      :placeholder="'Pesquisar Aluno'"
      bg-color="white"
    >
      <template v-slot:prepend>
        <q-icon name="fa-regular fa-magnifying-glass" />
      </template>
    </q-input>
    <bar-estatus
      :status-matricula="statusMatricula"
    />
    <div
      v-for="(matricula, indexMatricula) in listaMatricula"
      :key="indexMatricula"
    >
      <card-matricula :matricula="matricula" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import BarEstatus from 'src/components/BarEstatus.vue'
import cardMatricula from 'src/components/cardMatricula.vue'
import mockMatriculas from 'src/mocks/matriculas.json'

export default defineComponent({
  name: 'EducacaoMatriculas',
  components: {
    BarEstatus,
    cardMatricula
  },
  data () {
    return {
      text: null,
      statusMatricula: [
        {
          id: 1,
          nome: 'Aprovado',
          cor: '#1A8428'
        },
        {
          id: 2,
          nome: 'Aprovado Conselho',
          cor: '#691177'
        },
        {
          id: 3,
          nome: 'Cursando',
          cor: '#D6A80F'
        },
        {
          id: 4,
          nome: 'Exame',
          cor: '#123760'
        },
        {
          id: 5,
          nome: 'Reprovado',
          cor: '#C41B2C'
        },
        {
          id: 6,
          nome: 'Reprovado Falta',
          cor: '#871010'
        }
      ],
      listaMatricula: mockMatriculas
    }
  }
})
</script>

<style
  scoped
  lang="scss"
>
  .container-matriculas {
    padding: 0 68px 0 62px;
    h1 {
      color: #3E464E;
      font-size: 32px;
      font-weight: 600;
    }

    .q-separator {
      color: #DFE0EB;
      margin: 15px 0 32px 0;
    }

    .q-input {
      .q-icon {
        color: #DEE2E6;
        font-weight: 300;
      }
    }
  }
</style>
