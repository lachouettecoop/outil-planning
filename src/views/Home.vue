<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <p class="title">Mon statut</p>
          14/12 PIAF attendues

          <p class="title">Je suis</p>

          <p>Très chouette</p>
          <v-row style="display: inline-flex;align-items: center;">
            <v-img
              height="32px"
              width="32px"
              :src="require('@/assets/img/info.png')"
              @click="snackbar = true"
              class="info-icon"
            ></v-img>
            <p class="m-0">En savoir plus</p>
          </v-row>
        </v-col>
        <v-col>
          <p class="title">Mes prochaines PIAFs</p>
        </v-col>
      </v-row>
      <v-row>
        <p class="title">Remplacements</p>
      </v-row>
    </v-container>
    <v-snackbar v-model="snackbar" absolute>
      Info status

      <template v-slot:action="{ attrs }">
        <v-btn color="green" text v-bind="attrs" @click="snackbar = false">
          Fermer
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data: () => ({
    snackbar: false
  })
}
</script>

<style scoped>
.info-icon {
  flex: unset !important;
  margin-right: 10px;
}
.info-icon:hover {
  cursor: pointer;
}
</style>
