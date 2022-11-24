<template>
  <view class="content">
    <view class="send-order">
      <view class="send-nav">
        <view class="nav-head">
          <p>药品配送订单</p>
          <view class="all" @click="toManagement">全都订单 ></view>
        </view>
        <view class="nav-item">
          <view class="items">
            <image src="../../static/package.png" mode=""></image>
            <p>待收获</p>
          </view>
          <view class="items">
            <image src="../../static/Truck.png" mode=""></image>
            <p>待收货</p>
          </view>
          <view class="items">
            <image src="../../static/file-done.png" mode=""></image>
            <p>已完成</p>
          </view>
          <view class="items">
            <image src="../../static/icon_money.png" mode=""></image>
            <p>售后</p>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name:"deliveryOrder",
    data() {
      return {
        
      };
    },
    methods: {
      toManagement() {
        uni.navigateTo({
          url:'../../pages/management/management'
        })
      }
    }
  }
</script>

<style scoped>
.content {
  padding: 40rpx;
}
.send-order {
  width: 590rpx;
  height: 150rpx;
  border-radius: 10rpx;
  background-color: #FFFFFF;
  box-shadow:0 0 10rpx 5rpx rgba(0,0,0,0.1);
  padding: 40rpx;
}
.send-nav {
  width: 590rpx;
  height: 150rpx;
}
.send-nav .nav-head {
  display: flex;
  justify-content: space-between;
}
.send-nav .nav-head .all {
  font-size: 26rpx;
  color: #666666;
}
.nav-item {
  padding-top: 25rpx;
  justify-content: space-around;
  display: flex;
}
.nav-item .items {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.nav-item .items image {
  position: relative;
  width: 45rpx;
  height: 45rpx;
}
.nav-item .items image::before {
  content: '';
  position: absolute;
  width: 16rpx;
  height: 16rpx;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  background-color: #007AFF;
}
.nav-item .items p {
  padding: 10rpx;
  font-size: 28rpx;
}
</style>
