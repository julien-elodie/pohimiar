<template>
  <v-card 
    flat 
    max-width="600px">
    <v-card-title class="pb-1">
      <div 
        class="headline font-weight-light text-xs-left" 
        v-text="iters.title"/>
      <v-spacer/>
      <div 
        class="subheading font-weight-thin text-xs-left" 
        v-text="iters.time"/>
    </v-card-title>
    <v-card-text 
      class="body-1 font-weight-regular py-0 text" 
      v-text="iters.text">
      <div 
        class="subheading font-weight-medium text-xs-left pb-1" 
        v-text="iters.subtitle"/>
    </v-card-text>
    <v-card-actions>
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
  </v-card>
</template>

<style>
.text {
  line-height: 20.8px;
  height: 90.4px;
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
          title: 'Article Title',
          time: '12:30 08-31 2018',
          subtitle: 'Article Subtitle',
          text:
            'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.'
        }
      }
    }
  }
}
</script>
