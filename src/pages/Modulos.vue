<template>
  <div class="header">
    <div class="header__usuario">
      <img
        src="../assets/img/Logo-municipio-azul.svg"
        alt=""
      >
      <div class="header__usuario__info">
        <div class="header__usuario__info__user" >
          {{ bemVindo + " " + usuario.nome }}
          <span>{{ usuario.matricula }}</span>
        </div>
        <div class="header__usuario__info__municipio">
          {{ municipio }}
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
        label="Sair"
        size="md"
        icon="exit_to_app"
        unelevated
        @click="sair()"
      />
    </div>
  </div>
  <h1 class="container-modulos">
    Módulos
  </h1>
  <div class="modulos-container">
    <div class="modulos-container__modulos-card">
      <router-link
        class="modulos-container__modulos-card__card"
        v-for="(modulo, moduloIndex) in listaModulos"
        :key="moduloIndex"
        :style="{border: `2px solid ${modulo.cor}`}"
        :to="{ name: `${modulo.name}` }"
      >
      <div>
        <div class="modulos-container__modulos-card__card__left flex-col">
          <div class="modulos-container__modulos-card__card__border"
              @mouseover="onMouseOver(modulo)"
              @mouseout="onMouseOut(modulo)">
          <img
              class="modulos-container__modulos-card__card__left__icon"
              :src="modulo.hovered ? modulo.hoverSrc : modulo.src"
              :alt="modulo.alt"
          />
          </div>
      <div class="modulos-container__modulos-card__card__descricao">
        {{ modulo.descricao }}
      </div>
</div>
  </div>
      </router-link>
    </div>
  </div>

</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainModulos',
  components: {},
  data () {
    return {
      bemVindo: 'Bem-vindo de volta,',
      usuario: {
        nome: 'Pedro Henrique'
      },
      municipio: 'Prefeitura - Apresenteação',
      iconsHeader: [
        {
          class: 'header__icons__notificacoes',
          name: 'fa-light fa-gear fa-xl'
        }
      ],
      listaModulos: [
        {
          descricao: 'Secretaria Escolar',
          src: '/img/iconsModulos/icon-SecretariaEscolar.svg',
          hoverSrc: '/img/iconsModulos/icon-SecretariaEscolar-branco.svg',
          name: 'matriculas',
          hovered: false
        },
        {
          descricao: 'Diário de Classe',
          src: '/img/iconsModulos/icon-DiarioClasse.svg',
          hoverSrc: '/img/iconsModulos/icon-DiarioClasse-branco.svg',
          name: '',
          hovered: false
        },
        {
          descricao: 'Coordenação Pedagógica',
          src: '/img/iconsModulos/icon-CoordenacaoPedagogica.svg',
          hoverSrc: '/img/iconsModulos/icon-CoordenacaoPedagogica-branco.svg',
          name: '',
          hovered: false
        },
        {
          descricao: 'Sala de Tecnologia',
          src: '/img/iconsModulos/icon-SalaTecnologia.svg',
          hoverSrc: '/img/iconsModulos/icon-SalaTecnologia-branco.svg',
          name: '',
          hovered: false
        },
        {
          descricao: 'Secretaria de Educação',
          src: '/img/iconsModulos/icon-SecretariaEducacao.svg',
          hoverSrc: '/img/iconsModulos/icon-SecretariaEducacao-branco.svg',
          name: '',
          hovered: false
        },
        {
          descricao: 'Controle Financeiro',
          src: '/img/iconsModulos/icon-ControleFinanceiro.svg',
          hoverSrc: '/img/iconsModulos/icon-ControleFinanceiro-branco.svg',
          name: '',
          hovered: false
        },
        {
          descricao: 'Controle de Bibliotéca',
          src: '/img/iconsModulos/icon-ControleBiblioteca.svg',
          hoverSrc: '/img/iconsModulos/icon-ControleBiblioteca-branco.svg',
          name: '',
          hovered: false
        },
        {
          descricao: 'Transporte Escolar',
          src: '/img/iconsModulos/icon-TransporteEscolar.svg',
          hoverSrc: '/img/iconsModulos/icon-TransporteEscolar-branco.svg',
          name: '',
          hovered: false
        }
      ]
    }
  },
  methods: {
    onMouseOver (modulo) {
      modulo.hovered = true
    },
    onMouseOut  (modulo) {
      modulo.hovered = false
    },
    sair () {
      this.$router.push('login')
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
  color: #184372;
  height: 164px;
  display: flex;
  justify-content: space-between;
  padding: 25px 195px;

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
    align-items: center;
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
      width: 130px;
    }
  }

}

.container-modulos{
  text-align: center;
  font-size: 48px;
  font-weight: bold;
  color: #184372;
  margin-top: 24px;
  margin-bottom: 45px;
}
.modulos-container{
  display: flex;
  justify-content: center;
  width: 100%;

  &__modulos-card {
    display: flex;
    flex-wrap: wrap;
    gap: 59px;
    justify-content: center;
    margin-bottom: 44px;
    width: 502px;

    @media (min-width: map-get($mediaQueries, 'xs')) {
      width: 1080px;
      height: 600px;
    }

    &__card {
      align-items: center;
      cursor: pointer;
      display: flex;

      &__descricao{
        display: flex;
        font-size: 22px;
        font-weight: bold;
        width: 200px;
        text-align: center;
        text-transform: uppercase;
        color: #184372;
        cursor: default;
        }

        &__border{
          width: 184px;
          height: 184px;
          border: 2px solid #184372;
          border-radius: 50%;
          margin-bottom: 11px;
          position: relative;
          padding: 50px;
          overflow: hidden;
          transition: all 0.3s;
        }

        &__border:hover {
          background-color: #184372;
          transition: all 0.3s;
        }

        &__left {
          align-items: center;
          display: flex;

          &__icon {
          width: 86px;
          height: 72px;
          transition: opacity 0.5s ease-in-out;
          position: absolute;
          left: 50px;
          top: 50px;
        }
      }
    }
  }
}
</style>
