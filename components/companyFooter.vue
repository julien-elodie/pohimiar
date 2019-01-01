<template>
  <v-footer
    light
    height="auto"
  >
    <v-card
      width="100%"
      flat>
      <v-card-text class="caption font-weight-thin text-xs-center pa-1">
        &copy;2019 — <strong v-text="name"/>
      </v-card-text>

      <v-card-text class="caption font-weight-thin text-xs-center pa-1">
        prowered by <strong>Nuxt.js</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import constant from '../assets/constant'

export default {
  data: () => ({
    name: constant.projectName
  })
}
</script>
