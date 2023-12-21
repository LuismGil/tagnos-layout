<template>
  <div class="header">
    <div class="header__info">
      <div class="header__info__usuario">
        <div class="header__info__usuario__user">
          {{ bemVindo + " " + usuario.nome + " - " }}
          <span>{{ usuario.matricula }}</span>
        </div>
        <div class="header__info__usuario__municipio">
          {{ municipio + " - " + data }}
        </div>
      </div>
      <div class="header__info__icons">
        <router-link
          v-for="(icon, indexIcon) in iconsHeader"
          :key="indexIcon"
          :to="{name: `${icon.to}`}"
        >
          <div :class="icon.class">
            <q-icon :name="icon.name" />
          </div>
        </router-link>
        <div class="header__info__icons__foto">
          <img src="src/assets/img/header.png" />
        </div>
      </div>
    </div>
    <div class="header__info-sistema">
      <div
        class="header__info-sistema__item"
        v-for="(info, indexInfo) in infoSistema"
        :key="indexInfo"
      >
        <q-icon :name="info.icon" />
        <div>{{ info.descricao }}</div>

      </div>
    </div>
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
          name: 'fa-light fa-bell',
          to: ''
        },
        {
          class: 'header__icons__modulos',
          name: 'fa-light fa-grid-2',
          to: 'modulos'
        },
        {
          class: 'header__icons__mensagens',
          name: 'fa-regular fa-message',
          to: ''
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
  &__info {
    @include boxWhite;
    color: #3E464E;
    display: flex;
    height: 97px;
    justify-content: space-between;
    padding: 25px 60px;

    &__usuario {
      font-size: 16px;

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

    &__icons {
      display: flex;
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
    }
  }

  &__info-sistema {
    @include boxWhite;
    background-color: #123760;
    color: $white;
    display: flex;
    font-size: 12px;
    font-weight: 400;
    height: 39px;
    justify-content: space-between;
    padding: 10px 60px;

    &__item {
      align-items: center;
      display: flex;
      flex-direction: row;
      gap: 10px;
    }
  }
}
</style>
