<template>
  <div class="header">
    <div class="header__usuario">
      <img
        src="../assets/img/Logo-municipio-azul.svg"
        alt=""
      >
      <div class="header__usuario__info">
        <div class="header__usuario__info__user" >
          {{ bemVindo + " " + usuario.nome + " - " }}
          <span>{{ usuario.matricula }}</span>
        </div>
        <div class="header__usuario__info__municipio">
          {{ municipio + " - " + data }}
        </div>
      </div>
    </div>
    <div class="header__icons">
      <div
        v-for="(icon, indexIcon) in iconsHeader"
        :key="indexIcon"
      >
        <div :class="icon.class">
          <q-icon :name="icon.name" />
        </div>
      </div>
      <div class="header__icons__foto">
        <img src="src/assets/img/header.png" />
      </div>
      <q-btn
        class="header__icons__btn-sair"
        label="Entrar"
        size="md"
        icon="exit_to_app"
        unelevated
      />
    </div>
  </div>
  <div>
    hola
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainHeader',
  components: {},
  data () {
    return {
      bemVindo: 'Bem-vindo de volta,',
      usuario: {
        nome: 'Pedro Henrique',
        matricula: '231239213'
      },
      municipio: 'Campo Grande',
      data: '17/12/2023',
      iconsHeader: [
        {
          class: 'header__icons__notificacoes',
          name: 'fa-light fa-bell'
        }
      ],
      infoSistema: [
        {
          icon: 'fa-regular fa-cube',
          descricao: 'Módulo > Secretária Escolar'
        },
        {
          icon: 'fa-light fa-database',
          descricao: 'Entidade > 1070 - Escola Apresentação texto grande'
        },
        {
          icon: 'fa-light fa-server',
          descricao: 'Servidor > TDR Apresentação'
        }
      ]
    }
  }
})
</script>
<style
  scoped
  lang='scss'
>
@import 'src/css/base/_mixins.scss';

.header {
  @include boxWhite;
  align-items: center;
  color: #3E464E;
  height: 164px;
  display: flex;
  justify-content: space-between;
  padding: 25px 60px;

  &__usuario {
    align-items: center;
    display: flex;
    font-size: 16px;

    &__info {
      margin: 0 0 0 70px;

      &__user {
        font-weight: 500;

        span {
          font-weight: 300;
        }
      }

      &__municipio {
        font-weight: 300;
      }
    }

  }

  &__icons {
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 10px;

    div {
      align-items: center;
      border: 1px solid #68717A;
      border-radius: 32px;
      display: flex;
      justify-content: center;
      height: 50px;
      width: 50px;

      div {
        border: none;
        height: 24px;
        width: 24px;
      }
    }

    &__foto {
      img {
        border-radius: 32px;
        height: 44px;
        width: 44px;
      }
    }

    &__btn-sair {
      background-color: #ffdde3;
      color: #e6492d;
      height: 20px;
      text-transform: capitalize;
      width: 150px;
    }
  }
}
</style>
