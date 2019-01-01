<template>
  <v-hover>
    <v-card 
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 2}`"
      :color="`${iters.color} darken-2`" 
      class="white--text"
      max-width="800"
      style="margin: 0 auto">
      <v-layout 
        row 
        wrap>
        <v-flex 
          xs12 
          sm4>
          <v-img
            v-if="isMobile" 
            :aspect-ratio="16/9"
            :src="iters.src"
          />
          <v-img
            v-if="!isMobile" 
            :src="iters.src"
            height="280px"
          />
        </v-flex>
        <v-flex 
          xs12 
          sm8>
          <v-card-title 
            :class="`${iters.color} lighten-2`" 
            primary-title>
            <div 
              class="headline" 
              v-text="iters.name" />
            <v-spacer/>
            <div 
              class="subheading" 
              v-text="iters.time"/>
          </v-card-title>
          <v-card-text :class="`${iters.color}`">
            <div 
              class="text" 
              v-text="iters.intro"/>
          </v-card-text>
          <v-card-actions :class="`${iters.color}`">
            <v-spacer/>
            <v-btn icon>
              <v-icon>search</v-icon>
            </v-btn>
          </v-card-actions>
          <v-card-actions :class="`${iters.color} darken-2`">
            <v-spacer/>
            <v-btn icon>
              <v-icon>visibility</v-icon>
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
        </v-flex>
      </v-layout>
    </v-card>
  </v-hover>
</template>

<style>
.text {
  line-height: 24px;
  height: 72px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

<script>
export default {
  props: {
    iters: {
      type: Object,
      default: function() {
        return {
          color: 'blue-grey',
          src: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
          name: 'Napoléon Bonaparte',
          time: '1769-1821',
          intro:
            'French statesman and military leader who rose to prominence during the French Revolution and led several successful campaigns during the French Revolutionary Wars.'
        }
      }
    }
  },
  data: () => ({
    isMobile: false
  }),
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  beforeDestroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true })
    }
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 600
    }
  }
}
</script>
