import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
    state: {
      theme: 'Light'
    }
  })
}

export default store
