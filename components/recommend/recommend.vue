<template>
  <view class="content-con">
    <view class="content-head">
      <h3>推荐讲座</h3>
      <a class="more">更多 ></a>
    </view>
            <view class="content">
                    <view class="items">
                      <navigator :url="'/pages/lectureDetails/lectureDetails?gid=' + item.id" class="item" v-for="(item,index) in VideoList" :key="index" v-if="index < 3">
                      <!-- <view class="item" @click="toLectureDetails"  v-for="(item,index) in VideoList" :key="index"> -->
                        
                      
                        <!-- <image :src="item." mode=""></image> -->
                       <image :src="item.avatar"></image>
                        <p class="title">{{item.title}}</p>
                        <p class="number">3000人看过</p>
                      </navigator>
                     <!-- </view> -->
                    </view>
                
            </view>

  </view>
</template>

<script>
  import uSegmentedControl from '../../uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.vue'
  export default {
    name:"recommend",
    props:['VideoList'],
    data() {
      return {
        items: ['综合', '好评', '人气','价格','筛选'],
        current: 0
      };
    },
    components: {
      uSegmentedControl
    },
    methods: {
      onClickItem(e) {
        if (this.current != e.currentIndex) {
          this.current = e.currentIndex
        }
      },
      // toLectureDetails() {
      //   uni.navigateTo({
      //     url:'../../pages/lectureDetails/lectureDetails'
      //   })
      // }
    }
  }
</script>

<style scoped>
.content-con {
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
uni-segmented-control {
  position: relative;
}
uni-segmented-control::before {
  content: '';
  position: absolute;
  top: 25rpx;
  left: 530rpx;
  width: 4rpx;
  height: 25rpx;
  background-color: #a3a3a3;
}
uni-segmented-control::after {
  content: '';
  display: inline-block;
  width: 35rpx;
  height: 35rpx;
  background: url(../../static/screen.png);
  background-size: cover;
  position: absolute;
  top: 20rpx;
  left: 640rpx;
}
.items {
  margin-top: 40rpx;
  display: flex;
  justify-content: space-between;
}
.item {
  width: 210rpx;
  height: 360rpx;
  background-color: #FFFFFF;
  border-radius: 15rpx;
  box-shadow:0 0 10rpx 5rpx rgba(0,0,0,0.1);
}
.item image {
  width: 100%;
  border-radius: 15rpx 15rpx 0 0 ;
  height: 210rpx;
}
.item .title {
  font-size: 26rpx;
  padding: 10rpx;
  height: 60rpx;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.item .number {
  font-size: 26rpx;
  color: #177FFF;
  padding: 5rpx 10rpx 10rpx 10rpx;
}
</style>
