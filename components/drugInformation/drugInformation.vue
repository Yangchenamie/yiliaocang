<template>
  <view>
    <view class="item-head">
      <view class="item-head-left">
        <image src="../../static/detail.png" mode=""></image>
        <p>药品信息</p>
      </view>
      <view class="item-head-right">
        <p>2022.02.22</p>
      </view>
    </view>
    <view class="item-body">
      <ul class ="item-tr item-th">
        <li>药品/规格</li>
        <li>金额</li>
      </ul>
      <ul class="item-tr item-td" v-for="(item,index) in listAll" :key="index">
        <li>{{item.product}} * {{item.specs}}</li>
        <li>{{item.price}}</li>
      </ul>
    </view>
  </view>
</template>

<script>

  export default {
    name:"drugInformation",
    props:['listAll'],
    data(){
      return{
        
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
.item-head .item-head-right p {
  fonuni-size: 30rpx;
  position: relative;
}
.item-body{
  box-shadow:0 0 10rpx 5rpx rgba(0,0,0,0.1);
  margin: 0 26rpx 20rpx;
  border-radius: 6rpx;
  padding: 0 10rpx 20rpx;
  box-sizing: border-box;
}
  
.item-tr{
  display: flex;
  justify-content: space-around;
  flex-wrap:nowrap;
  text-align: center;
}
.item-tr :nth-child(1){
  flex:0.8;
}
.item-tr :nth-child(2){
  flex:0.4;
}
.item-th{
  font-size: 36rpx;
  padding: 10rpx 0 20rpx;
}
.item-td :nth-child(1){
  text-align: left;
  /* padding-left: 20rpx; */
  text-align: center;
  box-sizing: border-box;
}
.item-td :nth-child(2){
  text-align: center;
}
.item-td li{
  margin: 16rpx 0;
}
</style>