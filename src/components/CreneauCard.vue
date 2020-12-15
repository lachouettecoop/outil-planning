<template>
  <div class="creneau-card">
    <div class="button-close">
      <button>X</button>
    </div>
    <h2>
      {{ creneau.date }}
    </h2>
    <div class="creneau-time-title">
      <h2>
        {{ creneau.time }}
      </h2>
      <div class="creneau-title">
        <p>{{ creneau.title }}</p>
      </div>
    </div>
    <hr />
    <h3>Equipe</h3>
    <div class="piaf" v-for="(piaf, index) in piafs" :key="index">
      <div
        class="piaf-icon"
        :class="{
          'piaf-icon-unavailable': !piaf.available,
          'piaf-icon-remplacement': piaf.remplacement
        }"
      >
        {{ piaf.icon }}
      </div>
      <div>
        <p v-if="piaf.piaffeur">
          {{ piaf.piaffeur.name }}
        </p>
        <p v-else>
          Place disponible
        </p>
        <p>{{ piaf.role }}</p>
      </div>
      <div>
        <p v-if="piaf.piaffeur">
          {{ piaf.piaffeur.mail }}
        </p>
        <p v-if="piaf.piaffeur">
          {{ piaf.piaffeur.phone }}
        </p>
        <button class="btn-register" v-else>
          S'inscrire
        </button>
      </div>
    </div>
    <hr />
    <h3>Informations Utiles</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      creneau: {
        date: 'Mercredi 09 Septembre 2020',
        time: '15h20-17h20',
        title: 'MAG Ouverture'
      },
      piafs: [
        {
          available: false,
          remplacement: false,
          role: 'Grand Hibou',
          icon: 'GH',
          piaffeur: {
            name: 'Andres Gomez',
            mail: 'andres.gomez@gmail.com',
            phone: '0665891248'
          }
        },
        {
          available: false,
          remplacement: false,
          role: 'Chouettos',
          icon: 'C',
          piaffeur: {
            name: 'Patrick Etcheverry',
            mail: 'patrick@gmail.com',
            phone: '0665891249'
          }
        },
        {
          available: false,
          remplacement: false,
          role: 'Chouettos',
          icon: 'C',
          piaffeur: {
            name: 'Patrick Etcheverry',
            mail: 'patrick@gmail.com',
            phone: '0665891249'
          }
        },
        {
          available: true,
          remplacement: true,
          role: 'Chouettos',
          icon: 'C',
          piaffeur: null
        },
        {
          available: true,
          remplacement: false,
          role: 'Chouettos',
          icon: 'C',
          piaffeur: null
        },
        {
          available: true,
          remplacement: false,
          role: 'Chouettos',
          icon: 'C',
          piaffeur: null
        }
      ]
    }
  }
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
  width: 35vw;
  padding: 1vw 1vw 2vw 2vw;
  margin: auto;
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
}
.piaf-icon-unavailable {
  border: solid 2px green;
}
.piaf-icon-remplacement {
  border: solid 2px orange;
}
.btn-register {
  padding: 1em 3em;
}
</style>
