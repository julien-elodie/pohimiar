<template>
  <div>
    <backable-toolbar 
      :title="title" 
      class="mb-2"/>
    <v-card class="mt-5">
      <v-container>
        <user-showcard :info="{avatarSrc, username, homepage, quote}"/>
      </v-container>
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

<script>
import backableToolbar from '../components/backableToolbar.vue'
import userShowcard from '../components/userShowcard.vue'

export default {
  layout: 'main',
  components: {
    backableToolbar,
    userShowcard
  },
  data: () => ({
    title: 'Account',
    socialItems: [
      { icon: 'account_circle', title: 'Account', to: '/account' },
      { icon: 'notifications', title: 'Notifications', to: '/notifications' }
    ],
    avatarSrc: 'https://cdn.vuetifyjs.com/images/john.jpg',
    username: 'username',
    homepage: '/',
    quote: 'quote.',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  })
}
</script>
