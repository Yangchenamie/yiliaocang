<template>
  <view class="content">
    <view class="reservation-order">
      <view class="reservation-nav">
        <view class="nav-head">
          <p>体检预约订单</p>
        </view>
        <view class="nav-item">
          <view class="items">
            <image src="../../static/all.png" mode=""></image>
            <p>分类</p>
          </view>
          <view class="items" @click="toWriteOffList">
           <image src="../../static/package.png" mode=""></image>
            <p>待核销</p>
          </view>
          <view class="items">
            <image src="../../static/file-done.png" mode=""></image>
            <p>已完成</p>
          </view>
          <view class="line"></view>
          <view class="items">
            <image src="../../static/file.png" mode=""></image>
            <p>全部</p>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name:"reservationOrder",
    data() {
      return {
        
      };
    },
    methods: {
      toWriteOffList() {
        uni.navigateTo({
          url:'../../pages/writeOffList/writeOffList'
        })
      }
    }
  }
</script>
<style scoped>
.content {
  padding: 40rpx;
}
.reservation-order {
  width: 590rpx;
  height: 150rpx;
  border-radius: 10rpx;
  background-color: #FFFFFF;
  box-shadow:0 0 10rpx 5rpx rgba(0,0,0,0.1);
  padding: 40rpx;
}
.reservation-nav {
  width: 590rpx;
  height: 150rpx;
}
.reservation-nav .nav-head {
  display: flex;
  justify-content: space-between;
}
.reservation-nav .nav-head .all {
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
.line {
  margin-top: 20rpx;
  width: 6rpx;
  height: 60rpx;
  background-color: #007AFF;
}
</style>
