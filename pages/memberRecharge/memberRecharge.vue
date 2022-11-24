<template>
  <view>
    <view class="top">
      <view class="balance">
        <p>账户可用余额</p>
        <P class="integer">￥00.</P>
        <p class="decimal">00</p>
      </view>
    </view>
    <view class="balance-box">
      <h3>请选择提现余额</h3>
      <view class="rmb-box">
        <a :class="active===index?['active,active::after']:''" v-for="(item,index) in yuan" :key="item.id" @click="change(index)">{{item.number}}</a>
        <view class="pay">
          微信支付
        </view>
      </view>
    </view>
    <view class="explain-box">
      <p class="explain">充值说明:</p>
      <p>1.充值后金额立即到账，余额XXXXXXXXXXX</p>
      <p>2.单个用户可充值多次，每次充值均可获得对应积分，积分过期</p>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        active: 0,
        yuan: [
          {
            id:1,
            number:'10元'
          },
          {
            id:2,
            number:'30元'
          },
          {
            id:3,
            number:'50元'
          },
          {
            id:4,
            number:'100元'
          },
          {
            id:5,
            number:'500元'
          },
          {
            id:6,
            number:'自定义'
          }
        ],
      }
    },
    methods: {
      change(index) {
        this.active = index
      }
    }
  }
</script>

<style scoped>
.top {
  width: 100%;
  background-color: #177FFF;
  height: 300rpx;
}
.top .balance {
  display: flex;
  padding: 60rpx;
  font-size: 32rpx;
  font-weight: 600;
  color: #FFFFFF;
}
.top .balance .integer {
  font-size: 45rpx;
  line-height: 45rpx;
}
.top .balance .decimal {
  line-height: 50rpx;
}
.balance-box {
  margin-left: 30rpx;
  width: 630rpx;
  box-shadow:0 0 10rpx 5rpx rgba(0,0,0,0.1);
  margin-top: -130rpx;
  padding: 30rpx;
  /* height: 300rpx; */
  border-radius: 20rpx;
  background-color: #FFFFFF;
}
.balance-box h3 {
  font-weight: 600;
}
.balance-box .rmb-box {
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
}
.balance-box .rmb-box a {
  display: block;
  width: 160rpx;
  margin-top: 40rpx;
  height: 100rpx;
  text-align: center;
  border-radius: 20rpx;
  line-height: 100rpx;
  background-color: #FFFFFF;
  border: 4rpx solid #e1e1e1;
  
}
.balance-box .rmb-box .pay {
  width: 590rpx;
  margin-left: 20rpx;
  text-align: center;
  line-height: 100rpx;
  font-weight: 600;
  letter-spacing: 3rpx;
  font-size: 34rpx;
  color: #FFFFFF;
  height: 100rpx;
  border-radius: 40rpx;
  margin-top: 100rpx;
  background: linear-gradient(135deg,#1791fc,#17c0f4);
}
.active {
  position: relative;
  background-color: #e7f2ff !important;
  border: 4rpx solid #177fff !important;
}
.active::after {
  content: '';
  width: 30rpx;
  height: 30rpx;
  border-radius: 50%;
  background: url(../../static/right.png) no-repeat #177FFF;
  background-size: 30rpx;
  background-position: left;
  position: absolute;
  right: 10rpx;
  top: 10rpx;
}
.explain-box {
  margin-top: 100rpx;
  padding: 40rpx;
}
.explain-box p {
  color: #999999;
  padding-top: 20rpx;
}
.explain-box .explain {
  font-size: 36rpx;
  font-weight: 600;
  color: #666666;
}
</style>
