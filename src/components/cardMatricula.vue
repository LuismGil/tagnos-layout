<template>
  <div class="container-status-card">
    <div class="container-status-card__bar" :style="{ backgroundColor: matricula.color}" />
    <div class="container-status-card__header">
      <div class="container-status-card__header__left">
        <q-icon
          name="far fa-eye"
          @click="visualizarMatricula(matricula)"
        />
        <p class="container-status-card__header__left__name">
          {{ matricula.nome }}
        </p>
        <q-separator vertical />
        <p class="container-status-card__header__left__matricula"> <span>MATRÍCULA</span> {{ matricula.id }}</p>
      </div>
      <q-icon
        :name="show ? 'far fa-chevron-up': 'fas fa-chevron-down'"
        @click="show=!show"
      />
    </div>
    <div
      v-if="show"
      class="container-status-card__body"
    >
      <div class="container-status-card__body__primaria">
        <span class="container-status-card__body__primaria__titulo">
          CHAMADA
        </span>
        <span class="container-status-card__body__primaria__conteudo">
          {{ matricula.chamada }}
        </span>
        <span class="container-status-card__body__primaria__titulo">
          Nível
        </span>
        <span class="container-status-card__body__primaria__conteudo">
          {{ matricula.nivel }}
        </span>
        <span class="container-status-card__body__primaria__titulo">
          Turno
        </span>
        <span class="container-status-card__body__primaria__conteudo">
          {{ matricula.turno }}
        </span>
        <span class="container-status-card__body__primaria__titulo">
          Turma
        </span>
        <span class="container-status-card__body__primaria__conteudo">
          {{ matricula.turma }}
        </span>
      </div>
      <div class="container-status-card__body__secundaria">
        <q-icon
          v-for="(icon, iconIndex) in icons"
          :key="iconIndex"
          :name="icon.name"
          :size="icon.size"
          :color="icon.color"
        />
        <!-- <q-icon name="fas fa-file"/>
        <q-icon name="fas fa-print"/>
        <q-icon name="far fa-times" size="32px"/>
        <q-icon name="fas fa-trash-alt"
          color="red"
        /> -->
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CardMatricula',
  props: {
    matricula: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      show: false,
      icons: [
        {
          name: 'fas fa-edit',
          color: '',
          size: ''
        },
        {
          name: 'far fa-file-alt',
          color: '',
          size: ''
        },
        {
          name: 'fas fa-print',
          color: '',
          size: ''
        },
        {
          name: 'far fa-times',
          color: '',
          size: '30px'
        },
        {
          name: 'far fa-trash-alt',
          color: 'red',
          size: ''
        }
      ]
    }
  },
  created () {
  },
  methods: {
    visualizarMatricula (matricula) {
      this.$router.push(`/matricula/${matricula.id}`)
    }
  }
})
</script>

<style
  scoped
  lang="scss"
>

.container-status-card {
  border-radius: 8px;
  border: 1px solid #D4D4D4;
  background: #FFF;
  color: #68717A;
  position: relative;
  margin: 0 0 15px 0;

  &__bar {
    background-color: blue;
    border-radius: 8px;
    height: 70px;
    position: absolute;
    left: 0;
    top: 0;
    width: 6px;
  }

  &__header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 25px;

    &__left {
      align-items: center;
      display: flex;

      .q-icon {
        margin: 0 12px 0 0;
      }

      &__name {
        font-weight: 600;
        width: 400px;
      }

      &__matricula {
        span {
          font-weight: 600;
        }
      }

      .q-separator {
        margin: 0 15px;
        color: blue;
      }
    }

    .q-icon {
      cursor: pointer;
      font-weight: 600;
    }
  }

  &__body {
    background-color: #D1E5F880;
    border-top: 1px solid #D4D4D4;
    padding: 25px;

    &__primaria {
      &__titulo {
        font-weight: 600;
        margin: 0 4px 0 0;
      }
      &__conteudo {
        margin: 0 15px 0 0;
      }
    }
    &__secundaria {
      font-size: 20px;
      margin: 25px 0 0 0;
      .q-icon {
        cursor: pointer;
        font-weight: 400;
        margin: 0 24px 0 0;
      }
    }
  }
}

</style>
