<template>
  <v-app>
    <div id="app">
      <AppBar />
      <Menu />
      <v-main>
        <router-view />
      </v-main>
      <BottomMenu />
    </div>
  </v-app>
</template>
<script>
import AppBar from '@/components/AppBar.vue'
import Menu from '@/components/Menu.vue'
import BottomMenu from '@/components/BottomMenu.vue'
export default {
  components: {
    Menu,
    BottomMenu,
    AppBar
  }
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
