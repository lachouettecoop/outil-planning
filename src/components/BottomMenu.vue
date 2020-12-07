<template>
  <v-app-bar
    app
    color="rgb(57,83,70)"
    bottom
    fixed
    style="height: 60px"
    v-show="show"
    v-if="isLoggedIn"
  >
    <v-list-item
      class="bottom-menu"
      v-for="item in itemsVisibles"
      :key="item.title"
      link
      :to="item.href"
    >
      <v-list-item-icon>
        <v-img :src="require('@/assets/img/' + item.icon)"></v-img>
      </v-list-item-icon>
      <div class="caption">{{ $t('menu.' + item.title) }}</div>
    </v-list-item>

    <v-spacer></v-spacer>
    <v-menu bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn dark icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, i) in itemsHidden"
          :key="i"
          link
          :to="item.href"
        >
          <v-list-item-title>
            {{ $t('menu.' + item.title) }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<script>
export default {
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.user != null
    },
    show() {
      return this.$vuetify.breakpoint.smAndDown
    }
  },
  data: () => ({
    sidebarMenu: false,
    toggleMini: false,
    itemsVisibles: [
      { title: 'planning', href: '/watchPlanning', icon: 'planning.png' },
      { title: 'reserve', href: '/reserve', icon: 'reserve.png' },
      { title: 'resAutoMin', href: '/reserveAutomatique', icon: 'resaAuto.png' }
    ],
    itemsHidden: [
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
.bottom-menu {
  display: block;
  padding-top: 10px;
}
.v-toolbar__content {
  margin-top: 4px;
}
.v-list-item__icon {
  margin-bottom: 0 !important;
  margin-right: 0 !important;
}
.caption {
  margin-bottom: 16px;
  color: white;
}
</style>
