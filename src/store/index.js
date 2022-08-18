import { createStore } from 'vuex'
import modules from './modules'
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
  modules,
  plugins: [
    createPersistedState()
  ]
})

export default store
