<template>
  <v-container 
    fluid>
    <v-layout column>
      <v-flex xs12>
        <v-layout 
          align-start 
          justify-center 
          row 
          fill-height>
          <v-flex 
            xs12 
            sm9
            lg6
            xl3>
            <v-img 
              :aspect-ratio="2/1"
              max-width="600px"
              src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
              <div class="fill-height bottom-gradient"/>
            </v-img>
            <div 
              v-for="(article, index) in articles"
              :key="index">
              <enterance-article :iters="article"/>
            </div>
          </v-flex>
          <v-flex 
            v-if="!isMobile"
            class="subside"
            sm3
            lg2>
            <v-avatar 
              size="180" 
              class="ma-3">
              <img 
                :src="avatarSrc" 
                alt="avatar">
            </v-avatar>
            <div 
              class="title font-weight-light text-xs-center" >
              <a 
                :href="homepage" 
                v-text="username"/>
            </div>
            <div 
              class="subheading font-weight-thin text-xs-center ma-2" 
              v-text="quote"/>
            <div class="text-xs-center">
              <v-btn 
                outline 
                small
                fab 
                color="indigo"
                class="ma-1">
                <v-icon>list</v-icon>
              </v-btn>
              <v-btn 
                outline 
                small
                fab 
                color="indigo"
                class="ma-1">
                <v-icon>edit</v-icon>
              </v-btn>
              <v-btn 
                outline 
                small
                fab 
                color="indigo"
                class="ma-1">
                <v-icon>list</v-icon>
              </v-btn>
              <v-btn 
                outline 
                small
                fab 
                color="indigo"
                class="ma-1">
                <v-icon>edit</v-icon>
              </v-btn>
            </div>
            <div class="body-1 font-weight-light ma-1">VPS provider: <a 
              :href="vpsHref" 
              v-text="vps"/>
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style>
.v-image {
  z-index: 0;
  margin: 0 0 0 auto;
}
.v-card {
  margin: 0 0 0 auto;
}
.subside {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>

<script>
import constant from '../assets/constant'
import enteranceArticle from '../components/enteranceArticle.vue'

export default {
  components: {
    enteranceArticle
  },
  data: () => ({
    isMobile: false,
    Articles: [
      {
        title: 'Article Title',
        time: '12:30 08-31 2018',
        subtitle: 'Article Subtitle',
        text:
          'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
      },
      {
        title: 'Article Title',
        time: '12:30 08-31 2018',
        subtitle: 'Article Subtitle',
        text:
          'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
      }
    ],
    avatarSrc: constant.developerAvatar,
    username: constant.developer,
    homepage: constant.homepage,
    quote: constant.quote,
    vps: constant.vpsName,
    vpsHref: constant.vpsHref
  }),
  computed: {
    articles() {
      return this.Articles.slice().reverse()
    }
  },
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
      this.isMobile = window.innerWidth < 880
    }
  }
}
</script>
