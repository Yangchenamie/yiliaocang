<template>
  <view class="comments">
    <view class="index-comment">
      <image src="../../static/10.jpg" mode="" class="index-img"></image>
      <view class="comment-con">
        <view class="comment-name">小鸡炖蘑菇</view>
        <view class="comment-text">视频真的好看！视频真的好看！视频真的好看！视频真的好看！</view>
        <view class="comment-bot">
          <view class="time">8小时前</view>
        </view>
      </view>
    </view>
    <view class="index-comment">
      <image src="../../static/10.jpg" mode="" class="index-img"></image>
      <view class="comment-con">
        <view class="comment-name">小鸡炖蘑菇</view>
        <view class="comment-text">视频真的好看！视频真的好看！视频真的好看！视频真的好看！</view>
        <view class="comment-bot">
          <view class="time">8小时前</view>
        </view>
      </view>
    </view>
    <view class="index-comment">
      <image src="../../static/10.jpg" mode="" class="index-img"></image>
      <view class="comment-con">
        <view class="comment-name">小鸡炖蘑菇</view>
        <view class="comment-text">视频真的好看！视频真的好看！视频真的好看！视频真的好看！</view>
        <view class="comment-bot">
          <view class="time">8小时前</view>
        </view>
      </view>
    </view>
    <view class="index-comment">
      <image src="../../static/10.jpg" mode="" class="index-img"></image>
      <view class="comment-con">
        <view class="comment-name">小鸡炖蘑菇</view>
        <view class="comment-text">视频真的好看！视频真的好看！视频真的好看！视频真的好看！</view>
        <view class="comment-bot">
          <view class="time">8小时前</view>
        </view>
      </view>
    </view>
    <view class="index-comment">
      <image src="../../static/10.jpg" mode="" class="index-img"></image>
      <view class="comment-con">
        <view class="comment-name">小鸡炖蘑菇</view>
        <view class="comment-text">视频真的好看！视频真的好看！视频真的好看！视频真的好看！</view>
        <view class="comment-bot">
          <view class="time">8小时前</view>
        </view>
      </view>
    </view>
    <view class="index-comment">
      <image src="../../static/10.jpg" mode="" class="index-img"></image>
      <view class="comment-con">
        <view class="comment-name">小鸡炖蘑菇</view>
        <view class="comment-text">视频真的好看！视频真的好看！视频真的好看！视频真的好看！</view>
        <view class="comment-bot">
          <view class="time">8小时前</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      
    }
  }
</script>

<style scoped>
.comments {
  padding: 10rpx 40rpx;
}
.index-comment .index-img {
  width: 80rpx;
  height: 80rpx;
  margin-right: 20rpx;
  border-radius: 50%;
}
.index-comment {
  display: flex;
  border-radius: 20rpx;
  background-color: #fdfdfd;
  box-shadow: 0 10rpx 10rpx 0 #cbd1dc;
  /* border-bottom: 2rpx solid #828282; */
  margin-bottom: 40rpx;
}
.comment-con .comment-bot {
  display: flex;
  margin-top: 10rpx;
}
.comment-con .comment-name {
  font-size: 28rpx;
  /* width: 200rpx; */
  margin-bottom: 10rpx;
  color: #828282;
}
.comment-con .comment-bot .time {
  font-size: 28rpx;
  margin-right: 30rpx;
  color: #a8a8a8;
}
.comment-con .comment-text {
  width: 550rpx;
}
</style>
