<template>
  <div class="navbar">
    <router-link class="navbar-link" :to="{ name: 'home' }"
      >Accueil</router-link
    >
    |
    <router-link class="navbar-link" :to="{ name: 'watchPlanning' }"
      >Voir le Planning</router-link
    >
    |
    <router-link class="navbar-link" :to="{ name: 'contact' }"
      >Contact</router-link
    >
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.navbar {
  margin: 10px auto;
}
.navbar-link {
  color: black;
}
.navbar-link:hover {
  color: red;
}
</style>
