
import Vuex from 'vuex'
import mutations from './mutations.js'
import state from './state.js'
import actions from './actions.js'

const createStore = () => {
  return new Vuex.Store({
    state,
    mutations,
    actions
  })
}

export default createStore
