<template>
  <v-app-bar app color="rgb(57,83,70)" bottom fixed
  v-show="show">
 
      <v-list-item v-for="item in items" :key="item.title" link :to="item.href">
       <v-list-item-icon>
          <v-img :src="require('@/assets/img/' + item.icon)"></v-img>
          <!-- <p> {{ $t('menu.' + item.title)}}</p> -->
       </v-list-item-icon>
      </v-list-item>
 
        <v-spacer></v-spacer>
          <v-menu
            bottom
            left
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
      </v-app-bar>

<!--   <v-navigation-drawer
    app
    floating
    :permanent="sidebarMenu"
    :mini-variant="mini"
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
   
      
  </v-navigation-drawer> -->
</template>
<script>
export default {
  computed: {
    show() {
      return this.$vuetify.breakpoint.smAndDown
    }
  },
  mounted:{

  },
  data: () => ({
    sidebarMenu: false,
    toggleMini: false,
    items: [
      { title: 'planning', href: '/watchPlanning', icon: 'planning.png' },
      { title: 'reserve', href: '/reserve', icon: 'reserve.png' }
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
