import Vue from 'vue'
import Vuex from 'vuex'
import getProducts from './getProducts'
import filteredProducts from './filteredProducts'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    getProducts,
    filteredProducts
  }
})
