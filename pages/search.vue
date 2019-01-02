<template>
  <div>
    <v-toolbar
      dense
      fixed>
      <v-btn icon>
        <v-icon @click="$nuxt.$router.back(-1)">arrow_back</v-icon>
      </v-btn>
      <v-text-field
        append-icon="mic"
        flat
        label="Search"
        prepend-inner-icon="search"
        solo
      />
    </v-toolbar>
  </div>
</template>

<style>
.v-input__slot {
  align-items: center;
  color: inherit;
  display: flex;
  margin-bottom: 0;
  min-height: inherit;
  position: relative;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  width: 100%;
}
</style>


<script>
export default {
  layout: 'main'
}
</script>
