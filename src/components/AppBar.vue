<template>
  <v-app-bar app color="rgb(57,83,70)" elevate-on-scroll fixed>
    <v-spacer></v-spacer>
    <v-btn v-if="isLoggedIn" @click="logout"> {{ $t('login.logout') }} </v-btn>
    <v-list-item-icon style="margin: 0">
      <v-img :src="require('@/assets/img/chouette40x50.jpg')"></v-img>
    </v-list-item-icon>
  </v-app-bar>
</template>
<script>
export default {
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch('LogOut')
      this.$router.push('/login')
    }
  }
}
</script>
<style></style>
