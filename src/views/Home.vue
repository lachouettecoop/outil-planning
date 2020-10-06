<template>
  <div class="home">
    <Navbar />
    <img alt="LCC logo" src="../assets/logo.jpg" />
    <HelloChouettos msg="Bienvenue, chouettos !" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloChouettos from '@/components/HelloChouettos.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    HelloChouettos,
    Navbar
  }
}
</script>

<style scoped></style>
