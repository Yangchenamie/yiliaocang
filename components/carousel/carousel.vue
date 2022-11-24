<template>
  <view class="content">
    <swiper indicator-dots circular autoplay>
      <swiper-item>
        <image src="../../static/2.jpg"></image>
      </swiper-item>
      <swiper-item>
        <image src="../../static/3.jpg"></image>
      </swiper-item>
      <swiper-item>
        <image src="../../static/4.jpg"></image>
      </swiper-item>
    </swiper>
    
  </view>
</template>

<script>
  export default {
    name:"carousel",
    props:["swipers"],
    data() {
      return {
        
      };
    },
    onLoad() {

    },
    methods: {
      
    }
  }
</script>

<style scoped>
.content swiper {
  border-radius: 20rpx;
  padding: 40rpx;
  width: 670rpx;
  height: 300rpx;
}
.content swiper image {
  border-radius: 20rpx;
  width: 100%;
  height: 100%;
}
</style>
