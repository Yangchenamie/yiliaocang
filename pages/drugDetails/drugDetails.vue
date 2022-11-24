<template>
  <view class="content">
    <view class="bg"></view>
    <view class="content-con">
      <view class="doctor-card">
        <image src="../../static/doctor-people.png" mode=""></image>
        <view class="detail">
          <p class="title">
            张明明
          </p>
          <p class="professional">内科 主治医师</p>
          <p class="people">深圳市北京大学附属医院</p>
          <p class="epithet">名师</p>
          <p class="epithet">名师</p>
        </view>
      </view>
      <drugInformation :listAll="listAll"></drugInformation>
      <drugWays></drugWays>
    </view>
  </view>
</template>

<script>
  import drugInformation from '../../components/drugInformation/drugInformation.vue'
  import drugWays from '../../components/drugWays/drugWays.vue'
  export default {
    data() {
      return {
        listAll:{}
      }
    },
    onLoad(options) {
      const gid = options.gid;
      //cvconsole.log(gid);
      this.todrugDetails(gid);
    },
    methods: {
      async todrugDetails(gid) {
        const res = await this.request({
          url:`http://47.92.174.79:7001/medservice/medrecipe/findByRecipeId/${gid}`
        })
        this.listAll = res.data.list
        console.log(res);
      },
    },
    components:{
      drugInformation,drugWays
    }
  }
</script>

<style>
  body{
    background-color: #fcfcfc;
  }
  .content{
    position: relative;
  }
  .content .bg{
  width: 100%;
  background-color: #177fff;
  height: 350rpx;
  }
      
    .content .content-con{
      position: absolute;
      background-color: #fff;
      /* height: 500rpx; */
      width: 90%;
      margin: 0 40rpx;
      left: 0rpx;
      top: 50rpx;
      border-radius: 20rpx;
    }
    .doctor-card {
      margin-top: 20rpx;
      display: flex;
      padding: 20rpx;
    }
    .doctor-card image {
      width: 150rpx;
      height: 150rpx;
      border-radius: 20rpx;
    }
    .doctor-card .detail .title {
      font-size: 44rpx;
      font-weight: 700;
    }
    .doctor-card .detail  .professional{
      position: absolute;
      left: 180rpx;
      top: 10rpx;
      font-size: 36rpx;
      width: 100%;
    }
    .doctor-card .detail {
      position: relative;
      padding-left: 20rpx;
    }
    .doctor-card .detail .people {
      position: relative;
      font-size: 30rpx;
      padding-top: 10rpx;
      padding-bottom: 20rpx;
      color: #177fff;
    }
    .doctor-card .detail .epithet{
      display: inline-block;
      padding: 7rpx 24rpx;
      background-color: #333;
      color: #fff;
      font-size: 22rpx;
      border-radius: 10rpx;
      margin-right: 20rpx;
    }
</style>
