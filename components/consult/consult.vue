<template>
  <view class="content">
    <view class="content-head">
      <h3>健康咨询</h3>
      <view class="more" @click="tolistInquiries">更多></view>
    </view>
    <view class="content-body">
      <ul>
        <navigator :url="'/pages/detail/detail?gid='+item.id">
          <li v-for="(item,index) in list" :key="index" >
            <image :src="item.avatar"></image>
            <view class="text-con">
              <p class="title">{{item.title}}</p>
              <p class="theme">健康</p>
              <P class="time">{{item.gtime}}</P>
            </view>
          </li>
        </navigator>
        
      </ul>
    </view>
  </view>
</template>

<script>
  export default {
    props:['list'],
    name:"consult",
    data() {
      return {
        
      };
    },
    methods: {
      tolistInquiries() {
        uni.switchTab({
          url:'/pages/listInquiries/listInquiries'
        })
      }
    }
  }
</script>

<style scoped>
@import url("../../util/css/common.css");
.content {
  padding: 40rpx;
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
.content-body ul li {
  display: flex;
  width: 100%;
  height: 300rpx;
  background-color: #FFFFFF;
  box-shadow:0 0 10rpx 5rpx rgba(0,0,0,0.1);
  border-radius: 20rpx;
  margin-bottom: 50rpx;
}
.content-body ul li:last-child {
  margin-bottom: 0;
}
.content-body ul li image {
  width: 340rpx;
  height: 300rpx;
  border-radius: 20rpx;
}
.content-body ul li .text-con {
  width: 300rpx;
  padding: 40rpx 30rpx;
}
.content-body ul li .text-con .title {
  font-size: 36rpx;
  font-weight: 600;
  width: 300rpx;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.content-body ul li .text-con .theme {
  padding-top: 50rpx;
  font-size: 28rpx;
  color: #999999;
}
.content-body ul li .text-con .time {
  font-size: 28rpx;
  color: #999999;
}
</style>
