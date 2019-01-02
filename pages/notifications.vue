<template>
  <div>
    <backable-toolbar 
      :title="title" 
      class="mb-2"/>
    <v-list 
      three-line 
      class="mt-5">
      <template v-for="(item, index) in items">
        <v-subheader
          v-if="item.header"
          :key="item.header"
        >
          {{ item.header }}
        </v-subheader>

        <v-divider
          v-else-if="item.divider"
          :inset="item.inset"
          :key="index"
        />

        <v-list-tile
          v-else
          :key="item.title"
          avatar
        >
          <v-list-tile-avatar>
            <img :src="item.avatar">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title v-html="item.title"/>
            <v-list-tile-sub-title 
              class="text" 
              v-html="item.subtitle"/>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </div>
</template>

<style>
.text {
  line-height: 18.4px;
  height: 36.8px;
  overflow: hidden;
  text-overflow: ellipsis;
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
    title: 'Notifications',
    items: [
      { header: 'Today' },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this weekend?',
        subtitle:
          "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle:
          "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
      }
    ]
  })
}
</script>
