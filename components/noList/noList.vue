<template>
  <view class="container">
    <view class="nolist">
      <image src="../../static/uut-order-on.png" mode=""></image>
    </view>
    <p class="tip">~还没有相关咨询呢！</p>
  </view>
</template>

<script>
  export default {
    name: "noList",
    data() {
      return {

      };
    }
  }
</script>

<style scoped>
.container {
  margin: 100rpx auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.nolist {
  width: 120rpx;
  height: 120rpx;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #187fff;
}
.nolist image {
  width: 80rpx;
  height: 80rpx;
}
.tip { 
  margin-top: 20rpx;
  font-size: 26rpx;
  color: #818181;
}
</style>
