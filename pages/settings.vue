<template>
  <div>
    <backable-toolbar 
      :title="title" 
      class="mb-2"/>
    <v-list 
      two-line 
      subheader
      class="mt-5">
      <v-subheader>General</v-subheader>

      <v-list-tile 
        avatar>
        <v-list-tile-avatar>
          <v-icon>translate</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>Language</v-list-tile-title>
          <v-list-tile-sub-title>Current Language</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile 
        avatar 
        @click="dialog = true">
        <v-list-tile-avatar>
          <v-icon>palette</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>Theme</v-list-tile-title>
          <v-list-tile-sub-title v-text="$nuxt.$store.state.theme"/>
        </v-list-tile-content>
      </v-list-tile>
      <v-dialog
        v-model="dialog"
        max-width="290"
      >
        <v-card>123</v-card>
      </v-dialog>
    </v-list>
  </div> 
</template>

<script>
import backableToolbar from '../components/backableToolbar.vue'

export default {
  layout: 'main',
  components: {
    backableToolbar
  },
  data: () => ({
    title: 'Settings',
    dialog: false
  })
}
</script>
