<template>
  <div class="container-matricula">
    <q-card>
      <q-tabs
        v-model="tab"
        dense
        class="container-matricula__tabs"
        active-color="primary"
        indicator-color="white"
        align="left"
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
            <div>
              <img src="/src/assets/img/m header.png" alt="">
            </div>
          </div>
          <div class="container-matricula__tab-panels__panel-aluno__cards">
            <div class="container-matricula__tab-panels__panel-aluno__cards__info-aluno">
              <div class="container-matricula__tab-panels__panel-aluno__cards__info-aluno__wp1">
                <div class="container-matricula__tab-panels__panel-aluno__cards__info-aluno__wp1__nome">
                  {{ matricula.nome }}
                </div>
                <q-separator vertical />
                <div class="container-matricula__tab-panels__panel-aluno__cards__info-aluno__wp1__inep">
                  <span>INEP</span> {{ matricula.inep }}
                </div>
              </div>
              <div class="container-matricula__tab-panels__panel-aluno__cards__info-aluno__wp2">
                <div class="container-matricula__tab-panels__panel-aluno__cards__info-aluno__wp2__genero">
                  <span>GENERO</span>
                  {{ matricula.genero }}
                </div>
                <div class="container-matricula__tab-panels__panel-aluno__cards__info-aluno__wp2__nome">
                  <span>NOME SOCIAL</span>
                  {{ matricula.nomeSocial }}
                </div>
                <div class="container-matricula__tab-panels__panel-aluno__cards__info-aluno__wp2__nascimento">
                  <span>DATA NASCIMENTO </span>
                  {{ matricula.nascimento }}
                </div>
                <div class="container-matricula__tab-panels__panel-aluno__cards__info-aluno__wp2__idade">
                  <span>IDADE</span>
                  {{ matricula.idade }} ANOS
                </div>
              </div>
            </div>
            <div class="container-matricula__tab-panels__panel-aluno__cards__endereco-aluno">
              <div class="container-matricula__tab-panels__panel-aluno__cards__endereco-aluno__wp1">
                {{ matricula.endereco.nome }}
              </div>
              <div class="container-matricula__tab-panels__panel-aluno__cards__endereco-aluno__wp2">
                <div class="container-matricula__tab-panels__panel-aluno__cards__endereco-aluno__wp2__numero">
                  <span>NÚMERO</span>
                  {{ matricula.endereco.numero }}
                </div>
                <div class="container-matricula__tab-panels__panel-aluno__cards__endereco-aluno__wp2__bairro">
                  <span>BAIRRO</span>
                  {{ matricula.endereco.bairro }}
                </div>
                <div class="container-matricula__tab-panels__panel-aluno__cards__endereco-aluno__wp2__estado">
                  <span>CIDADE/ESTADO</span>
                  {{ matricula.endereco.cidade }}
                </div>
                <div class="container-matricula__tab-panels__panel-aluno__cards__endereco-aluno__wp2__cep">
                  <span>CEP</span>
                  {{ matricula.endereco.cep }}
                </div>
              </div>
            </div>
          </div>
         </div>
        </q-tab-panel>

        <q-tab-panel name="filiacao">
          <div class="container-matricula__tab-panels__panel-filiacao">
            <div
              v-for="(responsavel, indexResponsavel) in matricula.responsaveis"
              :key="indexResponsavel"
              class="container-matricula__tab-panels__panel-filiacao__card"
            >
              <div class="container-matricula__tab-panels__panel-filiacao__card__wp1">
                {{ responsavel.nome }}
              </div>
              <div class="container-matricula__tab-panels__panel-filiacao__card__wp2">
                <div>
                  {{ responsavel.tipoResponsavel }}
                </div>
                <div>
                  {{ responsavel.numeroContato }}
                </div>
                <div>
                  {{ responsavel.profissao }}
                </div>
              </div>
            </div>
          </div>
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
  props: {
    matricula: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      infoMatricula: null,
      tab: 'informacoesAluno',
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
      listaPais: []
    }
  },
  created () {
    this.infoMatricula = this.matricula
    console.log(this.infoMatricula)
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
    height: 336px;

    &__panel-aluno {
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: center;

      &__foto {

        margin: auto 35px;
        width: 15%;

        div {
          align-items: center;
          border: 2px solid #DEE2E6;
          border-radius: 50%;
          display: flex;
          height: 166px;
          justify-content: center;
          width: 166px;

          img {
            border-radius: 50%;
            height: 152px;
            width: 152px;
          }
        }

      }

      &__cards {
        width: 85%;

        &__info-aluno, &__endereco-aluno {
          @include boxWhite;
          background-color: #F8F8F8;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          height: 132px;
          margin: 22px 0;
          padding: 22px;
          width: auto;

        }

        &__info-aluno {
          &__wp1 {
            color: #3E464E;
            font-size: 16px;
            font-weight: 600;
            display: flex;
            flex-direction: row;
            gap: 10px;
            line-height: 28px;

            &__inep {
              span {
                color: #959EA7;
              }
            }
          }

          &__wp2 {
            display: flex;
            flex-direction: row;
            font-size: 16px;
            font-weight: 600;
            gap: 40px;
            height: 56px;
            justify-content: space-between;
            line-height: 28px;
            margin: 4px 0 0;

            &__genero, &__nome, &__nascimento, &__idade {
              display: flex;
              flex-direction: column;
            }

            span {
              color: #959EA7;
              font-size: 14px;
            }
          }
        }

        &__endereco-aluno {
          display: flex;
          flex-direction: column;

          &__wp1 {
            color: #3E464E;
            font-size: 16px;
            font-weight: 600;
          }

          &__wp2 {
            display: flex;
            flex-direction: row;
            font-size: 16px;
            font-weight: 600;
            gap: 40px;
            height: 56px;
            justify-content: space-between;
            line-height: 28px;
            margin: 4px 0 0;
            text-transform: uppercase;

            &__numero, &__bairro, &__estado, &__cep {
              display: flex;
              flex-direction: column;
            }

            span {
              color: #959EA7;
              font-size: 14px;
            }
          }

        }
      }
    }

    &__panel-filiacao {
      padding: 22px 0;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 40px;
      justify-content: space-between;

      &__card {
        background-color: #F8F8F8;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        font-weight: 600;
        height: 106px;
        line-height: 28px;
        padding: 23px;
        width: 48%;

        &__wp1 {
          color: #3E464E;
          font-size: 16px;
        }

        &__wp2 {
          color: #959EA7;
          font-size: 14px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin: 4px 0 0;
        }
      }
    }
  }
}

</style>
