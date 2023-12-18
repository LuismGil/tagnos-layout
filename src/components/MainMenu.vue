<template>

  <q-drawer
      v-model="leftDrawerOpen"
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
          icon="description"
          label="Matrículas"
        >
          <q-list class="q-pl-lg m-[16px] rounded-[10px]" style="background-color: #245890;">
            <q-item to="/" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <img src="../assets/icons/icon-matriculas.svg" alt="">
              </q-item-section>
              <q-item-section>
                <q-item-label>Matrículas</q-item-label>
              </q-item-section>
            </q-item>
            <q-item to="/" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <img src="../assets/icons/icon-rematriculas.svg" alt="">
              </q-item-section>
              <q-item-section>
                <q-item-label>Rematrículas</q-item-label>
              </q-item-section>
            </q-item>
            <q-item to="/" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <img src="../assets/icons/icon-prematriculas.svg" alt="">
              </q-item-section>
              <q-item-section>
                <q-item-label>Pré-Matrículas</q-item-label>
              </q-item-section>
            </q-item>
            <q-item to="/" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <img src="../assets/icons/icon-uniformes.svg" alt="">
              </q-item-section>
              <q-item-section>
                <q-item-label>Uniformes</q-item-label>
              </q-item-section>
            </q-item>
            <q-item to="/" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <img src="../assets/icons/icon-ocorrencias.svg" alt="">
              </q-item-section>
              <q-item-section>
                <q-item-label>Ocorrências</q-item-label>
              </q-item-section>
            </q-item>
            <q-item to="/" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <img src="../assets/icons/icon-HistoricoEscolar.svg" alt="">
              </q-item-section>
              <q-item-section>
                <q-item-label>Histórico Escolar</q-item-label>
              </q-item-section>
            </q-item>
            <q-item to="/" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <img src="../assets/icons/icon-NovoHistoricoEscolar.svg" alt="">
              </q-item-section>
              <q-item-section>
                <q-item-label>Novo Histórico Escolar</q-item-label>
              </q-item-section>
            </q-item>
            <q-item to="/" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <img src="../assets/icons/icon-Transferencias.svg" alt="">
              </q-item-section>
              <q-item-section>
                <q-item-label>Transferências</q-item-label>
              </q-item-section>
            </q-item>
            <q-item to="/" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <img src="../assets/icons/icon-FotosMatricula.svg" alt="">
              </q-item-section>
              <q-item-section>
                <q-item-label>Fotos por Matrícula</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>

        <q-item to="/" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <img src="../assets/icons/icon-manutencoes.svg" alt="">
          </q-item-section>
          <q-item-section>
            <q-item-label>Manutenções</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <img src="../assets/icons/icon-lancamentos.svg" alt="">
          </q-item-section>
          <q-item-section>
            <q-item-label>Lançamentos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item to="/" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <img src="../assets/icons/icon-consultas.svg" alt="">
          </q-item-section>
          <q-item-section>
            <q-item-label>Consultas</q-item-label>
          </q-item-section>
        </q-item>

        <q-btn class="w-[150px] h-[44px] text-red"
    style="position: absolute; bottom: 6%; left: 50%; transform: translateX(-50%); background-color: #FFDDE3; text-transform: capitalize;">
    <q-icon name="exit_to_app" /> &nbsp; <b>Sair</b>
  </q-btn>

  <div class="flex" style="position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%);">
    <img src="../assets/icons/icon-versao.svg" alt="">&nbsp; Versão > 1.38.0
  </div>

      </q-list>
    </q-drawer>

</template>
