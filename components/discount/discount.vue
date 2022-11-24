<template>
  <view class="content">
    <view class="content-head">
      <h3>体验优惠套餐专区</h3>
      <view class="more" @click="toTestAppointment">更多 ></view>
    </view>
    <view class="content-body">
      <image src="../../static/1.jpg" mode=""></image>
      <p class="title">体验优惠套餐-肝脏|血液|胃|心脏|肺等...</p>
      <p class="time">截止时间：2022.06.22</p>
      <view class="price">
        <p class="pre-price">400</p>
        <p class="now-price">200</p>元
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name:"discount",
    data() {
      return {
        
      };
    },
    onLoad() {
      this.getDiscountList()
    },
    methods: {
      toTestAppointment() {
        uni.navigateTo({
          url:'../../pages/testAppointment/testAppointment'
        })
      },
      // async getDiscountList() {
      //   const res = await this.request({
      //     url: ':7003/thaliservice/thali/findAll'
      //   })
      //   this.DiscountList = res
      // },
    }
  }
</script>

<style scoped>
.content {
  padding: 40rpx;
}
.content-head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50rpx;
}
.content-head h3 {
  font-size: 40rpx;
  font-weight: 600;
}
.content-head .more {
  font-size: 30rpx;
  color: #979797;
  line-height: 50rpx;
}
.content-body {
  width: 100%;
  height: 600rpx;
  border-radius: 20rpx;
  background-color: #FFFFFF;
  box-shadow:0 0 10rpx 5rpx rgba(0,0,0,0.1);
}
.content-body image {
  width: 100%;
  height: 50%;
  border-radius: 20rpx 20rpx 0 0;
}
.content-body .title {
  padding: 30rpx;
  font-weight: 500;
  font-size: 35rpx;
  color: #333333;
}
.content-body .time {
  padding-left: 30rpx;
  font-size: 30rpx;
  color: #999999;
}
.content-body .price {
  line-height: 50rpx;
  font-size: 28rpx;
  font-weight: 600;
  display: flex;
  padding: 40rpx 30rpx;
}
.content-body .price .pre-price {
  color: #f9103c;
  margin-right: 20rpx;
  line-height: 50rpx;
  text-decoration: line-through;
}
.content-body .price .now-price {
  font-size: 38rpx;
  color: #f9103c;
}
</style>
