import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playStatus: false// 播放状态
  },
  mutations: {
    setPlayStatus (state, playStatus) {
      state.playStatus = playStatus
    }
  },
  actions: {
  },
  modules: {
  }
})
