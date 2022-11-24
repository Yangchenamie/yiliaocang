<template>
  <view>
    <!-- 体检列表 -->
      <view class="items">
        <view class="con-body">
            <ul class="items">
              <!-- <li class="item" @click="toPhysicalInfo" v-for="(item,index) in daitijian">
                <view class="item-head">
                  <view class="item-head-left">
                    <image src="../../static/order.png" mode=""></image>
                    <p>订单编号:{{item.id}}</p>
                  </view>
                  <view class="item-head-right">
                    <p>{{item.stat}}</p>
                  </view>
                </view>
                <view class="item-body">
                  <image src="../../static/10.jpg" mode=""></image>
                  <view class="detail">
                    <p class="title">{{item.thaliName}}</p>
                    <p class="people">体检人:{{item.userName}}</p>
                    <P class="price">￥{{item.thaliPrice}}</P>
                  </view>
                </view>
                <view class="item-bootom">
                  <a class="time">预约时间:{{item.ytime}}</a>
                  <view class="btn">
                    <a class="hexiao">{{item.mstat}}</a>
                  </view>
                </view>
              </li> -->
              <li class="item" @click="toPhysicalInfo">
                <view class="item-head">
                  <view class="item-head-left">
                    <image src="../../static/file(1).png" mode=""></image>
                    <p>订单编号:12348411284</p>
                  </view>
                  <view class="item-head-right">
                    <p>待体检</p>
                  </view>
                </view>
                <view class="item-body">
              
                  <image  src="../../static/10.jpg"></image>
                  <view class="detail">
                    <p class="title">[男]全面体检套餐专项</p>
                    <p class="people">体检人:张XX</p>
                    <P class="price">￥30</P>
                  </view>
                </view>
                <view class="item-bootom">
                  <a class="time">预约时间: 2022年7月22日09:00</a>
                  <view class="btn">
                    <a class="hexiao">去支付</a>
                  </view>
                </view>
              </li>
              <li class="item" @click="toPhysicalInfo">
                <view class="item-head">
                  <view class="item-head-left">
                    <image src="../../static/file(1).png" mode=""></image>
                    <p>订单编号:12348411284</p>
                  </view>
                  <view class="item-head-right">
                    <p>待体检</p>
                  </view>
                </view>
                <view class="item-body">
              
                  <image  src="../../static/10.jpg"></image>
                  <view class="detail">
                    <p class="title">[男]全面体检套餐专项</p>
                    <p class="people">体检人:张XX</p>
                    <P class="price">￥30</P>
                  </view>
                </view>
                <view class="item-bootom">
                  <a class="time">预约时间: 2022年7月22日09:00</a>
                  <view class="btn">
                    <a class="hexiao">去支付</a>
                  </view>
                </view>
              </li>
              <li class="item" @click="toPhysicalInfo">
                <view class="item-head">
                  <view class="item-head-left">
                    <image src="../../static/file(1).png" mode=""></image>
                    <p>订单编号:12348411284</p>
                  </view>
                  <view class="item-head-right">
                    <p>待体检</p>
                  </view>
                </view>
                <view class="item-body">
              
                  <image  src="../../static/10.jpg"></image>
                  <view class="detail">
                    <p class="title">[男]全面体检套餐专项</p>
                    <p class="people">体检人:张XX</p>
                    <P class="price">￥30</P>
                  </view>
                </view>
                <view class="item-bootom">
                  <a class="time">预约时间: 2022年7月22日09:00</a>
                  <view class="btn">
                    <a class="hexiao">去支付</a>
                  </view>
                </view>
              </li>
              <li class="item" @click="toPhysicalInfo">
                <view class="item-head">
                  <view class="item-head-left">
                    <image src="../../static/file(1).png" mode=""></image>
                    <p>订单编号:12348411284</p>
                  </view>
                  <view class="item-head-right">
                    <p>待体检</p>
                  </view>
                </view>
                <view class="item-body">
              
                  <image  src="../../static/10.jpg"></image>
                  <view class="detail">
                    <p class="title">[男]全面体检套餐专项</p>
                    <p class="people">体检人:张XX</p>
                    <P class="price">￥30</P>
                  </view>
                </view>
                <view class="item-bootom">
                  <a class="time">预约时间: 2022年7月22日09:00</a>
                  <view class="btn">
                    <a class="hexiao">去支付</a>
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
    name:"pendingMedical",
    props:['daitijian'],
    data() {
      return {
        
      };
    },
    methods: {
      toPhysicalInfo() {
        uni.navigateTo({
          url:'../../pages/physicalInfo/physicalInfo'
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
  height: 310rpx;
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
  width: 180rpx;
  height: 180rpx;
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
.item-body .detail .people {
  position: relative;
  font-size: 24rpx;
  padding-top: 20rpx;
  padding-bottom: 20rpx;
  color: #8c8c8c;
}
.item-body .detail .price {
  color: #f9284d;
  font-size: 36rpx;
  font-weight: 600;
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
