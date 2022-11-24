<template>
  <view class="content-con">
    <uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="text" activeColor="#177fff">
      
    </uni-segmented-control>
           <view class="content">
               <view v-show="current === 0">
                <offList></offList>
               </view>
               <view v-show="current === 1">
                   选项卡2的内容
               </view>
               <view v-show="current === 2">
                   选项卡3的内容
               </view>
               <view v-show="current === 3">
                   选项卡4的内容
               </view>
               <view v-show="current === 4">
                   选项卡5的内容
               </view>
           </view>
  </view>
</template>

<script>
  import uSegmentedControl from '../../uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.vue'
  import offList from '../../components/offList/offList.vue'
  export default {
    data() {
      return {
        items: ['全部', '待核销', '已完成'],
        current: 0
      }
    },
    methods: {
      onClickItem(e) {
        if (this.current != e.currentIndex) {
          this.current = e.currentIndex
        }
      },
    },
    components: {
      uSegmentedControl,offList 
    }
  }
</script>

<style scoped>

</style>

