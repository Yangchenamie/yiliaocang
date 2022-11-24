<template>
  <view class="content">
    <view class="back"></view>
    <image src="../../static/10.jpg" mode=""></image>
  </view>
</template>

<script>
  export default {
    name:"register",
    data() {
      return {
        
      };
    }
  }
</script>

<style>
.content {
  padding: 40rpx;
}
.content .back {
  margin-left: 20rpx;
  width: 620rpx;
  height: 20rpx;
  border-radius: 20rpx 20rpx 0 0;
  background-color: #f5f5f3;
  box-shadow:0 0 10rpx 5rpx rgba(0,0,0,0.1);
}
.content image {
  width: 100%;
  height: 220rpx;
  border-radius: 20rpx;
}
</style>
