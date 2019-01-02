<template>
  <div class="showCard">
    <v-avatar 
      size="180" 
      class="ma-3">
      <img 
        :src="info.avatarSrc" 
        alt="avatar">
    </v-avatar>
    <div 
      class="title font-weight-light text-xs-center" >
      <a 
        :href="info.homepage" 
        v-text="info.username"/>
    </div>
    <div 
      class="subheading font-weight-thin text-xs-center ma-2" 
      v-text="info.quote"/>
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
  </div>
</template>

<style>
.showCard {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: function() {
        return {
          avatarSrc: 'https://cdn.vuetifyjs.com/images/john.jpg',
          username: 'username',
          homepage: '/',
          quote: 'quote.'
        }
      }
    }
  }
}
</script>
