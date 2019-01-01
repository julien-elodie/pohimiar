<template>
  <v-hover>
    <v-card 
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 12 : 2}`">
      <v-img
        :aspect-ratio="16/9"
        :src="src"
        height="256px"
        class="white--text"
      >
        <v-card-title 
          class="title" 
          v-text="title"/>
      </v-img>
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
  </v-hover>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'
    },
    title: {
      type: String,
      default: 'Napoléon Bonaparte'
    }
  }
}
</script>
