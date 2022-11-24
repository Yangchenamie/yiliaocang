<template>
  <view class="">
    <!-- 最终 -->
  <!-- <login v-if="!token"></login> -->
 <!-- <weixinlogin></weixinlogin> -->
  <weixinlogin v-if="!token"></weixinlogin>
  <center v-else></center>
  </view>
</template>

<script>
  import weixinlogin from '../../components/weixinlogin/weixinlogin.vue'
  import center from '../../components/center/center.vue'
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        
      }
    },
    computed: {
      ...mapState('m_user', ['token']),
    },
    components:{
      weixinlogin,center
    }
  }
</script>

<style>
@import url("../../util/css/common.css");
body {
  background-color: #fdfdfd;
}
.content .info {
  width: 100%;
  height: 380rpx;
  background-color: #007AFF;
}
.content .my-info {
  display: flex;
  padding: 40rpx 40rpx;
  height: 170rpx;
  background-color: #007AFF;
}
.content .my-info image {
  width: 145rpx;
  height: 145rpx;
  border-radius: 50%;
}
.content .my-info .name {
  padding-left: 25rpx;
  margin-top: 20rpx;
}
.content .my-info .name h1 {
  display: flex;
  font-size: 34rpx;
  color: #FFFFFF;
}
.content .my-info .name h1 image {
  padding-left: 20rpx;
  width: 45rpx;
  height: 45rpx;
}
.content .my-info .name p {
  font-size: 28rpx;
  font-weight: 300;
  line-height: 65rpx;
  color: #FFFFFF;
}
.content .info .vip {
  border-radius: 10rpx 10rpx 0 0;
  margin-left: 40rpx;
  width: 670rpx;
  height: 130rpx;
  background: linear-gradient(45deg, #f7e5d5, #f2d4b9);
}
.content .info .vip .vip-box {
  display: flex;
  justify-content: space-between;
  padding: 40rpx 40rpx;
}
.content .info .vip .vip-left {
  display: flex;
  justify-content: space-between;
  width: 200rpx;
}
.content .info .vip .vip-left p {
  line-height: 50rpx;
  color: #b79979;
  font-size: 28rpx;
  font-weight: 700;
}
.content .info .vip .vip-left image {
  width: 45rpx;
  height: 45rpx;
}
.content .info .vip .vip-right {
  font-size: 25rpx;
  line-height: 55rpx;
  color: #b79979;
}
</style>
