<template>
  <q-drawer
    v-model="drawer"
    show-if-above
    :mini="miniState"
    @mouseover="miniState = false"
    @mouseout="miniState = true"
    mini-to-overlay
    :width="300"
    :breakpoint="500"
    style="background-color: #184372"
    class="menu text-white"
  >
    <div class="flex justify-center mt-[29px] mb-[33px]">
      <img src="../assets/img/Logo-municipio.svg" alt="" />
    </div>
    <q-list>
      <q-expansion-item
        v-for="(item, indexItem) in itensMenu"
        :key="indexItem"
        :icon="item.icon"
        :label="item.label"
      >
        <q-list
          class="m-[16px] rounded-[10px]"
          style="background-color: #245890"
        >
          <q-item
            class="rounded-[10px]"
            v-for="(itemSubMenu, indexItemSubMenu) in item.itensSubMenu"
            :key="indexItemSubMenu"
            :to="{ name: `${itemSubMenu.to}` }"
            active-class="q-item-no-link-highlighting"
            @click="selectItem(item, indexItemSubMenu)"
            :class="{ selected: itemSubMenu.selected }"
          >
            <q-item-section avatar>
              <q-icon :name="itemSubMenu.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ itemSubMenu.label }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-expansion-item>

      <q-item-section class="menu_footer flex column items-center w-full">
        <div
          class="mb-[20px]"
          style="border-top: 2px solid white; width: 80%"
        ></div>
        <q-btn class="btn_Sair w-[150px]" @click="sair">
          <q-icon name="exit_to_app" />
          &nbsp; <b>Sair</b></q-btn
        >
        <div class="mt-[20px]">
          <div class="info">
            <q-icon name="fa-regular fa-code-branch" />
            Versão > 1.38.0
          </div>
        </div>
      </q-item-section>
    </q-list>
  </q-drawer>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainMenu',
  components: {},
  data () {
    return {
      drawer: false,
      miniState: true,
      itensMenu: [
        {
          label: 'Matrículas',
          icon: 'fa-regular fa-file',
          itensSubMenu: [
            {
              to: 'matriculas',
              label: 'Matrículas',
              icon: 'fa-regular fa-file'
            },
            {
              to: '',
              label: 'Rematrículas',
              icon: 'fa-regular fa-file-plus'
            },
            {
              to: '',
              label: 'Pré-Matrículas',
              icon: 'fa-regular fa-user-check'
            },
            {
              to: '',
              label: 'Uniformes',
              icon: 'fa-regular fa-tag'
            },
            {
              to: '',
              label: 'Ocorrências',
              icon: 'fa-regular fa-clipboard'
            },
            {
              to: '',
              label: 'Histórico Escolar',
              icon: 'fa-regular fa-box-archive'
            },
            {
              to: '',
              label: 'Novo Histórico Escolar',
              icon: 'fa-regular fa-list'
            },
            {
              to: '',
              label: 'Transferências',
              icon: 'fa-regular fa-repeat'
            },
            {
              to: '',
              label: 'Fotos por Matrícula',
              icon: 'fa-regular fa-camera'
            }
          ]
        },
        {
          label: 'Manutenções',
          icon: 'fa-light fa-wrench'
        },
        {
          label: 'Lançamentos',
          icon: 'fa-regular fa-folder'
        },
        {
          label: 'Consultas',
          icon: 'fa-solid fa-search'
        }
      ]
    }
  },
  methods: {
    selectItem (item, index) {
      item.itensSubMenu.forEach((subItem) => {
        subItem.selected = false
      })

      item.itensSubMenu[index].selected = true
    }
  }
})
</script>

<style
  scoped
  lang="scss"
>
.q-router-link--exact-active {
  font-weight: 600;
}
.menu {
  position: relative;
}
.menu_footer {
  position: absolute;
  bottom: 30px;
}
.btn_Sair {
  background-color: #ffdde3;
  color: #e6492d;
  text-transform: capitalize;
}
.selected {
  background-color: #123760;
}
.q-router-link--exact-active:hover {
  background-color: #1C4B7D;
  border-left: 5px solid #123760;
}
</style>
