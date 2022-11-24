<template>
  <view class="content">
    <view class="content-head">
      <h3>咨询专题</h3>
      <a class="more">更多 ></a>
    </view>
    <view class="content-con">
      <view class="content-body">
        <view class="items" v-for="(item,index) in ListAll" :key="index" @click="gotoDetail">
          <!-- <video id="myVideo" src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4" enable-danmu danmu-btn controls></video> -->
          <img :src="item.avatar" alt="">
          <view class="text">
            <p class="title">{{item.title}}</p>
            <p class="shop-keeper">{{item.gtime}}</p>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name:"consultingTopics",
    props:['ListAll'],
    data() {
      return {
      };
    },
    
    methods: {
      gotoDetail(){
        uni.navigateTo({
          url:'/pages/detail/detail'
        })
      }
     }
    
  }
</script>

<style>
.content {
  padding: 40rpx;
  background-color: #FFFFFF;
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
.content-con {
  width: 670rpx;
  border-radius: 20rpx;
  background-color: #FFFFFF;
  box-shadow:0 0 10rpx 5rpx rgba(0,0,0,0.1);
} 
.content-body {
  padding: 30rpx;
}
.content-body .items {
  width: 610rpx;
  height: 250rpx;
  display: flex;
  margin: 40rpx 0;
  border-bottom: 4rpx solid #e0e0e0;
  border-radius: 20rpx;
}
.content-body .items .text {
  display: flex;
  flex-direction: column;
  width: 300rpx;
  padding: 0 20rpx;
}
.content-body .items .text .title {
  padding-top: 10rpx;
  width: 320rpx;
  font-size: 34rpx;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.content-body .items .text .shop-keeper {
  padding: 40rpx 0;
  font-size: 30rpx;
  color: #999999;
}
img {
  width: 270rpx;
  height: 200rpx;
  border-radius: 20rpx;
}
</style>
