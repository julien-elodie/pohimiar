<template>
  <div>
    <backable-toolbar 
      :title="title" 
      class="mb-2"/>
    <v-card class="mt-5">
      <v-card-title>
        Login
      </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="username"
          :rules="rules"
          counter="25"
          hint="Please enter your username"
          label="Username"
        />
        <v-text-field
          v-model="password"
          :append-icon="show ? 'visibility_off' : 'visibility'"
          :rules="[required, min]"
          :type="show ? 'text' : 'password'"
          name="input-10-1"
          label="Password"
          hint="At least 8 characters"
          counter
          @click:append="show = !show"
        />
      </v-card-text>
      <v-card-actions>
        <v-btn>Login</v-btn>
        <v-spacer/>
        <v-btn>Sign up</v-btn>
      </v-card-actions>
    </v-card>
    
    <div 
      flat 
      class="caption font-weight-light text-xs-center ma-2">
      Forgot password?
    </div>
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
    title: 'Login',
    username: '',
    rules: [v => v.length <= 25 || 'Max 25 characters'],
    show: false,
    password: '',
    required: value => !!value || 'Required.',
    min: v => v.length >= 8 || 'Min 8 characters'
  })
}
</script>
