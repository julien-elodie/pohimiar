<template>
  <v-toolbar>
    <v-btn icon>
      <v-icon @click="$nuxt.$router.back(-1)">arrow_back</v-icon>
    </v-btn>
    <v-toolbar-title v-text="title"/>
  </v-toolbar>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'title'
    }
  }
}
</script>
