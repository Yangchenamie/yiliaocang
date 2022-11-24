<template>
  <view>
      <view class="content">
          <prescriptions :textList="textList"></prescriptions>
      </view>
  </view>
</template>

<script>
  import prescriptions from '../../components/prescriptions/prescriptions.vue'
  export default {
    data() {
        return {
            textList:{}
        };
      },
      onLoad() {
        const uId = uni.getStorageSync('uId')
        this.getDeatils(uId)
      },
    methods: {
      async getDeatils(uId){
        const res = await this.request({
          url:`http://47.92.174.79:7001/medservice/medrecipe/findByUserId/${uId}`
        })
        this.textList = res.data.list
        console.log('46457u76u6',this.textList);
      }
    },
    components: {
      prescriptions
    }
  }
</script>

<style scoped>

</style>
