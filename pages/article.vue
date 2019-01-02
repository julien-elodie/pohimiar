<template>
  <v-card
    max-width="600"
    class="my-0 mx-auto">
    <v-card-title v-if="show">
      <v-spacer/>
      <v-dialog
        v-model="dialog"
        width="256"
      >
        <v-btn slot="activator">
          About Wizard
        </v-btn>

        <v-card>
          <user-showcard :info="{avatarSrc, username, homepage, quote}"/>

          <v-divider/>

          <div class="body-1 font-weight-light ma-1 text-xs-center">
            VPS provider: 
            <a 
              :href="vpsHref" 
              v-text="vps"/>
          </div>

          <v-card-actions>
            <v-spacer/>
            <v-btn
              color="primary"
              flat
              @click="handleShowWizard"
            >
              Know it!
            </v-btn>
            <v-spacer/>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-spacer/>
    </v-card-title>
    <v-img 
      :aspect-ratio="2/1"
      src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
      @click="show = !show">
      <div class="fill-height bottom-gradient"/>
    </v-img>
    <div 
      v-for="(article, index) in articles"
      :key="index">
      <enterance-article :iters="article"/>
    </div>
  </v-card>
</template>

<script>
import constant from '../assets/constant'
import enteranceArticle from '../components/enteranceArticle.vue'
import userShowcard from '../components/userShowcard.vue'

export default {
  components: {
    enteranceArticle,
    userShowcard
  },
  data: () => ({
    show: false,
    dialog: false,
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
  methods: {
    handleShowWizard: function() {
      this.dialog = false
      this.show = false
    }
  }
}
</script>
