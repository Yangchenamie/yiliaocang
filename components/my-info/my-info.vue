<template>
    <view class="info">
      <view class="my-info">
        <image  :src="userInfo.avatarUrl" mode=""></image>
        <view class="name">
          <h1>每日健康
            <image src="../../static/vip.png" mode=""></image>
          </h1>
          <p>微信昵称：{{userInfo.nickName}}</p>
        </view>
      </view>
      <view class="vip" @click="toReservationOrder">
        <view class="vip-box">
          <view class="vip-left">
            <image src="../../static/vip.png" mode=""></image>
            <p>xxx会员</p>
          </view>
          <view class="vip-right">
            有效期至 2020 - 01 - 02 >
          </view>
        </view>
      </view>
    </view>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name:"my-info",
    data() {
      return {
        
      };
    },
    components:{
    
    },
    methods: {
      toReservationOrder() {
        uni.navigateTo({
          url:'/pages/memberRecharge/memberRecharge'
        })
      } 
    },
    computed:{
      ...mapState('m_user',['userInfo']),
    }
  }
</script>

<style>
 .info {
  width: 100%;
  height: 380rpx;
  background-color: #007AFF;
}
 .my-info {
  display: flex;
  padding: 40rpx 40rpx;
  height: 170rpx;
  background-color: #007AFF;
}
 .my-info image {
  width: 145rpx;
  height: 145rpx;
  border-radius: 50%;
}
 .my-info .name {
  padding-left: 25rpx;
  margin-top: 20rpx;
}
 .my-info .name h1 {
  display: flex;
  font-size: 34rpx;
  color: #FFFFFF;
}
 .my-info .name h1 image {
  padding-left: 20rpx;
  width: 45rpx;
  height: 45rpx;
}
 .my-info .name p {
  font-size: 28rpx;
  font-weight: 300;
  line-height: 65rpx;
  color: #FFFFFF;
}
 .info .vip {
  border-radius: 10rpx 10rpx 0 0;
  margin-left: 40rpx;
  width: 670rpx;
  height: 130rpx;
  background: linear-gradient(45deg, #f7e5d5, #f2d4b9);
}
 .info .vip .vip-box {
  display: flex;
  justify-content: space-between;
  padding: 40rpx 40rpx;
}
 .info .vip .vip-left {
  display: flex;
  justify-content: space-between;
  width: 200rpx;
}
 .info .vip .vip-left p {
  line-height: 50rpx;
  color: #b79979;
  font-size: 28rpx;
  font-weight: 700;
}
 .info .vip .vip-left image {
  width: 45rpx;
  height: 45rpx;
}
 .info .vip .vip-right {
  font-size: 25rpx;
  line-height: 55rpx;
  color: #b79979;
}
</style>