<template>
  <v-container>
    <v-text-field label="Utilisateur" v-model="user"> </v-text-field>
    <v-text-field
      label="Mot de passe"
      :append-icon="visiblePassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="() => (visiblePassword = !visiblePassword)"
      :type="!visiblePassword ? 'password' : 'text'"
      v-model="userPassword"
    ></v-text-field>
    <v-btn v-on:click="clickLogin()">Login</v-btn>
    <v-spacer></v-spacer>
    <v-btn v-on:click="getPIAF()">Get PIAF</v-btn>
  </v-container>
</template>

<script>
import axios from 'axios'

const axiosInstance = axios.create({
  withCredentials: true,
})

export default {
  data: () => ({
    user: '',
    userPassword: '',
    visiblePassword: false
  }),
  components: {},
  methods: {
    getCookie: function (name) {
      var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
      if (match) return match[2]
    },
    clickLogin: function () {
      let formData = new FormData()
      formData.append('username', this.user)
      formData.append('password', this.userPassword)

      axiosInstance
        .post('https://adminchouettos.lachouettecoop.fr/login_api', formData)
        .then(data => {
          console.log(data)
          console.log(data.headers)
          console.log(document.cookie)
          /* 
          console.log(data.headers.link)

          document.cookie =
            'PHPSESSID=c8p8f7lfji24frr3hmcqpbso50;SameSite=None;Secure'
          console.log(this.getCookie('PHPSESSID'))*/
       })
        .catch(error => {
          console.log(error)
        }) 
    },
    getPIAF: function () {
      this.$cookies.remove('PHPSESSID')
      console.log(this.$cookies.get('PHPSESSID'))

      this.$cookies.set(
        'PHPSESSID',
        'p0c6873vkjltb8ghcpd3v58ln9',
        '1d',
        '',
        '',
        'true',
        'Lax'
      )
      console.log('The new cookie is ' + this.$cookies.get('PHPSESSID'))

      //  document.cookie ='PHPSESSID=ognbr81u703gud6vgfc5o0kufj; secure; HttpOnly; SameSite=None'
      //console.log(document.cookie)
      let formData = new FormData()
      formData.append('id', '1')
      //axios.defaults.withCredentials = true
      axiosInstance
        .get('https://adminchouettos.lachouettecoop.fr/api/piafs', formData, {
          headers: {
            Cookie: 'PHPSESSID=' + this.$cookies.get('PHPSESSID').toString(),
          },
        })
        .then((data) => {
          console.log(data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>

<style scoped></style>
