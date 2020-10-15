<template>
  <v-app>
    <div id="app">
      <v-app-bar app color="rgb(57,83,70)" elevate-on-scroll fixed>
        <v-spacer></v-spacer>        
        <v-list-item-icon style="margin: 0;">
            <v-img :src="require('@/assets/img/chouette42x53.jpg')"></v-img>
        </v-list-item-icon>
      </v-app-bar>
      <Menu />
      <v-main>
        <router-view />
      </v-main>
    </div>
  </v-app>
</template>
<script>
import Menu from '@/components/Menu.vue'
export default {
  components: {
    Menu,
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
