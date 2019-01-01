<template>
  <div>
    <backable-toolbar 
      :title="title" 
      class="mb-2"/>
    <v-card class="center">
      <v-avatar 
        size="180" 
        class="ma-3">
        <img 
          :src="avatarSrc" 
          alt="avatar">
      </v-avatar>
      <div 
        class="title font-weight-light text-xs-center" 
        v-text="username"/>
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
      <v-divider/>
      <v-tabs fixed-tabs>
        <v-tab
          v-for="(title, index) in ['visibility', 'favorite', 'bookmark']"
          :key="index"
        >
          <v-icon v-text="title"/>
        </v-tab>
        <v-tab-item
          v-for="n in 3"
          :key="n"
        >
          <v-card flat>
            <v-card-text>{{ text }}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </div>
</template>

<style>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>

<script>
import backableToolbar from '../components/backableToolbar.vue'

export default {
  layout: 'main',
  components: {
    backableToolbar
  },
  data: () => ({
    title: 'Account',
    socialItems: [
      { icon: 'account_circle', title: 'Account', to: '/account' },
      { icon: 'notifications', title: 'Notifications', to: '/notifications' }
    ],
    avatarSrc: 'https://cdn.vuetifyjs.com/images/john.jpg',
    username: 'username',
    quote: 'quote.',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  })
}
</script>
