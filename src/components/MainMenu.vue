<template>
  <q-drawer
    show-if-above
    bordered
    style="background-color: #337DCE;"
    class="text-white"
  >
    <div class="flex justify-center mt-[29px] mb-[33px]">
      <img src="../assets/img/Logo-municipio.svg" alt="">
    </div>
    <q-list>
      <q-expansion-item
        v-for="(item, indexItem) in itensMenu"
        :key="indexItem"
        :icon="item.icon"
        :label="item.label"
      >
        <q-list
          class="q-pl-lg m-[16px] rounded-[10px]"
          style="background-color: #245890;"
        >
          <q-item
            v-for="(itemSubMenu, indexItemSubMenu) in item.itensSubMenu"
            :key="indexItemSubMenu"
            :to="{ name: `${itemSubMenu.to}` }"
            active-class="q-item-no-link-highlighting"
          >
            <q-item-section avatar>
              <q-icon
                :name="itemSubMenu.icon"
              />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ itemSubMenu.label }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-expansion-item>
      <q-btn
        class="w-[150px] h-[44px] text-red"
        style="position:absolute; bottom: 6%; left: 50%; transform: translateX(-50%); background-color: #FFDDE3; text-transform: capitalize;"
      >
        <q-icon
          name="exit_to_app"
        /> &nbsp;
        <b>
          Sair
        </b>
      </q-btn>
      <div class="flex" style="position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%);">
        <img src="../assets/icons/icon-versao.svg" alt="">&nbsp; Versão > 1.38.0
      </div>
    </q-list>
  </q-drawer>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainMenu',
  components: {
  },
  data () {
    return {
      itensMenu: [
        {
          label: 'Matrículas',
          icon: 'fa-solid fa-file',
          itensSubMenu: [
            {
              to: 'matriculas',
              label: 'Matrículas',
              icon: 'fa-regular fa-file'
            },
            {
              to: 'matriculas',
              label: 'Matrículas',
              icon: 'fa-regular fa-file'
            },
            {
              to: 'matriculas',
              label: 'Matrículas',
              icon: 'fa-regular fa-file'
            },
            {
              to: 'matriculas',
              label: 'Matrículas',
              icon: 'fa-regular fa-file'
            },
            {
              to: 'matriculas',
              label: 'Matrículas',
              icon: 'fa-regular fa-file'
            },
            {
              to: 'matriculas',
              label: 'Matrículas',
              icon: 'fa-regular fa-file'
            },
            {
              to: 'matriculas',
              label: 'Matrículas',
              icon: 'fa-regular fa-file'
            },
            {
              to: 'matriculas',
              label: 'Matrículas',
              icon: 'fa-regular fa-file'
            },
            {
              to: 'matriculas',
              label: 'Matrículas',
              icon: 'fa-regular fa-file'
            }
          ]
        },
        {
          label: 'Matrículas',
          icon: 'fa-solid fa-file'
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
.q-router-link--exact-active {
  font-weight: 600;
}
</style>
