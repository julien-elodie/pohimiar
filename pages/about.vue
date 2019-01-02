<template>
  <div>
    <backable-toolbar 
      :title="title" 
      class="mb-2"/>
    <v-card class="mt-5 mb-2">
      <v-container
        fluid
        grid-list-lg>
        <v-layout 
          row 
          wrap>
          <v-flex xs12>
            <v-img
              :aspect-ratio="1/1"
              :src="logoSrc"
              width="128px"
              style="margin: 0 auto"
              alt="logo"/>
            <div 
              class="headline font-weight-light text-xs-center" 
              v-text="name"/>
            <div 
              class="subheading font-weight-thin text-xs-center" 
              v-text="version"/>
              <!--  TODO(article components)  -->
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
    <companyFooter/>
  </div>
</template>

<script>
import constant from '../assets/constant'
import backableToolbar from '../components/backableToolbar.vue'
import companyFooter from '../components/companyFooter.vue'

export default {
  layout: 'main',
  components: {
    backableToolbar,
    companyFooter
  },
  data: () => ({
    title: 'About',
    logoSrc: constant.logoSrc,
    name: constant.projectName,
    version: constant.currentVersion
  })
}
</script>
