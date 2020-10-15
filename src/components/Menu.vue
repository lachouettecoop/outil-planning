<template>
  <v-navigation-drawer
    v-model="sidebarMenu"
    app
    floating
    :permanent="sidebarMenu"
    :mini-variant.sync="mini"
  >
    <v-list dense color="rgb(57,83,70)" dark>
      <v-list-item>
        <v-list-item-action>
          <v-icon v-if="!toggleMini" @click="toggleMini = !toggleMini"
            >mdi-chevron-left</v-icon
          >
          <v-icon v-if="toggleMini" @click="toggleMini = !toggleMini"
            >mdi-chevron-right</v-icon
          >
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-icon>mdi-account-outline</v-icon>
      </v-list-item-avatar>
      <v-list-item-content class="text-truncate">
        Machin Truc Bidule
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list>
      <v-list-item v-for="item in items" :key="item.title" link :to="item.href">
        <v-list-item-icon>
          <v-img :src="require('@/assets/img/' + item.icon)"></v-img>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="break-line text">{{
            item.title
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  computed: {
    mini() {
      return this.$vuetify.breakpoint.smAndDown || this.toggleMini
    }
  },
  data: () => ({
    sidebarMenu: true,
    toggleMini: false,
    items: [
      { title: 'Accueil', href: '/', icon: 'home.png' },
      { title: 'Planning', href: '/watchPlanning', icon: 'planning.png' },
      { title: 'Réserve', href: '/reserve', icon: 'reserve.png' },
      {
        title: 'Réservation automatique',
        href: '/reserveAutomatique',
        icon: 'resaAuto.png'
      },
      { title: 'Mon profil', href: '/profil', icon: 'user.png' },
      { title: 'Espace membre', href: '/espaceMembre', icon: 'retour.png' }
    ]
  }),
  methods: {}
}
</script>
<style scoped>
.break-line{
    white-space: break-spaces;
}
</style>
