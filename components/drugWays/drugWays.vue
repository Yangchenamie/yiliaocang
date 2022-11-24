<template>
  <view>
    <view class="item-head">
      <view class="item-head-left">
        <image src="../../static/ways.png" mode=""></image>
        <p>取药方式</p>
      </view>
    </view>
    <view class="item-body">
      <view class="item-btn">
        <view class="btn" :class="move===index?'active':''" v-for="(item,index) in breads" :key="item.id" @click="changeMove(index)">
          {{item.bread}}
        </view>
      </view>
      <view class="item-ways">
        <view class="item-ways-one">
          <img :src="imgUrl" alt="" @click="previewImg">
          <p>点击放大取药二维码</p>
        </view>
        <view class="item-ways-two">
          <img src="../../static/circle.png" alt="">
          <p>药品已出药</p>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name:"drugWays",
    data() {
      return {
        active:0,
        move:0,
        current: 0,
        imgUrl:'../../static/erweima.png',
        breads:[
            {
              id:1,
              bread:'药柜取药'
            },
            {
              id:2,
              bread:'供应链物流配送'
            },
          ]
        }
      },
    methods:{
      changeMove(index) {
        this.move = index
      },
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

<style>

.item-head {
  display: flex;
  justify-content: space-between;
  padding: 0 30rpx;
  margin: 30rpx 0;
}
.item-head .item-head-left {
  display: flex;
}
 .item-head .item-head-left p {
  fonuni-size: 32rpx;
  line-height: 38rpx;
  margin-left: 15rpx;
  font-weight: 700;
}
.item-head .item-head-left image {
  width: 40rpx;
  height: 40rpx;
  margin-right: 6rpx;
}

.item-body{
  box-shadow:0 0 10rpx 5rpx rgba(0,0,0,0.1);
  margin: 0 26rpx 20rpx;
  border-radius: 6rpx;
  padding: 0 10rpx 20rpx;
  box-sizing: border-box;
}
.item-btn{
  padding: 30rpx;
}
.btn{
  display: inline-block;
  padding: 15rpx 20rpx;
  border-radius: 10rpx;
  margin-right: 40rpx;
  background-color: #f8f8f8;
  font-size: 26rpx;
  color: #333;
}
.active{
   background-color: #177ffe;
   color: #fff;
}
  
.item-ways{
  display: flex;
  justify-content: space-around;
  margin: 30rpx 0;
}
.item-ways-one{
  width: 220rpx;
}
.item-ways-one img{
  width: 220rpx;
  height: 220rpx;
}
.item-ways-one p{
  font-size: 20rpx;
  text-align: center;
  color: #177ffe;
  margin: 8rpx 0;
}
.item-ways-two{
  width: 180rpx;
}
.item-ways-two img{
  width: 180rpx;
  height: 180rpx;
}
.item-ways-two p{
  text-align: center;
  color: #333;
  margin: 8rpx 0;
}
</style>