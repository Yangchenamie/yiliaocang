<template>
  <view>
    <live></live>
    <register></register>
    <recommend :VideoList="VideoList"></recommend>
    <consultingTopics :ListAll="ListAll"></consultingTopics>
  </view>
</template>

<script>
  import live from '../../components/live/live.vue'
  import register from '../../components/register/register.vue'
  import recommend from '../../components/recommend/recommend.vue'
  import consultingTopics from '../../components/consultingTopics/consultingTopics.vue'
  export default {
    data() {
      return {
       ListAll:[],
       VideoList:[]
      }
    },
    onLoad() {
      this.getListAll()
      this.getVideoList()
    },
    components: {
      live,register,recommend,consultingTopics
    },
    methods: {
      async getListAll(){
        const res = await this.request({
            url:'http://47.92.174.79:7001/medservice/infor/fimdAll',
          })
          console.log(res);
          this.ListAll = res.data.list
          console.log('2222',res);
        },
        async getVideoList(){
          const res = await this.request({
            url:'http://47.92.174.79:7001/medservice/lecture/findAll',
          })
          console.log('33',res);
          this.VideoList = res.data.list
        }
      }
  }
</script>

<style>

</style>
