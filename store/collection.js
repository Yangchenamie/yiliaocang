export default {
  namespaced: true,
  
  state: () => ({
    commodityCollection: JSON.parse(uni.getStorageSync('commodityCollection') || '[]')
  }),
   
  mutations: {
    addToCollection(state,goods) {
      const result = state.commodityCollection.find(x=> x.commodityId === goods.commodityId)
      console.log(result)
      if(!result) {
        state.commodityCollection.push(goods)
      }
      console.log(state.commodityCollection)
      // 调用下面的saveToStorage函数
      this.commit('collection/saveToStorage')
    },
    saveToStorage(state) {
      uni.setStorageSync('commodityCollection',JSON.stringify(state.commodityCollection))
    }
  },
  
  getters: {}
}