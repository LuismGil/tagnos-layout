<template>
  <div class="container-matricula">
    <q-card>
      <q-tabs
        v-model="tab"
        dense
        class="container-matricula__tabs"
        active-color="primary"
        indicator-color="white"
        align="justify-left"
        narrow-indicator
        no-caps
      >
        <q-tab
          v-for="(tab, tabIndex) in listaTabs"
          :key="tabIndex"
          :name="tab.name"
          :label="tab.label"
          class="container-matricula__tabs__tab"
        />
      </q-tabs>

      <q-separator />

      <q-tab-panels
        v-model="tab"
        animated
        class="container-matricula__tab-panels"
      >
        <q-tab-panel name="informacoesAluno">
         <div class="container-matricula__tab-panels__panel-aluno">
          <div class="container-matricula__tab-panels__panel-aluno__foto">
            <img src="/src/assets/img/m header.png" alt="">
          </div>
          <div class="container-matricula__tab-panels__panel-aluno__cards">
            <div class="container-matricula__tab-panels__panel-aluno__cards__info-aluno">
              infoAluno
            </div>
            <div class="container-matricula__tab-panels__panel-aluno__cards__endereco-aluno">
              endereco Aluno
            </div>
          </div>
         </div>
        </q-tab-panel>

        <q-tab-panel name="filiacao">
          filiacao inputs
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ContainerInfoMatricula',
  components: {
  },
  data () {
    return {
      tab: 'mails',
      listaTabs: [
        {
          name: 'informacoesAluno',
          label: 'Informações do Aluno'
        },
        {
          name: 'filiacao',
          label: 'Filiação'
        }
      ],
      listaPais: [
        {
          nome: 'JOÃO CARLOS DA SILVEIRA RODRIGUEZ',
          inep: '353535345646',
          genero: 'MASCULINO',
          nomeSocial: 'JOÃO CARLOS DA SILVEIRA',
          nascimento: '21/08/1992',
          idade: '17'
        }
      ]
    }
  }
})
</script>

<style
  scoped
  lang="scss"
>
@import 'src/css/base/_mixins.scss';

.container-matricula {
  @include boxWhite;
  border-radius: 12px;

  &__tabs {
    &__tab {
      border: 1px solid #DFE0EB;
    }
  }

  .q-card {
    box-shadow: none;
    height: 372px;
  }

  .q-tab-panel {
    padding: 0;
  }

  &__tab-panels {
    /* background-color: $bgPrimary; */
    height: 336px;

    &__panel-aluno {
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: center;

      &__foto {
        align-items: center;
        border: 2px solid #DEE2E6;
        border-radius: 50%;
        height: 166px;
        display: flex;
        justify-content: center;
        width: 166px;

        img {
          border-radius: 50%;
          height: 152px;
          width: 152px;
        }
      }

      &__cards {
        &__info-aluno, &__endereco-aluno {
          @include boxWhite;
          border-radius: 12px;
          height: 132px;
          margin: 22px 0;
          width: 762px;

        }
        &__endereco-aluno {

        }
      }

      &__filiacao {

      }
    }
  }
}

</style>
