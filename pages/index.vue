<template>
  <v-card
    max-width="600"
    class="my-0 mx-auto">
    <v-container>
      <v-timeline 
        dense
        clipped>
        <v-timeline-item
          hide-dot
        >
          <span>TODAY</span>
        </v-timeline-item>

        <v-timeline-item
          v-for="(event, index) in timeline"
          :key="index"
          :icon="event.icon"
          class="mb-3"
          large
          fill-dot
        >
          <span v-text="event.time"/>
          <enterance-timeline 
            :src="event.src" 
            :title="event.title"/>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </v-card>
</template>

<script>
import enteranceTimeline from '../components/enteranceTimeline.vue'

export default {
  components: {
    enteranceTimeline
  },
  data: () => ({
    events: [
      {
        time: '12:30',
        icon: 'timeline',
        src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
        title: 'Napoléon Bonaparte'
      },
      {
        time: '12:30',
        icon: 'timeline',
        src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
        title: 'Napoléon Bonaparte'
      }
    ]
  }),

  computed: {
    timeline() {
      return this.events.slice().reverse()
    }
  }
}
</script>
