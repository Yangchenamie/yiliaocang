<template>
  <view class="content">
    <view class="commodity">
      <view class="commodity-box">
        <image src="../../static/10.jpg" mode=""></image>
        <view class="commodity-info">
          <p class="commodity-title">治疗患者痔疮垫子-神奇神奇神奇</p>
          <p class="commodity-kind">经典小号-白色</p>
          <view class="commodity-price">
            <p class="price">￥30.00</p>
            <P class="number">X1</P>
          </view>
        </view>
      </view>
    </view>
    <view class="status">
      <view class="status-box">
        <view class="status-head">
          <image src="../../static/packaging.png" mode=""></image>
          <view class="status-head-right">
            <P class="sta">核销状态</P>
            <P class="daihexiao">待核销</P>
          </view>
        </view>
        <view class="status-body">
          <view class="erweima" @click="previewImg">
            <image :src="imgUrl" mode=""></image>
            <p>点击放大核销码</p>
          </view>
          <p class="erweima-number">1019 0798 2827</p>
        </view>
      </view>
    </view>
    <view class="info">
      <view class="info-one">
        <p>商品总价:</p>
        <p class="info-price">￥30.00</p>
      </view>
      <view class="info-two">
        <p>运费:</p>
        <p class="info-price">￥0.00</p>
      </view>
      <view class="info-three">
        <p>实付款:</p>
        <p class="info-price">￥30.00</p>
      </view>
      <view class="info-four">
        <p>订单编号:</p>
        <p class="info-info">31231132123133223</p>
      </view>
      <view class="info-five">
        <p>交易方式:</p>
        <p class="info-info">微信支付</p>
      </view>
      <view class="info-six">
        <p>付款时间:</p>
        <p class="info-info">2022-08-04 12:17:29</p>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        imgUrl:'../../static/commodity.png'
      }
    },
    methods: {
      previewImg() {
        var imgurl = this.imgUrl
        uni.previewImage({
          current:'',
          urls:[imgurl]
        })
      }
    }
  }
</script>

<style scoped>
.content {
  padding: 20rpx;
}
/* 核销商品 */
.commodity {
  padding: 30rpx;
  background-color: #FFFFFF;
  border-radius: 20rpx;
  box-shadow:0 0 10rpx 5rpx rgba(0,0,0,0.1);
}
.commodity-box {
  display: flex;
  width: 650rpx;
  height: 180rpx;
}
.commodity-box image {
  border-radius: 20rpx;
  width: 180rpx;
  height: 180rpx;
}
.commodity-box .commodity-info .commodity-title {
  padding: 0 10rpx 20rpx 20rpx;
  width: 440rpx;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.commodity-box .commodity-info .commodity-kind {
  padding: 0 10rpx 10rpx 20rpx;
  font-size: 26rpx;
  color: #999999;
}
.commodity-box .commodity-info .commodity-price {
  display: flex;
  padding: 10rpx 10rpx 10rpx 20rpx;
  justify-content: space-between;
}
.commodity-box .commodity-info .commodity-price .price {
  color: #f9284d;
  font-weight: 600;
}
.commodity-box .commodity-info .commodity-price .number {
  font-size: 24rpx;
}
/* 二维码区域 */
.status {
  padding: 40rpx 20rpx 20rpx 20rpx;
  margin-top: 40rpx;
  border-radius: 20rpx;
  box-shadow:0 0 10rpx 5rpx rgba(0,0,0,0.1);
  background-color: #FFFFFF;
}
.status .status-box {
  width: 660rpx;
  font-weight: 600;
  height: 250rpx;
}
.status .status-box .status-head {
  display: flex;
}
.status .status-box .status-head image {
  width: 40rpx;
  height: 40rpx;
}
.status .status-box .status-head .status-head-right {
  width: 620rpx;
  margin-left: 20rpx;
  line-height: 35rpx;
  height: 60rpx;
  display: flex;
  justify-content: space-between;
}
.status .status-box .status-head .status-head-right {
  font-size: 34rpx;
  border-bottom: 2rpx dashed #666666;
}
.status .status-box .status-head .status-head-right .daihexiao {
  font-size: 28rpx;
  color: #177FFF;
}
.status .status-box .status-body {
  display: flex;
  justify-content: space-between;
}
.status .status-box .status-body .erweima {
  padding-left: 50rpx;
  padding-top: 15rpx;
  display: flex;
  flex-direction: column;
}
.status .status-box .status-body .erweima p {
  font-size: 20rpx;
  text-align: left;
  padding-left: 5rpx;
  color: #177FFF;
}
.status .status-box .status-body .erweima image {
  width: 150rpx;
  height: 150rpx;
}
.status .status-box .status-body .erweima-number {
  line-height: 200rpx;
  color: #7d7d7d;
}
.info {
  margin-top: 40rpx;
  padding: 20rpx;
  border-radius: 20rpx;
  background-color: #FFFFFF;
  box-shadow:0 0 10rpx 5rpx rgba(0,0,0,0.1);
}
.info-one,.info-two,.info-three,.info-four,.info-five,.info-six {
  display: flex;
  justify-content: space-between;
  padding: 20rpx;
}
.info-three {
  padding-bottom: 40rpx;
  border-bottom: 2rpx solid #C0C0C0;
}
.info-four {
  padding-top: 40rpx;
}
.info-three .info-price {
  font-size: 36rpx;
  color: #f9284d;
  font-weight: 600;
}
.info-four .info-info,.info-five .info-info,.info-six .info-info {
  color: #666666;
}
</style>
