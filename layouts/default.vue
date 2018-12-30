<template>
  <v-app light>
    <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >
      <v-img 
        :aspect-ratio="16/9" 
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
        <v-layout 
          pa-3 
          column 
          fill-height 
          class="lightbox white--text">
          <v-avatar 
            :size="avatarSize" 
            :color="avatarColor">
            <span 
              class="white--text headline" 
              v-text="nickName[0]"/>
          </v-avatar>
          <v-spacer/>
          <v-flex shrink>
            <div 
              class="subheading" 
              v-text="nickName"/>
            <div 
              class="body-1" 
              v-text="userName"/>
          </v-flex>
        </v-layout>
      </v-img>

      <v-divider/>

      <v-list>
        <v-list-tile
          v-for="(item, i) in accountItems"
          :to="item.to"
          :key="i"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"/>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-divider/>

      <v-list>
        <v-list-tile
          v-for="(item, i) in systemItems"
          :to="item.to"
          :key="i"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"/>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar 
      :clipped-left="clipped" 
      fixed 
      app>
      <v-toolbar-side-icon @click="drawer = !drawer"/>
      <v-toolbar-title v-text="title"/>
      <v-spacer/>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
      <v-bottom-nav
        :active.sync="bottomNav"
        :value="true"
        absolute
        color="transparent"
      >
        <v-btn
          color="primary"
          flat
          value="explore"
          @click="this.$router.push('/')"
        >
          <span>Explore</span>
          <v-icon>explore</v-icon>
        </v-btn>

        <v-btn
          color="primary"
          flat
          value="figure"
          @click="this.$router.push('/figure')"
        >
          <span>Figure</span>
          <v-icon>person_pin</v-icon>
        </v-btn>

        <v-btn
          color="primary"
          flat
          value="event"
          @click="this.$router.push('/event')"
        >
          <span>Event</span>
          <v-icon>event</v-icon>
        </v-btn>

        <v-btn
          color="primary"
          flat
          value="article"
          @click="this.$router.push('/article')"
        >
          <span>Article</span>
          <v-icon>receipt</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: true,
      accountItems: [
        { icon: 'account_circle', title: 'Account', to: '/account' },
        { icon: 'notifications', title: 'Notifications', to: '/notifications' }
      ],
      systemItems: [
        { icon: 'settings', title: 'Settings', to: '/settings' },
        { icon: 'error_outline', title: 'About', to: '/about' }
      ],
      miniVariant: false,
      title: 'POHIMIAR',
      bottomNav: 'explore',
      avatarSize: 56,
      avatarColor: 'primary',
      nickName: '',
      userName: 'Please login your account!'
    }
  }
}
</script>
