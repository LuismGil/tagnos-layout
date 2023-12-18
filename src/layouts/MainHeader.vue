<template>
  <div class="header">
    <div class="header__info">
      <div> {{ bemVindo + " " + usuario.nome + " - " + usuario.matricula }} </div>
      <div> {{ municipio + " - " + data }} </div>
    </div>
    <div class="header__icons">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
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
      data: '17/12/2023'
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
  background-color: $bgPrimary;
  display: flex;
  justify-content: space-between;
  padding: 25px 60px;

  &__icons {
    display: flex;

    div {
      align-items: center;
      border: 1px solid black;
      border-radius: 50px;
      display: flex;
      justify-content: center;
      margin: 0 8px;
      height: 50px;
      width: 50px;
    }
  }
}
</style>
