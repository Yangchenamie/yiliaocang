<template>
  <view>
    <uSearchBar radius="50" placeholder="搜索关键字" bgColor="#f2f3f7" @confirm="search" />
    <view>
      <uSegmentedControl :current="current" :values="items" @clickItem="onClickItem" styleType="text"
        activeColor="#177fff"></uSegmentedControl>
      <view class="content">
        <view v-show="current === 0">
          <manageAll></manageAll>
          <!-- 判断是否是数据，如果没有数据再显示下面的组件 -->
          <noCart></noCart>
        </view>
        <view v-show="current === 1">
          <offList></offList>
          <!-- 判断是否是数据，如果没有数据再显示下面的组件 -->
          <noCart></noCart>
        </view>
        <view v-show="current === 2">
          <deliver></deliver>
          <!-- 判断是否是数据，如果没有数据再显示下面的组件 -->
          <noCart></noCart>
        </view>
        <view v-show="current === 3">
          <evaluated></evaluated>
          <!-- 判断是否是数据，如果没有数据再显示下面的组件 -->
          <noCart></noCart>
        </view>
        <view v-show="current === 4">
          <done></done>
          <!-- 判断是否是数据，如果没有数据再显示下面的组件 -->
          <noCart></noCart>
        </view>
      </view>
    </view>
    
  </view>
</template>

<script>
  import noCart from '../../components/noCart/noCart.vue'
  import deliver from '../../components/deliver/deliver.vue'
  import evaluated from '../../components/evaluated/evaluated.vue'
  import done from '../../components/done/done.vue'
  import uSearchBar from '../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.vue'
  import uSegmentedControl from '../../uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.vue'
  import offList from '../../components/offList/offList.vue'
  import manageAll from '../../components/manageAll/manageAll.vue'
  export default {
    data() {
        return {
            items: ['全部', '待核销', '待收货','待评价','已完成'],
            current: 0
        };
      },
    methods: {
      onClickItem(e) {
        if (this.current != e.currentIndex) {
          this.current = e.currentIndex
        }
      },
    },
    components: {
      uSearchBar,uSegmentedControl,offList,manageAll,noCart,deliver,evaluated,done
    }
  }
</script>

<style scoped>

</style>
