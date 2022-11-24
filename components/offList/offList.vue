<template>
  <view>
    <!-- 核销列表 -->
      <view class="items">
        <view class="con-body">
            <ul class="items">
              <li class="item">
                <view class="item-head">
                  <view class="item-head-left">
                    <image src="../../static/order.png" mode=""></image>
                    <p>订单编号:123484411284</p>
                  </view>
                  <view class="item-head-right">
                    <p>待核销</p>
                  </view>
                </view>
                <view class="item-body">
                  <image src="../../static/10.jpg" mode=""></image>
                  <view class="detail">
                    <p class="title">[男]全面体检套餐专项</p>
                    <p class="status">定金状态:</p>
                    <P class="pre-time">预约时间:2022年7月22日09:00</P>
                  </view>
                </view>
                <view class="item-bootom">
                  <a class="time">完成时间:2022年7月22日11:00</a>
                  <view class="btn">
                    <a class="hexiao">核销码</a>
                  </view>
                </view>
              </li>
              <li class="item">
                <view class="item-head">
                  <view class="item-head-left">
                    <image src="../../static/order.png" mode=""></image>
                    <p>订单编号:123484411284</p>
                  </view>
                  <view class="item-head-right">
                    <p>待核销</p>
                  </view>
                </view>
                <view class="item-body">
                  <image src="../../static/10.jpg" mode=""></image>
                  <view class="detail">
                    <p class="title">[男]全面体检套餐专项</p>
                    <p class="status">定金状态:</p>
                    <P class="pre-time">预约时间:2022年7月22日09:00</P>
                  </view>
                </view>
                <view class="item-bootom">
                  <a class="time">完成时间:2022年7月22日11:00</a>
                  <view class="btn">
                    <a class="hexiao">核销码</a>
                  </view>
                </view>
              </li>
              <li class="item">
                <view class="item-head">
                  <view class="item-head-left">
                    <image src="../../static/order.png" mode=""></image>
                    <p>订单编号:123484411284</p>
                  </view>
                  <view class="item-head-right">
                    <p>待核销</p>
                  </view>
                </view>
                <view class="item-body">
                  <image src="../../static/10.jpg" mode=""></image>
                  <view class="detail">
                    <p class="title">[男]全面体检套餐专项</p>
                    <p class="status">定金状态:</p>
                    <P class="pre-time">预约时间:2022年7月22日09:00</P>
                  </view>
                </view>
                <view class="item-bootom">
                  <a class="time">完成时间:2022年7月22日11:00</a>
                  <view class="btn">
                    <a class="hexiao">核销码</a>
                  </view>
                </view>
              </li>
            </ul>
          </view>
        </view>
  </view>
</template>

<script>
  export default {
    name:"offList",
    data() {
      return {
        
      };
    },
    methods: {
      
    }
  }
</script>

<style scoped>
@import url("../../util/css/common.css");
.con-body {
  padding: 20rpx;
}
.items .item {
  margin: 40rpx 0;
  padding: 40rpx;
  width: 630rpx;
  border-radius: 20rpx;
  height: 330rpx;
  box-shadow:0 0 10rpx 5rpx rgba(0,0,0,0.1);
}
.items .item .item-head {
  display: flex;
  justify-content: space-between;
}
.items .item .item-head .item-head-left {
  display: flex;
}
.items .item .item-head .item-head-left p {
  font-size: 28rpx;
  line-height: 38rpx;
}
.items .item .item-head .item-head-left image {
  width: 40rpx;
  height: 40rpx;
}
.items .item .item-head .item-head-right p {
  font-size: 26rpx;
  position: relative;
}
.items .item .item-head .item-head-right p::before {
  content: '';
  position: absolute;
  left: -20rpx;
  top: 15rpx;
  width: 10rpx;
  height: 10rpx;
  background-color: #177FFF;
  border-radius: 50%;
}
.item-body {
  margin-top: 20rpx;
  display: flex;
}
.item-body image {
  width: 200rpx;
  height: 200rpx;
  border-radius: 20rpx;
}
.item-body .detail .title {
  width: 330rpx;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-body .detail {
  position: relative;
  padding-left: 20rpx;
  padding-top: 20rpx;
}
.item-body .detail .status {
  position: relative;
  font-size: 24rpx;
  padding-top: 50rpx;
  color: #8c8c8c;
}
.item-body .detail .status::after {
  position: absolute;
  content: '已退';
  left: 115rpx;
  top: 50rpx;
  color: #f9284d;
}
.item-body .detail .pre-time {
  color: #8c8c8c;
  font-size: 24rpx;
}
.item-bootom {
  padding-top: 20rpx;
  display: flex;
  justify-content: space-between;
}
.item-bootom .time {
  font-size: 28rpx;
  color: #666666;
  line-height: 60rpx;
  font-weight: 600;
}
.item-bootom .btn .hexiao {
  display: block;
  text-align: center;
  line-height: 50rpx;
  border: 4rpx solid #177FFF;
  border-radius: 20rpx;
  color: #177ffe;
  background-color: #f1f7ff;
  height: 50rpx;
  width: 150rpx;
}
</style>
