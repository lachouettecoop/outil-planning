<template>
  <div v-if="showModal" class="creneau-card" v-on:click="hide()">
    <div class="button-close">
      <button @click="hide">X</button>
    </div>
    <h2>
      {{ creneau.date | dateLong | capitalize }}
    </h2>
    <div class="creneau-time-title">
      <h2>
        {{ creneau.heureDebut | time }} - {{ creneau.heureFin | time }}  
      </h2>
      <div class="creneau-title">
        <p>{{ creneau.title }}</p>
      </div>
    </div>
    <hr />
    <h3>{{$t('creneauCard.team')}}</h3>
    <v-row class="piaf" v-for="(piaf, index) in creneau.piafs" :key="index">
      <v-col cols="1"
        class="piaf-icon"
        :class="{
          'piaf-icon-unavailable': piaf.piaffeur != null,
          'piaf-icon-remplacement': piaf.status == 'remplacement'
        }"
      >
         {{piaf.roleId == $getConst('idRoleGH')  ? 'GH' : ''}}
      </v-col>
      <v-col cols="5">
        <p v-if="piaf.piaffeur">
        {{ piaf.piaffeur.prenom }}  {{ piaf.piaffeur.nom }}
        </p>
        <p v-else>{{$t('creneauCard.availablePosition')}}</p>
        <p>{{ piaf.roleLabel }}</p>
      </v-col>
      <v-col cols="6">
        <p v-if="piaf.piaffeur">
          {{ piaf.piaffeur.email }}
        </p>
        <p v-if="piaf.piaffeur">
          {{ piaf.piaffeur.telephone }}
        </p>
        <button v-else class="btn-register" @click="registration(piaf.id)">{{$t('creneauCard.registration')}}</button> 
      </v-col>
    </v-row>
    <hr />
    <h3>{{$t('creneauCard.info')}}</h3>
  </div>
</template>

<script>
import { REGISTRATION } from '@/graphql/queries'
export default {
  name:"creneauCard",
  props: ['creneau'],
  data() {
    return {
      showModal: false
    }
  },
  methods: {
     show() {
      this.showModal = true
     },
     hide(){
      this.showModal = false
     },
     registration(idPIAF){
      this.$apollo
        .mutate({
          mutation: REGISTRATION,
          variables: { idPiaffeur: this.$store.getters.user.id, idPiaf: idPIAF},
        })
        .then((response) => console.log(response))
        .catch((response) => console.log(response))
     }
  },
}
</script>

<style scoped>
h2 {
  text-align: left;
  margin-right: 4vw;
}
h3 {
  text-align: left;
}
p {
  margin-top: 0.5em;
  margin-bottom: 0;
  text-align: left;
}
.creneau-card {
  background: lightgrey;
  min-width: 40vw;
  padding: 1vw 1vw 2vw 2vw;
  margin: auto;
  position:absolute;
  left: calc(30% - 10px);
  top: 1%;
}
@media (max-width: 768px){
.creneau-card  {
  width: 100%;
  left:0;
}
}
.button-close {
  display: flex;
  justify-content: flex-end;
}
.piaf-time-title {
  display: flex;
  justify-content: flex-start;
}
.piaf-title {
  display: flex;
  align-items: center;
}
.piaf {
  display: flex;
  margin: 1vw;
  justify-content: space-between;
}
/* &::before,
.piaf {
  display: inline-block;
  vertical-align: middle;
} */
.piaf-icon {
    display: flex;
    background: grey;
    height: 4em;
    width: 4em;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: auto;
    margin-bottom: auto;
  }
.btn-register {
  padding: 1em 3em;
}
</style>
