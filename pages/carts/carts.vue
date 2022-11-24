<template>
  <view v-if="true">
    <uSegmentedControl :current="current" :values="items" @clickItem="onClickItem" styleType="text"
      activeColor="#177fff"></uSegmentedControl>
      <view class="content">
        <view v-show="current === 0">
          <uni-swipe-action>
              <block  v-for="(goods,i) in cart" :key="i">
                <uni-swipe-action-item >
                  <drugCart :goods="goods"  :show-radio="true" :show-num="true" @radio-change="radioChangeHandler" @num-change="numChangeHandler"></drugCart>
                </uni-swipe-action-item>
              </block>
          </uni-swipe-action>
        </view>
        <view v-show="current === 1">
          <physicalCart></physicalCart>
        </view>
        
      </view>
      <settle></settle>
  </view>
  <view class="empty-cart" v-else>
    <text class="tip-text">空空如也~</text>
  </view>
</template>

<script>
    import bedgeMix from '@/mixins/tabbar-badge.js'
  import uSegmentedControl from '../../uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.vue'
  import drugCart from '../../components/drugCart/drugCart.vue'
  import physicalCart from '../../components/physicalCart/physicalCart.vue'
  import { mapState,mapMutations} from 'vuex'
  export default {
    mixins: [bedgeMix],
    data() {
      return {
        items: ['药品', '体检'],
        current: 0,
        goods:{},
        options:[{
          text:"删除",
          style:{
            backgroundColor:'#C00000'
          }
        }]
      }
    },
    onLoad(options) {
      const uId = uni.getStorageSync('uId')
      this.getCartInfo(uId)
    },
    computed:{
      ...mapState('m_user',['uId']),
      ...mapState('m_cart',['cart']),
      ...mapMutations('m_cart',['updateGoodsState','updateGoodsCount','removeGoodsById']),
    },
    methods: {

      onClickItem(e) {
        if (this.current != e.currentIndex) {
          this.current = e.currentIndex
        }
      },
        
      async getCartInfo(uId){
        const res = await uni.$http.get(`:8008/shop/cart/${uId}`)
        console.log(res);
        const cartList = res.data.data.list
        this.goods = cartList
        console.log(cartList);
      },
      
      radioChangeHandler(e){
        this.updateGoodsState(e)
      },
      numChangeHandler(e){
        this.updateGoodsCount(e)
      },
      swipeActionClickHandler(goods){
        
        this.removeGoodsById(goods.goods_id)
      }
    },
    components: {
      uSegmentedControl,drugCart,physicalCart
    }
  }
</script>

<style>
 .cart-container{
    padding-bottom: 50px;
    .cart-title{
    height: 40px;
    display: flex;
    align-items: center;
    font-size: 14px;
    padding-left: 5px;
    border-bottom: 1px solid #efefef;
    .cart-title-text{
    margin-left: 10px;  
    }
  }
  }
  .empty-cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 150px;
  
    .empty-img {
      width: 90px;
      height: 90px;
    }
  
    .tip-text {
      font-size: 12px;
      color: gray;
      margin-top: 15px;
    }
  }
</style>
