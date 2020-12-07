<template>
  <!-- Without the condition mobile-breakpoint="960" de v-show does not work -->
  <v-navigation-drawer
    app
    floating
    :permanent="sidebarMenu"
    :mini-variant= this.toggleMini
    mobile-breakpoint="960"
    :v-show="show"
    v-if="isLoggedIn"
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
        {{userLoged}}
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
            $t('menu.' + item.title)
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.user != null
    },
    show() {
      return this.$vuetify.breakpoint.smAndUp
    },
    userLoged () {
      return this.$store.getters.user.prenom.concat(' ' +  this.$store.getters.user.nom)       
    }
  },
  data: () => ({
    sidebarMenu: false,
    toggleMini: false,
    items: [
      { title: 'home', href: '/', icon: 'home.png' },
      { title: 'planning', href: '/watchPlanning', icon: 'planning.png' },
      { title: 'reserve', href: '/reserve', icon: 'reserve.png' },
      {
        title: 'resAuto',
        href: '/reserveAutomatique',
        icon: 'resaAuto.png'
      },
      { title: 'profile', href: '/profil', icon: 'user.png' },
      { title: 'memberArea', href: '/memberArea', icon: 'retour.png' }
    ]
  }),
  methods: {}
}
</script>
<style scoped>
.break-line {
  white-space: break-spaces;
}
</style>
