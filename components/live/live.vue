<template>
  <view class="content">
    <p class="head-title">精选直播</p>
    <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular="true">
      <swiper-item>
        <view class="swiper-item">
          <view class="swiper-item-con">
            <view class="items">
              <view class="label">
                <image src="../../static/Liveing-Outlined.png" mode="" class="img"></image>
                <p>直播中</p>
              </view>
              <image src="../../static/10.jpg" mode=""></image>
              <p class="title">糖尿病的饮食食疗法...</p>
              <view class="number">
                <image src="../../static/hot-fill.png" class="icon"></image>
                <p>300+人在看</p>
              </view>
              <a class="now">马上看</a>
            </view>
            <view class="items">
              <view class="label">
                <image src="../../static/Liveing-Outlined.png" mode="" class="img"></image>
                <p>直播中</p>
              </view>
              <image src="../../static/10.jpg" mode=""></image>
              <p class="title">糖尿病的饮食食疗法...</p>
              <view class="number">
                <image src="../../static/hot-fill.png" class="icon"></image>
                <p>300+人在看</p>
              </view>
              <a class="now">马上看</a>
            </view>
          </view>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item">
          <view class="swiper-item-con">
            <view class="items">
              <view class="label">
                <image src="../../static/Liveing-Outlined.png" mode="" class="img"></image>
                <p>直播中</p>
              </view>
              <image src="../../static/10.jpg" mode=""></image>
              <p class="title">糖尿病的饮食食疗法...</p>
              <view class="number">
                <image src="../../static/hot-fill.png" class="icon"></image>
                <p>300+人在看</p>
              </view>
              <a class="now">马上看</a>
            </view>
            <view class="items">
              <view class="label">
                <image src="../../static/Liveing-Outlined.png" mode="" class="img"></image>
                <p>直播中</p>
              </view>
              <image src="../../static/10.jpg" mode=""></image>
              <p class="title">糖尿病的饮食食疗法...</p>
              <view class="number">
                <image src="../../static/hot-fill.png" class="icon"></image>
                <p>300+人在看</p>
              </view>
              <a class="now">马上看</a>
            </view>
          </view>
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
  export default {
    name:"live",
    data() {
      return {
        
      };
    },
    components: {
      
    }
  }
</script>

<style scoped>
swiper {
  height: 460rpx;
}
.content {
  padding: 40rpx 40rpx 0 40rpx;
}
.head-title {
  font-size: 40rpx;
  font-weight: 600;
  margin-bottom: 40rpx;
}
.label {
  display: flex;
  position: absolute;
  width: 130rpx;
  height: 40rpx;
  border-radius: 20rpx 0;
  background: linear-gradient(45deg, #f65a46, #f43f50);
}
.swiper-item .swiper-item-con .items .label p {
  font-size: 26rpx;
  line-height: 40rpx;
  color: #FFFFFF;
}
.swiper-item .swiper-item-con .items .label .img {
  width: 40rpx;
  height: 40rpx;
}
.swiper-item-con {
  display: flex;
  justify-content: space-around;
}
.swiper-item-con .items {
  position: relative;
  width: 310rpx;
  height: 390rpx;
  font-size: 30rpx;
  border-radius: 20rpx;
  margin-right: 40rpx;
  box-shadow:0 0 10rpx 5rpx rgba(0,0,0,0.1);
}
.swiper-item-con .items .number {
  display: flex;
}
.swiper-item-con .items .number .icon {
  padding: 10rpx 0rpx 10rpx 10rpx;
  width: 45rpx;
  height: 45rpx;
}
.swiper-item-con .items .number p {
  line-height: 65rpx;
  font-size: 26rpx;
  color: #b0b0b0;
}
.swiper-item-con .items image {
  width: 100%;
  height: 190rpx;
  border-radius: 20rpx 20rpx 0 0;
}
.swiper-item-con .items .title {
  padding: 10rpx 10rpx;
  width: 285rpx;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.swiper-item-con .items .now {
  display: block;
  color: #FFFFFF;
  text-align: center;
  margin-left: 10rpx;
  font-size: 24rpx;
  line-height: 40rpx;
  width: 110rpx;
  border-radius: 18rpx;
  height: 40rpx;
  background-color: #177FFF;
}
.swiper-item-con .items:last-child {
  margin-right: 0;
}
</style>
