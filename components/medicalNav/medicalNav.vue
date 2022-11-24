<template>
  <view class="content">
    <view class="nav-ul">
      <ul class="nav-ul1">
        <li @click="tolistPrescriptions">
          <image src="../../static/info.png" mode=""></image>
          <p>处方信息</p>
        </li>
        <li @click="toManagement">
          <image src="../../static/medical.png" mode=""></image>
          <p>我的订单</p>
        </li>
        <li @click="toClassification">
          <image src="../../static/warehouse.png" mode=""></image>
          <p>商品专区</p>
        </li>
      </ul>
      <ul class="nav-ul2">
        <li @click="toPhysical">
          <image src="../../static/message.png" mode=""></image>
          <p>体检报告</p>
        </li>
        <li @click="toLecture">
          <image src="../../static/doctor.png" mode=""></image>
          <p>医生讲座</p>
        </li>
        <li @click="toBenefits">
          <image src="../../static/heartbeat.png" mode=""></image>
          <p>会员福利</p>
        </li>
      </ul>
    </view>
  </view>
</template>

<script>
  export default {
    name:"medicalNav",
    data() {
      return {
        
      };
    },
    methods:{
      toBenefits() {
        uni.navigateTo({
          url:'../../pages/benefits/benefits'
        })
      },
      toManagement() {
        uni.navigateTo({
          url:'../../pages/management/management'
        })
      },
      toLecture() {
        uni.navigateTo({
          url:'../../pages/lecture/lecture'
        })
      },
      toPhysical() {
        uni.navigateTo({
          url:'../../pages/physicalList/physicalList'
        })
      },
      tolistPrescriptions() {
        uni.navigateTo({
          url:'../../pages/listPrescriptions/listPrescriptions'
        })
      },
      toClassification() {
        uni.navigateTo({
          url:'/pages/classification/classification'
        })
      }
    }
  }
</script>

<style scoped>
@import url("../../util/css/common.css");
.content {
  width: 100%;
  height: 580rpx;
  background-color: #F8F8F8;
  margin-top: -40rpx;
  border-radius: 40rpx 40rpx 0 0;
}
.content .nav-ul {
  padding: 54rpx 35rpx;
}
.content .nav-ul .nav-ul1 {
    display: flex;
    justify-content: space-between;
}
.content .nav-ul .nav-ul1 li {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 200rpx;
  height: 200rpx;
  background-color: #FFFFFF;
  border-radius: 20rpx;
  box-shadow:0 0 10rpx 5rpx rgba(0,0,0,0.1);
}
.content .nav-ul1 li image,.nav-ul2 li image {
  position: relative;
  width: 60rpx;
  height: 60rpx;
}
.nav-ul2 {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 200rpx;
  box-shadow:0 0 10rpx 5rpx rgba(0,0,0,0.1);
  border-radius: 20rpx;
  margin: 40rpx 0;
  background-color: #FFFFFF;
}
.nav-ul2 li {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 200rpx;
  height: 200rpx;
}
.nav-ul li image::after {
  content: '';
  z-index: 22;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 25rpx;
  height: 25rpx;
  border-radius: 50%;
  background-color: #177fff;
}
.nav-ul p {
  margin-top: 20rpx;
}
</style>
