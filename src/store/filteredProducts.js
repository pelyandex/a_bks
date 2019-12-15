export default {
  actions: {
    changeFilter (ctx, payload) {
      ctx.commit('filtering', payload)
    }
  },
  mutations: {
    filtering (state, filter) {
      state.filteredItems = filter
    }
  },
  state: {
    filteredItems: []
  },
  getters: {
    getFilteredItems (state) {
      return state.filteredItems
    }
  }
}
