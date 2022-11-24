<template>
  <view>
    <view class="conTabar">
      <uSegmentedControl :current="current" :values="items" @clickItem="onClickItem" styleType="text"
        activeColor="#177fff"></uSegmentedControl>
    </view>
    <!-- {{commodityCollection[0].commodityTitle}} -->
    <view class="content">
      <view class="" v-show="current===0">
        <collectionList :collectionList="collectionList"></collectionList>
      </view>
      <view class="" v-show="current===1">
        2的页面
      </view>
    </view>
  </view>
</template>

<script>
  import uSegmentedControl from '../../uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.vue'
  import collectionList from '../../components/collectionList/collectionList.vue'
  import {mapState,mapMutations} from 'vuex'
  
  export default {
    data() {
      return {
        items: ['药品', '体检'],
        collectionList:[],
        current:0
      }
    },
    onLoad() {
      const uId = uni.getStorageSync('uId')
      this.getCollectionList(uId)
      
    },
    computed:{
      ...mapState('m_user',['uId']),
      ...mapState('collection',['commodityCollection'])
    },
    methods: {
      onClickItem(e) {
        if (this.current != e.currentIndex) {
          this.current = e.currentIndex
        }
      },
      async getCollectionList(uId) {
        const res = await this.request({
          url: `http://1.12.244.193:8020/shop/collection/select/${uId}`
        })
        this.collectionList = res.data.collect
        console.log(res);
      },
      //请求添加该产品到收藏列表里
      // async getCollectionList(){
      //    await this.request({url:`http://1.12.244.193:8020/shop/collection/${uId}/${gid}`,method:'POST'}).then(res=>{
      //       if(res.code === '200') {
      //           this.collectionList = res.collections
      //       }
      //   }).catch(err=> {
      //     console.log("error")
      //     console.log('表单错误信息：',err)
      //   })
      // },
    },
    
    components: {
      collectionList,uSegmentedControl
    }
  }
</script>

<style>

</style>
