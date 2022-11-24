<template>
  <view>
      <uSegmentedControl :current="current" :values="items" @clickItem="onClickItem" styleType="text"
        activeColor="#177fff"></uSegmentedControl>
      <view class="content">
        <view v-show="current === 0">
          <physical :TestAll="TestAll"></physical>
        </view>
        <view v-show="current === 1">
          <pendingMedical :daitijian="daitijian"></pendingMedical>
        </view>
        <view v-show="current === 2">
          <testDone :testDone="testDone"></testDone>
        </view>
      </view>
  </view>
</template>

<script>
  import uSegmentedControl from '../../uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.vue'
  import physical from '../../components/physical/physical.vue'
  import pendingMedical from '../../components/pendingMedical/pendingMedical.vue'
  import testDone from '../../components/testDone/testDone.vue'
  export default {
    data() {
        return {
            items: ['全部', '待体检', '已完成'],
            current: 0,
            TestAll:[]
        };
    },
    onLoad(options) {
      
      console.log(options);
       const userId = options.userId
       this.getTestAll(userId)
    },
    onReady() {
      // this.daitijian()
    },
    methods: {
      onClickItem(e) {
        if (this.current != e.currentIndex) {
          this.current = e.currentIndex
        }
      },
      async getTestAll(userId) {
        const res = await this.request({
          url: 'http://1.12.244.193:8020/shop/product/pageProduct/1/6/1',
          
        })
        console.log(this);
        // const {data:res}=await uni.$http.get('/testorderservice/testorder/findAll/123',{userId})
        this.TestAll = res.data.rows
        //console.log('1111',this.TestAll)
        console.log('2222',res);
      },
    },
    computed: {
      daitijian() {
        var List = this.TestAll
        // console.log("list",List)
        var daitijianList = List.filter(item => item.stat == "待体检")
        // console.log("待体检", daitijianList )
        return daitijianList
      },
      testDone() {
        var List = this.TestAll
        var yiwancheng = List.filter(item => item.stat == "已体检")
        return yiwancheng
      }
    },
    components: {
      uSegmentedControl,physical,pendingMedical,testDone
    }
  }
</script>

<style scoped>

</style>
