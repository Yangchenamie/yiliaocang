export default{
  namespaced:true,
  
  state:() => ({
    // 购物车的数组，用来存储购物车中每个商品的信息对象
        // 每个商品的信息对象，都包含如下 6 个属性：
        // { goods_id, goods_name, goods_price, goods_count, goods_small_logo, goods_state }
       
        cart: JSON.parse(uni.getStorageSync('cart') || '[]')
  }),
  // 模块的 mutations 方法
  mutations: {
    addToCart(state,goods){
       // 根据提交的商品的Id，查询购物车中是否存在这件商品
      // 如果不存在，则 findResult 为 undefined；否则，为查找到的商品信息对象
      console.log('88',state);
      console.log(goods);
      const findResult = state.cart.find((x) => x.cartId === goods.cartId)
      console.log('66'+findResult);
      if(!findResult){
        state.cart.push(goods)
      }else{
        findResult.cartNum++
      }
       this.commit('m_cart/saveToStorage')
    },
    saveToStorage(state){
      uni.setStorageSync('cart',JSON.stringify(state.cart))
    },
    updateGoodsState(state,goods){
      console.log('updateGoodsState中的state',state);
      const findResult = state.cart.find(x=> x.cartId === goods.cartId) 
      if(findResult){
        //console.log('findResult.status的',findResult.status);
        findResult.status = goods.status
        this.commit('m_cart/saveToStorage')
      }
    },
    updateGoodsCount(state, goods) {
      // 根据 goods_id 查询购物车中对应商品的信息对象
      const findResult = state.cart.find(x => x.cartId === goods.cartId)
    
      if(findResult) {
        // 更新对应商品的数量
        findResult.cartNum = goods.goods_count
        // 持久化存储到本地
        this.commit('m_cart/saveToStorage')
      }
    },
    removeGoodsById(state,cartId){
      state.cart = state.cart.filter(x => x.cartId !== cartId)
       this.commit('m_cart/saveToStorage')
    },
    updateAllGoodsState(state,newState){
      state.cart.forEach(x => x.status = newState)
      this.commit('m_cart/saveToStorage')
    }
  },
  
    // 模块的 getters 属性
    getters: {
      total(state){
        // let c = 0
        // state.cart.forEach(goods => c+= goods.goods_count)
        // return c
        
        return state.cart.reduce((total,item) => total +=item.cartNum,0)
      },
      checkedCount(state){
        // 先使用 filter 方法，从购物车中过滤器已勾选的商品
          // 再使用 reduce 方法，将已勾选的商品总数量进行累加
          // reduce() 的返回值就是已勾选的商品的总数量
       return state.cart.filter(x => x.status).reduce((total,item) => total +=item.cartNum,0)
      },
      checkedGoodsAmount(state){
        return state.cart.filter( x => x.status).reduce((total,item) => total +=item.cartNum * item.cartPrice,0)
      }
    },
}