<template>
  <v-container 
    grid-list-xl
    text-xs-center
  >
    <v-layout 
      row 
      wrap>
      <v-flex 
        xs12
        offset-xs0
        sm10
        offset-sm1 
        md8
        offset-md2
        lg6
        offset-lg3>
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
            <v-hover>
              <v-card 
                slot-scope="{ hover }"
                :class="`elevation-${hover ? 12 : 2}`">
                <v-img
                  :aspect-ratio="16/9"
                  :src="event.src"
                  height="256px"
                  class="white--text"
                >
                  <v-card-title 
                    class="title" 
                    v-text="event.title"/>
                </v-img>
                <v-card-actions>
                  <v-spacer/>
                  <v-btn icon>
                    <v-icon>search</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>favorite</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>bookmark</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>share</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-hover>
          </v-timeline-item>
        </v-timeline>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
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
