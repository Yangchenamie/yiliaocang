import Vue from "vue"
import Vuex from 'vuex'
import collection from '@/store/collection.js'
import moduleuser from '@/store/user.js'
import moduleCart from '@/store/cart.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules:{
    'collection': collection,
    'm_user':moduleuser,
    'm_cart':moduleCart
  }
})

export default store