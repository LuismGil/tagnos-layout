<template>
  <div class="container-login">
    <div class="container-login__left">
      <div class="container-login__left__conteudo">
        <img src="/src/assets/img/logo_tagnos.svg" alt="">
        <q-separator vertical/>
        <img src="/src/assets/img/logo_municipio.svg" alt="">
      </div>
      <div class="container-login__left__versao">
        <q-icon name="fal fa-code-branch" color="white"/>
        <p>Versão > {{ versao }} </p>
      </div>
    </div>
    <div class="container-login__right">
      <div class="container-login__right__conteudo">
        <p class="container-login__right__conteudo__titulo">
          Login
        </p>
        <p class="container-login__right__conteudo__sub-titulo">
          Não possui uma conta?
          <span>
            Cadastrar uma conta
          </span>
        </p>
        <img src="/src/assets/img/Group302.svg" alt="">
        <p class="container-login__right__conteudo__text-senha">
          Esqueci a senha
        </p>
        <app-input
          ref="cpf"
          v-model="login.cpf"
          :label="'CPF'"
          :placeholder="'Seu CPF'"
          :color-prop-prepend="'primary'"
        />
        <app-input
          ref="senha"
          v-model="login.password"
          :label="'Senha'"
          :placeholder="'Sua Senha'"
          :type="isPwd ? 'password' : 'text'"
          :icon-name-append="isPwd ? 'fas fa-eye' : 'fas fa-eye-slash'"
          :color-prop-append="'gray'"
          @click:icon-append="isPwd = !isPwd"
          class="container-login__right__conteudo__input"
        />
        <q-btn
          color="primary"
          label="Entrar "
          padding="xs xl"
          no-caps
          @click="entrar()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import AppInput from 'src/components/AppInput.vue'

export default defineComponent({
  name: 'MainLogin',
  components: {
    AppInput
  },
  data () {
    return {
      versao: '1.0.0',
      login: {
        cpf: null,
        password: null
      },
      isPwd: true
    }
  },
  methods: {
    entrar () {
      this.$router.push('/modulos')
    }
  }
})
</script>

<style
  scoped
  lang="scss"
>
.container-login {
  column-count: 2;
  gap: 0;

  &__left {
    align-items: center;
    background: rgba(18, 55, 96, 0.81);
    background-image: url("../assets/img/02-0519-0584-campo-grande-vr.png");
    background-repeat: no-repeat;
    background-blend-mode: darken;
    background-size: cover;
    display: flex;
    flex-direction: column;
    font-size: 32px;
    justify-content: center;
    opacity: 1;
    height: 100vh;

    &__conteudo {
      display: flex;
      margin: 0 0 100px 0;

      img {
        padding: 25px;
        width: 200px;
      }

      .q-separator {
        background: white;
      }
    }

    &__versao {
      align-items: center;
      color: white;
      display: flex;
      font-size: 12px;
      justify-content: center;

      p {
        margin: 0 0 0 8px;
      }
    }

  }

  &__right {
    align-items: center;
    background: #123760;
    background-image: url("../assets/img/LINHAS_DO_FUNDO.svg");
    background-position: right;
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100%;

    &__conteudo {
      align-items: center;
      background-color: white;
      border-radius: 6px;
      box-shadow: 0px 4px 56px 0px rgba(0, 0, 0, 0.04), 0px 12px 16px 0px rgba(0, 0, 0, 0.04);
      display: flex;
      flex-direction: column;
      height: 474px;
      padding: 45px 30px;
      position: relative;
      width: 498px;

      &__titulo {
        color: #3E464E;
        text-align: center;
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }

      &__sub-titulo {
        color: #3E464E;
        text-align: center;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 26px;
        margin: 12px 0;

        span {
          color: #337DCE;
          text-decoration: underline;
        }

      }

      img {
        margin: 12px 0;
      }

      &__text-senha {
        bottom: 285px;
        right: 30px;
        color: #337DCE;
        font-weight: 600;
        position: absolute;
        text-decoration: underline;
      }

      &__input {
        margin: 15px 0 35px 0;
      }
    }
  }
}
</style>
