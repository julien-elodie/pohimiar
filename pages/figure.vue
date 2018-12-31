<template>
  <v-container fluid>
    <v-layout 
      align-space-around
      justify-start 
      row
      wrap
      fill-height>
      <v-flex
        v-for="(figure, index) in figures"
        :key="index"
        style="margin-bottom: 10px">
        <enterance-card :iters="figure"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import enteranceCard from '../components/enteranceCard.vue'

export default {
  components: {
    enteranceCard
  },
  data: () => ({
    Figures: [
      {
        color: 'blue-grey',
        src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
        name: 'Napoléon Bonaparte',
        time: '1769-1821',
        intro:
          'French statesman and military leader who rose to prominence during the French Revolution and led several successful campaigns during the French Revolutionary Wars.'
      },
      {
        color: 'blue-grey',
        src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
        name: 'Napoléon Bonaparte',
        time: '1769-1821',
        intro:
          'French statesman and military leader who rose to prominence during the French Revolution and led several successful campaigns during the French Revolutionary Wars.'
      }
    ]
  }),
  computed: {
    figures() {
      return this.Figures.slice().reverse()
    }
  }
}
</script>
