<template>
  <div>
    <h4>{{ day.date | date }}</h4>
    <creneauCard ref="creneauCard" :creneau=creneauOnClick></creneauCard>
    <div class="piaf-container" v-for="creneau in creneaus" :key="creneau.id" @click="openCreneau(creneau)">
     <div class="w-100"> {{ creneau.heureDebut | time }} - {{ creneau.heureFin | time }}   </div>
     <div class="w-100"> {{ creneau.title }}   </div>     
        <div
          v-for="piaf in creneau.piafs"
          :key="piaf.id"
          class="piaf-icon"
          :class="{
            'piaf-icon-unavailable': piaf.piaffeur != null,
            'piaf-icon-remplacement': piaf.status == 'remplacement'
          }"
        >
            {{piaf.roleId == $getConst('idRoleGH')  ? 'GH' : ''}}
        </div>      
    </div>
  </div>
</template>
<script>
import '../filters.js'
import creneauCard from '../components/CreneauCard'
export default {
  name: 'calendarDay',
  props: ['day'],  components: {
    creneauCard
  },
  mounted: function () {
    if (this.day.creneaus) {
      this.creneaus = this.day.creneaus
    //   console.log(this.creneaus)
    }
  },
  data: () => ({
    creneaus: [],
    creneauOnClick: null
  }),
  methods:{
    openCreneau(creneau) {
      this.creneauOnClick = creneau
      this.$refs.creneauCard.show()
    },
  }
}
</script>
<style scoped>
.piaf-icon {
    display: inline-flex;
    background: grey;
    height: 2em;
    width: 2em;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .piaf-container {
    display: flex;
    flex-wrap: wrap;
  }
</style>
