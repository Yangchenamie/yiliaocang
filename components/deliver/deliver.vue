<template>
  <view>
    <view class="con-body">
      <ul class="items">
        <li class="item" @click="toOrderWriteOff">
          <view class="item-head">
            <view class="item-head-left">
              <image src="../../static/order.png" mode=""></image>
              <p>订单编号:123484411284</p>
            </view>
            <view class="item-head-right">
              <p>待收货</p>
            </view>
          </view>
          <view class="item-body">
            <image src="../../static/10.jpg" mode=""></image>
            <view class="detail">
              <p class="title">治疗患者痔疮垫子-神奇</p>
              <p class="number">X1</p>
              <p class="kind">经典小号-白色</p>
              <P class="price">￥30</P>
            </view>
          </view>
          <view class="item-bootom">
            <a class="more">更多</a>
            <view class="btn">
              <a class="logistics">查看物流</a>
              <a class="receipt">确认收货</a>
            </view>
          </view>
        </li>
        <li class="item" @click="toOrderWriteOff">
          <view class="item-head">
            <view class="item-head-left">
              <image src="../../static/order.png" mode=""></image>
              <p>订单编号:123484411284</p>
            </view>
            <view class="item-head-right">
              <p>待收货</p>
            </view>
          </view>
          <view class="item-body">
            <image src="../../static/10.jpg" mode=""></image>
            <view class="detail">
              <p class="title">治疗患者痔疮垫子-神奇</p>
              <p class="number">X1</p>
              <p class="kind">经典小号-白色</p>
              <P class="price">￥30</P>
            </view>
          </view>
          <view class="item-bootom">
            <a class="more">更多</a>
            <view class="btn">
              <a class="logistics">查看物流</a>
              <a class="receipt">确认收货</a>
            </view>
          </view>
        </li>
        <li class="item" @click="toOrderWriteOff">
          <view class="item-head">
            <view class="item-head-left">
              <image src="../../static/order.png" mode=""></image>
              <p>订单编号:123484411284</p>
            </view>
            <view class="item-head-right">
              <p>待收货</p>
            </view>
          </view>
          <view class="item-body">
            <image src="../../static/10.jpg" mode=""></image>
            <view class="detail">
              <p class="title">治疗患者痔疮垫子-神奇</p>
              <p class="number">X1</p>
              <p class="kind">经典小号-白色</p>
              <P class="price">￥30</P>
            </view>
          </view>
          <view class="item-bootom">
            <a class="more">更多</a>
            <view class="btn">
              <a class="logistics">查看物流</a>
              <a class="receipt">确认收货</a>
            </view>
          </view>
        </li>
      </ul>
    </view>
  </view>
</template>

<script>
  export default {
    name:"deliver",
    data() {
      return {
        
      };
    },
    methods: {
      toOrderWriteOff() {
        uni.navigateTo({
          url:'../../pages/orderWriteOff/orderWriteOff'
        })
      }
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
  border-radius: 40rpx;
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
.item-body .detail .number {
  position: absolute;
  right: -85rpx;
  top: 20rpx;
}
.item-body .detail .kind {
  font-size: 28rpx;
  padding-top: 20rpx;
  padding-bottom: 20rpx;
  color: #b0b0b0;
}
.item-body .detail .price {
  color: red;
  font-weight: 600;
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
.item-bootom {
  padding-top: 20rpx;
  display: flex;
  justify-content: space-between;
}
.item-bootom .more {
  font-size: 28rpx;
  color: #666666;
  line-height: 60rpx;
  font-weight: 600;
}
.item-bootom .btn {
  display: flex;
  justify-content: space-between;
}
.item-bootom .btn .logistics,.receipt {
  text-align: center;
  margin-left: 20rpx;
  width: 140rpx;
  font-size: 28rpx;
  line-height: 50rpx;
  height: 50rpx;
  color: #6d6d6d;
  border: 4rpx solid #6d6d6d;
  border-radius: 40rpx;
}
.item-bootom .btn .receipt {
  color: #177FFF;
  border: 4rpx solid #177FFF;
  background-color: #f1f7ff;
}
</style>
