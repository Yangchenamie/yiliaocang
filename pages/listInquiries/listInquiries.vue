<template>
  <view>
    <uSearchBar radius="50" placeholder="高血压防范" bgColor="#f2f3f7" @confirm="search" />
    <view class="bg"></view>
      <view class="content">
        <uSegmentedControl :current="current" :values="items" @clickItem="onClickItem" styleType="text"
          activeColor="#177fff"></uSegmentedControl> </uSegmentedControl>
        <view v-show="current === 0">
          <synthesis :ListAll="ListAll"></synthesis>
        </view>
        <view v-show="current === 1">
          好评
        </view>
        <view v-show="current === 2">
          热门
        </view>
        <view v-show="current === 3">
          价格
        </view>
        <view v-show="current === 4">
          筛选
        </view>
      </view>
    </view>
        
    
  </view>
</template>

<script>
  import uSearchBar from '../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.vue'
  import uSegmentedControl from '../../uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.vue'
  import synthesis from '../../components/synthesis/synthesis.vue'
  export default {
    data() {
      return {
            items: ['综合', '好评', '热门','价格','筛选'],
            current: 0,
            ListAll:[]
        }
    },
    onLoad() {
      this.getListAll()
    },
    methods: {
        onClickItem(e) {
          if (this.current != e.currentIndex) {
            this.current = e.currentIndex
          }
      },
      async getListAll(){
        const res = await this.request({
          url:'http://47.92.174.79:7001/medservice/infor/fimdAll',
        })
        console.log(res);
        this.ListAll = res.data.list
        console.log('2222',res);
      }
    },
    computed:{
      
    },
    components: {
      uSearchBar,uSegmentedControl,synthesis
    }
  }
</script>

<style scoped>
.container {
  display: flex;
}
.content .scroll-y {
  width: 200rpx;
  height: 100%;
  background-color: #f3f9ff;
}
.content .scroll-y .items {
  width: 200rpx;
  text-align: center;
  line-height: 120rpx;
  height: 120rpx;
}
.active {
  border-left: 4rpx solid #177FFF;
  background-color: #FFFFFF;
  font-weight: 600;
}
.content .bread .bread-item {
  padding: 10rpx 20rpx;
  border-radius: 30rpx;
  text-align: center;
  font-size: 28rpx;
  line-height: 20rpx;
  height: 20rpx;
  border: 4rpx solid #999999;
}
.content .bread {
  display: flex;
  flex-flow: wrap;
  margin-bottom: 20rpx;
  padding: 20rpx;
}
.content .bread .bread-item {
  margin-right: 20rpx;
  font-size: 26rpx;
  color: #999999;
}
.move {
  background-color: #f3f9ff;
  color: #177FFF;
  border: 4rpx solid #177FFF !important;
}
.con-right {
  width: 540rpx;
  margin-left: 20rpx;
}
.commodity {
  display: flex;
  margin-bottom: 40rpx;
  border-bottom: 2rpx solid #333333;
  height: 230rpx;
}
.commodity image {
  width: 200rpx;
  height: 200rpx;
}
.commodity .commodity-info {
  padding-left: 20rpx;
  padding-right: 20rpx;
  font-size: 28rpx;
  width: 290rpx;
  height: 200rpx;
}
.commodity .commodity-info .price {
  color: #f9284d;
  margin-top: 80rpx;
  font-weight: 600;
}
.bg{
  height: 20rpx;
  background-color: #f2f2f2;
}
</style>
      