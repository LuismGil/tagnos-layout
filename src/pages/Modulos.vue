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
        label="Entrar"
        size="md"
        icon="exit_to_app"
        unelevated
      />
    </div>
  </div>

  <h1 class="container-modulos">
    Módulos
  </h1>
  <div class="modulos-container">
    <div class="modulos-card">
      <q-card
        class="modulos-card__card"
        v-for="(modulo, moduloIndex) in listaModulos"
        :key="moduloIndex"
        :style="{border: `2px solid ${modulo.cor}`}"
      >
        <img :src="modulo.src" alt="modulo.alt">
        <div class="modulos-card__card__descricao">{{ modulo.descricao }}</div>
        <q-icon class="modulos-icon__2" name="fa-regular fa-chevron-right" />
      </q-card>
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
          descricao: 'SECRETARIA ESCOLAR',
          src: '',
          name: '',
          cor: '#C41B2C'
        },
        {
          descricao: 'DIÁRIO DE CLASSE',
          icon: 'fa-thin fa-box-archive',
          name: '',
          cor: '#D6A80F'
        },
        {
          descricao: 'COORDENAÇÃO PEDAGÓGICA',
          icon: 'fa-thin fa-box-archive',
          name: '',
          cor: '#149224'
        },
        {
          descricao: 'SALA DE TECNOLOGIA',
          icon: 'fa-thin fa-box-archive',
          name: '',
          cor: '#5F096D'
        },
        {
          descricao: 'SECRETARIA DE EDUCAÇÃO',
          icon: 'fa-thin fa-box-archive',
          name: '',
          cor: '#7A0A0A'
        },
        {
          descricao: 'CONTROLE FINANCEIRO',
          icon: 'fa-thin fa-box-archive',
          name: '',
          cor: '#0069A8'
        },
        {
          descricao: 'CONTROLE DE BIBLIOTÉCA',
          icon: 'fa-thin fa-box-archive',
          name: '',
          cor: '#635DC9'
        },
        {
          descricao: 'TRANSPORTE ESCOLAR',
          icon: 'fa-thin fa-box-archive',
          name: '',
          cor: '#E76E00'
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
.modulos-container{
  width: 100vw;
  display: flex;
  justify-content: center;
  width: 100%;
}
.modulos-card{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 59px;
  width: 80%;
  margin-bottom: 44px;
  &__card{
    cursor: pointer;
    display: flex;
    height: 106px;
    width: 501px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 40px;
    border-radius: 12px;
    &__descricao{
      font-size: 16px;
      font-weight: bold;
    }
  }
}
.container-modulos{
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  color: #3E464E;
  margin-top: 70px;
  margin-bottom: 70px;
}
.modulos-icon{
  margin-left: 36px;
  font-size: 65px;
}
.modulos-icon__2{
  font-size: 20px;
  font-weight: bold;
}
</style>
