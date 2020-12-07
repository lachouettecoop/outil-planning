<template>
  <v-container>
    <v-text-field
      :label="$t('login.user')"
      v-model="user"
      v-on:keyup.enter="clickLogin"
    >
    </v-text-field>
    <v-text-field
      :label="$t('login.password')"
      :append-icon="visiblePassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="() => (visiblePassword = !visiblePassword)"
      :type="!visiblePassword ? 'password' : 'text'"
      v-model="userPassword"
      v-on:keyup.enter="clickLogin"
    ></v-text-field>
    <p v-if="showError" id="error">{{ $t('login.errorMessage') }}</p>
    <v-btn v-on:click="clickLogin()">{{ $t('login.login') }}</v-btn>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  computed: {
    showError() {
      return this.$store.getters.isLoginFailed
    }
  },
  data: () => ({
    user: '',
    userPassword: '',
    visiblePassword: false
  }),
  components: {},
  methods: {
    ...mapActions(['LogIn']),
    async clickLogin() {
      const User = new FormData()
      User.append('username', this.user)
      User.append('password', this.userPassword)
      try {
        await this.LogIn(User)
        this.$router.push('/')
      } catch (error) {
        console.log('error from login ' + error)
      }
    }
  }
}
</script>

<style scoped></style>
