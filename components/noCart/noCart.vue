<template>
  <view class="container">
    <view class="nocart">
      <image src="../../static/cart-full(1).png" mode=""></image>
    </view>
    <p class="tip">~订单空空如也</p>
    <p class="toshop" @click="toClassification">点我去逛一逛吧!</p>
  </view>
</template>

<script>
  export default {
    name:"noCart",
    data() {
      return {
        
      };
    },
    methods: {
      toClassification() {
        uni.navigateTo({
          url:'/pages/classification/classification'
        })
      }
    }
  }
</script>

<style scoped>
.container {
  margin: 400rpx auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
} 
.nocart {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120rpx;
  height: 120rpx;
  border-radius: 50%;
  background-color: #187fff;
}
.nocart image {
  width: 80rpx;
  height: 80rpx;
}
.tip { 
  margin-top: 20rpx;
  font-size: 26rpx;
  color: #818181;
}
.toshop {
  font-size: 22rpx;
  margin-top: 10rpx;
  color: #187fff;
}
</style>