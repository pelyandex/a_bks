import Products from '../../public/products.json'

export default {
  state: {
    allProducts: []
  },
  mutations: {
    load (state) {
      state.allProducts = Products
    }
  },
  actions: {
    getProducts (ctx) {
      ctx.commit('load')
    }
  },
  getters: {
    returnState (state) {
      return state.allProducts
    }
  }
}
