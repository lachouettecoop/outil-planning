<template>
  <v-container>
    <div>
      <v-row>
        <v-col
          v-for="(day, index) in days"
          :key="index"
          class="col-planning"
          sm="auto"
          cols="12"
        >
          <calendarDay :day="day"></calendarDay>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import calendarDay from '../components/CalendarDay'
import { PLANNING } from '@/graphql/queries'
export default {
  name: 'WatchPlanning',
  components: {
    calendarDay,
  },
  mounted: function () {
    let today = new Date(Date.now())
    let firstDate = new Date(today)
    let todayIndex = today.getDay()
    if (todayIndex === 0) todayIndex = 7

    firstDate.setDate(today.getDate() - (todayIndex - 1))
    let lastDate = new Date(firstDate)
    lastDate.setDate(lastDate.getDate() + 7 * this.numWeeks)

    this.getPlanning(firstDate, lastDate)
  },
  data: () => ({
    modalOpen: false,
    days: [],
    numWeeks: 4,
    creneaus: [],
  }),
  methods: {
    getDaysOfWeek(dateIni, dateEnd) {
      let start = new Date(dateIni.getTime())

      do {
        var creneaus = this.creneaus.filter(
          (c) =>
            new Date(c.date).toDateString() === new Date(start).toDateString()
        )
        this.days.push({
          date: new Date(start),
          creneaus: creneaus,
        })
        start = new Date(start.setDate(start.getDate() + 1))
      } while (start < dateEnd)
    },
    getPlanningOK: function (response, dateIni, dateEnd) {
      response.data.creneaus.edges.forEach((item) => {
        let piafs = []
        item.node.piafs.edges.forEach((piaf) => {
          piafs.push({
            id: piaf.node.id,
            roleId: piaf.node.role.id,
            roleLabel: piaf.node.role.libelle,
            piaffeur: piaf.node.piaffeur,
          })
        })
        this.creneaus.push({
          id: item.node.id,
          date: item.node.date,
          heureFin: item.node.heureFin,
          heureDebut: item.node.heureDebut,
          title: item.node.titre,
          piafs: piafs,
        })
      })
      this.getDaysOfWeek(dateIni, dateEnd)
    },
    async getPlanning(dateIni, dateEnd) {
      await this.$apollo
        .query({
          query: PLANNING,
          variables: { dateIni: dateIni, dateEnd: dateEnd },
        })
        .then((response) => this.getPlanningOK(response, dateIni, dateEnd))
        .catch((response) => console.log(response))
    },
  },
}
</script>

<style scoped>
.col-planning {
  width: 14%;
  height: 20%;
  border: black 1px dashed;
}
</style>