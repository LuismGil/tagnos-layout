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
      <q-tabs
        v-model="tab"
        inline-label
        outside-arrows
        mobile-arrows
        active-color="white"
        active-bg-color="primary"
        indicator-color="primary"
        class="matricula__tabs__wp"
        align="justify"
        no-caps
      >
        <q-tab
          v-for="(tab, tabIndex) in listaTabs"
          :key="tabIndex"
          :name="tab.name"
          :icon="tab.icon"
          :label="tab.label"
        />
      </q-tabs>
    </div>
    <div class="matricula__card">
      <container-info-matricula :matricula="matricula" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import ContainerInfoMatricula from 'src/components/ContainerInfoMatricula.vue'
import matriculas from 'src/mocks/matriculas.json'

export default defineComponent({
  name: 'EducacaoMatriculas',
  components: {
    ContainerInfoMatricula
  },
  data () {
    return {
      idMatricula: null,
      titulo: 'Consulta de Matrícula',
      telasAbertas: [
        { descricao: 'Ocorrências' },
        { descricao: 'Transferências' },
        { descricao: 'Matrículas', active: true },
        { descricao: 'Uniformes' }
      ],
      listaTabs: [
        {
          name: 'Aluno',
          icon: 'fa-regular fa-user',
          label: 'Aluno'
        },
        {
          name: 'Matrícula',
          icon: 'fa-regular fa-file-lines',
          label: 'Matrícula'
        },
        {
          name: 'Responsável',
          icon: 'fa-light fa-user-group',
          label: 'Responsável'
        },
        {
          name: 'Documentações',
          icon: 'fa-regular fa-folder',
          label: 'Documentações'
        },
        {
          name: 'Ocorrências',
          icon: 'fa-regular fa-message',
          label: 'Ocorrências'
        },
        {
          name: 'Uniformes',
          icon: 'fa-regular fa-tag',
          label: 'Uniformes'
        },
        {
          name: 'Dados Clínicos',
          icon: 'fa-regular fa-wave-pulse',
          label: 'Dados Clínicos'
        },
        {
          name: 'Observações',
          icon: 'fa-regular fa-clipboard',
          label: 'Observações'
        }
      ],
      tab: 'Aluno',
      listaMatriculas: matriculas,
      matricula: null
    }
  },
  created () {
    this.idMatricula = this.$route.params.id
    if (this.idMatricula) {
      this.matricula = this.listaMatriculas.filter((matricula) => matricula.id === this.idMatricula)[0]
    }
  }
})
</script>

<style
  scoped
  lang="scss"
>
@import 'src/css/base/_mixins.scss';
.matricula {
  padding: 25px 60px 15px;

  &__title {
    color: #3E464E;
    font-size: 32px;
    font-weight: 600;
  }

  &__telas {
    display: flex;
    flex-direction: row;
    gap: 33px;
    margin: 15px 0 22px;

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

  &__tabs {
    margin: 35px 0;

    &__wp {
      @include boxWhite;
      border-radius: 4px;
      color: #68717A !important;
      font-size: 16px;
      font-weight: 500;
    }

    &__wrapper {
      display: flex;
      justify-content: flex-start !important;
    }
  }

  &__card {
    background-color: white;
    border: 1px solid #DFE0EB;
    border-radius: 12px;
    height: 442px;
    padding: 25px;
  }
}

.active {
  color: #123760;
}

</style>
