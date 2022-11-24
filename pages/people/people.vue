<template>
  <view class="content">
    <!-- <view class="info">
      <view class="my-info">
        <image src="../../static/10.jpg" mode=""></image>
        <view class="name">
          <h1>每日健康
            <image src="../../static/vip.png" mode=""></image>
          </h1>
          <p>微信昵称：mymc-sandy</p>
        </view>
      </view>
      <view class="vip" @click="tomemberRecharge">
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
    <deliveryOrder></deliveryOrder>
    <reservationOrder></reservationOrder>
    <register></register>
    <otherFunctions></otherFunctions> -->
    <weixinlogin v-if="!token"></weixinlogin>
   <center v-else></center>
    <!-- <center></center> -->
  </view>
</template>

<script>
  import deliveryOrder from '../../components/deliveryOrder/deliveryOrder.vue'
  import reservationOrder from '../../components/reservationOrder/reservationOrder.vue'
  import register from '../../components/register/register.vue'
  import otherFunctions from '../../components/otherFunctions/otherFunctions.vue'
  import weixinlogin from '../../components/weixinlogin/weixinlogin.vue'
  import center from '../../components/center/center.vue'
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      tomemberRecharge() {
        uni.navigateTo({
          url:'../memberRecharge/memberRecharge'
        })
      } 
    },
    components:{
      deliveryOrder,reservationOrder,register,otherFunctions,weixinlogin,center
    },
    computed: {
      ...mapState('m_user', ['token']),
    },
  }
</script>

<style>
@import url("../../util/css/common.css");
body {
  background-color: #fdfdfd;
}
.content .info {
  width: 100%;
  height: 380rpx;
  background-color: #007AFF;
}
.content .my-info {
  display: flex;
  padding: 40rpx 40rpx;
  height: 170rpx;
  background-color: #007AFF;
}
.content .my-info image {
  width: 145rpx;
  height: 145rpx;
  border-radius: 50%;
}
.content .my-info .name {
  padding-left: 25rpx;
  margin-top: 20rpx;
}
.content .my-info .name h1 {
  display: flex;
  font-size: 34rpx;
  color: #FFFFFF;
}
.content .my-info .name h1 image {
  padding-left: 20rpx;
  width: 45rpx;
  height: 45rpx;
}
.content .my-info .name p {
  font-size: 28rpx;
  font-weight: 300;
  line-height: 65rpx;
  color: #FFFFFF;
}
.content .info .vip {
  border-radius: 10rpx 10rpx 0 0;
  margin-left: 40rpx;
  width: 670rpx;
  height: 130rpx;
  background: linear-gradient(45deg, #f7e5d5, #f2d4b9);
}
.content .info .vip .vip-box {
  display: flex;
  justify-content: space-between;
  padding: 40rpx 40rpx;
}
.content .info .vip .vip-left {
  display: flex;
  justify-content: space-between;
  width: 200rpx;
}
.content .info .vip .vip-left p {
  line-height: 50rpx;
  color: #b79979;
  font-size: 28rpx;
  font-weight: 700;
}
.content .info .vip .vip-left image {
  width: 45rpx;
  height: 45rpx;
}
.content .info .vip .vip-right {
  font-size: 25rpx;
  line-height: 55rpx;
  color: #b79979;
}
</style>
