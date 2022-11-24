<template>
  <view class="content">
    <view class="other-functions">
      <view class="other-functions-nav">
        <view class="nav-head">
          <p>其它功能</p>
        </view>
        <view class="nav-item">
          <view class="items" @click="tomemberRecharge">
            <image src="../../static/money.png" mode=""></image>
            <p>我的余额</p>
          </view>
          <view class="items" @click="toAddress">
            <image src="../../static/address2.png" mode=""></image>
            <p>收货地址</p>
          </view>
          <view class="items" @click="toPhysical">
            <image src="../../static/file-text.png" mode=""></image>
            <p>体检报告</p>
          </view>
          <view class="items" @click="toCollection">
            <image src="../../static/Star.png" mode=""></image>
            <p>我的收藏</p>
          </view>
          <view class="items">
            <image src="../../static/ask.png" mode=""></image>
            <p>常见问题</p>
          </view>
          <view class="items">
            <image src="../../static/customer-service.png" mode=""></image>
            <p>联系客服</p>
          </view>
          <view class="items">
            <image src="../../static/icon-peoples.png" mode=""></image>
            <p>合伙人登录</p>
          </view>
          <view class="items">
            <image src="../../static/setting.png" mode=""></image>
            <p>设置</p>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name:"otherFunctions",
    data() {
      return {
        
      };
    },
    methods: {
      toPhysical() {
        uni.navigateTo({
          url:'../../pages/physicalList/physicalList'
        })
      },
      toCollection() {
        uni.navigateTo({
          url:'../../pages/collection/collection'
        })
      },
      toAddress() {
        uni.navigateTo({
          url:'../../pages/address/address'
        })
      },
      tomemberRecharge() {
        uni.navigateTo({
          url:'../../pages/memberRecharge/memberRecharge'
        })
      }
    }
  }
</script>

<style scoped>
.content {
  padding: 40rpx;
}
.other-functions {
  width: 590rpx;
  height: 300rpx;
  border-radius: 10rpx;
  background-color: #FFFFFF;
  box-shadow:0 0 10rpx 5rpx rgba(0,0,0,0.1);
  padding: 40rpx;
}
.other-functions-nav {
  width: 590rpx;
  height: 150rpx;
}
.other-functions-nav .nav-head {
  display: flex;
  justify-content: space-between;
}
.nav-item {
  padding-top: 25rpx;
  flex-wrap: wrap;
  /* justify-content: space-around; */
  display: flex;
}
.nav-item .items {
  width: 147rpx;
  height: 120rpx;
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
.nav-item .items p {
  text-align: center;
  width: 140rpx;
  line-height: 50rpx;
  height: 20rpx;
  padding: 10rpx;
  font-size: 28rpx;
}
</style>

