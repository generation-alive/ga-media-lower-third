import delay from 'timeout-as-promise'

const namespaced = true

// {
//   show: true,
//   text: 'FOO',
//   transitionTime: 1000
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
  async startLowerThird ({ commit }, payload = {}) {
    commit('updateActiveLowerThird', {
      show: true,
      ...payload
    })
  },
  async stopLowerThird ({ commit, getters }, { transitionTime } = {}) {
    commit('updateActiveLowerThird', {
      ...getters.activeLowerThird,
      show: false
    })

    await delay(transitionTime || getters.activeLowerThird?.transitionTime || 0)
  }

}

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions
}
