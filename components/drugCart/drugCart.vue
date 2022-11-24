<template>
<view class="">
  <view class="goods-item">
    <!-- 左边 -->
    <view class="goods-item-left">
      <radio :checked="goods.status" color="#177fff" v-if="showRadio" @click="radioClickHandler"></radio>
      <!-- <radio color="#177fff" :checked="!showRadio" @click="radioClickHandler"></radio> -->
      <image :src="goods.cartPicture|| defaultPic" class="goods-pic"></image>
      <!-- <image src="../../static/10.jpg" class="goods-pic"></image> -->
    </view>
    <!-- 右边 -->
    <view class="goods-item-right">
      <view class="goods-name">{{goods.cartName}}</view>
     <!-- <view class="goods-name">颈椎热敷神器-自发热</view> -->
      <view class="goods-info-box">
       <view class="goods-price">￥{{goods.cartPrice | tofixed}}</view>
        <!-- <view class="goods-price">￥30</view> -->
        <uni-number-box :min="1" @change="numChangeHandler" :value="goods.cartNum"></uni-number-box>
      </view>
    </view>
  </view>

  </view>

</template>

<script>
  import settle from '../../components/settle/settle.vue'
  export default {
    name:"drugCart",
    props: {
      // 商品的信息对象
      goods: {
        type: Object,
        default: {},
      },
      showRadio:{
        type: Boolean,
        default:false
      },
      showNum:{
        type: Boolean,
        default:false
      }
    },
    data() {
      return {
        defaultPic: 'https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png',
      };
    },
    filters:{
      tofixed(num){
        return Number(num).toFixed(2)
      }
    },
    methods:{
      radioClickHandler(){
        console.log('第1个',this.goods.status);
        this.$emit('radio-change',{
          cartId: this.goods.cartId,
          status: !this.goods.status
        })
       
      },
      numChangeHandler(val){
        console.log('',val);
        this.$emit('num-change',{
          cartId: this.goods.cartId,
          goods_count: +val
        })
      }
      },
        
      components:{
        settle
      }
  }
</script>

<style  lang="scss">
.goods-item{
    display: flex;
    padding: 20rpx 10rpx;
    // justify-content: space-between;
      border-bottom: 2rpx solid #f0f0f0;
    .goods-item-left{
     margin-right: 18rpx;
     display: flex;
     align-items: center;
     justify-content: space-between;
     .goods-pic{
       width: 100px;
       height: 100px;
       display: block;
     }
   }   
   .goods-item-right {
       display: flex;
       flex: 1;
       flex-direction: column;
       justify-content: space-between;
   
       .goods-name {
         font-size: 30rpx;
       }
      .goods-info-box{
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
       .goods-price {
         font-size: 32rpx;
         color: #c00000;
       }
     }
  }

</style>