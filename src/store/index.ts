import Vue from 'vue'
import Vuex from 'vuex'
import { carproducts } from './modules/carproducts'
import { products } from './modules/products'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // car:25,
  },
  mutations: {
    // addProducts(state){
    //   state.car++;
    // },
  },
  actions: {

  },
  modules: {
    products,
    carproducts
  }
})
