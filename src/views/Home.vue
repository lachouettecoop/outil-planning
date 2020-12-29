<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12"  sm="6" >
          <p class="title">Mon statut</p>
          14/12 PIAF attendues
        

          <p class="title">Je suis</p>

          <p>Très chouette</p>
          <v-row style="display: inline-flex; align-items: center">
            <v-img
              height="32px"
              width="32px"
              :src="require('@/assets/img/info.png')"
              @click="snackbar = true"
              class="info-icon"
            ></v-img>
            <p class="m-0">En savoir plus</p>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6" >
          <p class="title">Mes prochaines PIAFs</p>
          
           <div v-for="piaf in nextPiafs" :key="piaf.id" >
            {{piaf.creneau.date  | date}}
            {{piaf.creneau.heureDebut  | time}} - {{piaf.creneau.heureFin  | time}}
            {{piaf.role.libelle}}
          </div>  
        </v-col>
      </v-row>
      <v-row>
        <p class="title">Remplacements</p>
      </v-row>
    </v-container>
    <v-snackbar v-model="snackbar" absolute>
      Info status

      <template v-slot:action="{ attrs }">
        <v-btn color="green" text v-bind="attrs" @click="snackbar = false">
          Fermer
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { NEXT_PIAFS } from '@/graphql/queries'
import '../filters.js'

export default {
  name: 'Home',
  components: {},
  mounted: function(){
    this.getNextPiafs()
  },
  computed: {
    userLoged() {
      return this.$store.getters.user.id
    }
  },
  data: () => ({
    snackbar: false,
    piafs: [],
    nextPiafs: []
  }),
  methods: {
    getNextPiafs: function () {
      this.$apollo
        .query({
          query: NEXT_PIAFS,
          variables: {piaffeur: this.$store.getters.user.id}            
        })
        .then((response) =>         
          this.loadPIAFS(response))
        .catch((response) => console.log(response))
    },
    loadPIAFS: function(response){
        response.data.piafs.edges.forEach((item)=>{
          this.piafs.push(item.node)  
        })   
        this.piafs.sort((a, b) => a.creneau.date.localeCompare(b.creneau.date));

        this.piafs.forEach((item) =>{
          if(new Date(item.creneau.date).getTime() >= new Date(Date.now()).getTime())
            this.nextPiafs.push(item)
        })       
    }
  },
}
</script>

<style scoped>
.info-icon {
  flex: unset !important;
  margin-right: 10px;
}
.info-icon:hover {
  cursor: pointer;
}
</style>
