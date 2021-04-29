import delay from 'timeout-as-promise'

const namespaced = true

// {
//   show: true,
//   text: 'FOO'
// }

const state = () => ({
  activeLowerThird: null
})

const getters = {
  activeLowerThird: (state) => state.activeLowerThird
}

const mutations = {
  updateActiveLowerThird: (state, value) => {
    state.activeLowerThird = value
  }
}

const actions = {
  async startLowerThird ({ commit }, { text, transitionTime = 1000 } = {}) {
    commit('updateActiveLowerThird', {
      show: true,
      text,
      transitionTime
    })
  },
  async stopLowerThird ({ commit, getters }, { transitionTime } = {}) {
    commit('updateActiveLowerThird', {
      ...getters.activeLowerThird,
      show: false
    })

    await delay(transitionTime || getters.activeLowerThird?.transitionTime || 0)

    commit('updateActiveLowerThird', null)
  }

}

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions
}
