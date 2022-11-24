<template>
  <view v-if="cart.length !== 0">
    <uSegmentedControl :current="current" :values="items" @clickItem="onClickItem" styleType="text"
      activeColor="#177fff"></uSegmentedControl>
      <view class="content">
        <view v-show="current === 0">
          <uni-swipe-action>
              <block  v-for="(goods,i) in cart" :key="i">
                <uni-swipe-action-item :right-options="options" @click="swipeActionClickHandler(goods)">
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
    <image src="/static/cart_empty@2x.png" class="empty-img"></image>
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
    onLoad() {
      const uId = uni.getStorageSync('uId')
      this.getCartInfo(uId)
    },
    computed:{
      ...mapState('m_user',['uId']),
      ...mapState('m_cart',['cart']),
     
    },
    methods: {
 ...mapMutations('m_cart',['updateGoodsState','updateGoodsCount','removeGoodsById']),
      onClickItem(e) {
        if (this.current != e.currentIndex) {
          this.current = e.currentIndex
        }
      },
        
      async getCartInfo(uId){
        const res = await this.request({
          url:`http://1.12.244.193:8020/shop/cart/${uId}`
        })
        console.log('1111111',res);
        const cartList = res.data.list
        this.goods = cartList
        console.log('99',res);
      },
      
      radioChangeHandler(e){
        console.log(e);
        this.updateGoodsState(e)
      },
      numChangeHandler(e){
        console.log(e);
        this.updateGoodsCount(e)
      },
      swipeActionClickHandler(goods){
        console.log(goods.cartId);
        this.removeGoodsById(goods.cartId)
      },
     
    },
    components: {
      uSegmentedControl,drugCart,physicalCart
    }
  }
</script>

<style>
.empty-cart {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 150px;
}
  .tip-text {
    font-size: 12px;
    color: gray;
    margin-top: 15px;
  }
 .empty-img {
      width: 90px;
      height: 90px;
    }
</style>
