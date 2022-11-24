<template>
  <view class="content">
    <ul class="con-ul">
      <li  v-for="(item,index) in ListAll" :key="index">
        <navigator :url="'/pages/detail/detail?gid='+item.id">
          <view class="li-fl">
            <img :src="item.avatar" alt="">
          </view>
          <view class="li-fr">
            <view class="title">
              {{item.title}}
            </view>
            <view class="much">
              好评率100% ·777人看过
            </view>
            <view class="rank">
              <view class="rank-fl">
                好评榜
              </view>
              <view class="rank-fr">
                好评榜第7名
              </view>
            </view>
            <view class="free">
              免费
            </view>
            
          </view>
        </navigator>
      </li>
    </ul>
  </view>
</template>

<script>
  export default {
    name:"synthesis",
    props:['ListAll'],
    data() {
      return {
        
      };
    },
    methods: {
      
  },
}
</script>

<style>
  
  .con-ul li{
    height: 280rpx;
    padding: 40rpx 30rpx 30rpx;
    border-bottom: 10rpx solid #f5f5f5;
  }
.con-ul li img{
  width: 100%;
  height: 200rpx;
}
.li-fl{
  width: 41%;
  float: left;
}
.li-fr{
  width: 59%;
  float: left;
  padding-left: 20rpx;
  box-sizing: border-box;
}
.li-fr .title{
  margin-top: 10rpx;
    color: #333;
    font-size: 32rpx;
    line-height: 42rpx;
  }
.li-fr .much{
  margin: 20rpx 0;
    color: #999;
    font-size: 24rpx; 
}
  
.li-fr .rank{
  border-radius: 10rpx;
  width: 63%;
  height: 60rpx;
  background-color: #8abeff;
  font-size: 24rpx;
  line-height: 60rpx;
  color: #fff;
}
.rank .rank-fl{
  width: 35%;
  float: left;
  text-align: center;
  background-color: #177fff;
  border-top-left-radius: 10rpx;
  border-bottom-left-radius: 10rpx;
}
.rank .rank-fr{
  float: left;
  width: 65%;
  text-align: center;
}
.li-fr .free{
  color: #f9284d;
  font-size: 28rpx;
  margin-top: 10rpx;
}
</style>