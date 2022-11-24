<template>
  <view class="content-con">
    <view class="content-head">
      <video class="myVideo" :src="vedio.url" enable-danmu danmu-btn controls autoplay=""></video>
      <view class="head-info">
        <p class="free">免费</p>
      </view>
      <P class="title">{{info.title}}</P>
      <view class="content-head-bot">
        <image src="../../static/hot-fill.png" mode=""></image>
        <p>热门榜·热门榜第七名</p>
      </view>
    </view>
    <view class="content-body">
      <uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="text" activeColor="#177fff">
        
      </uni-segmented-control>
      <view class="content">
          <view v-show="current === 0">
              <view class="uget">
                <p>你将获得</p>
                <view class="icon">
                  <image src="../../static/message(2).png" mode=""></image>
                  <P class="p">详询讲座</P>
                </view>
              </view>
              <view class="uget-info">
                <p>你将会了解如何预防高血压</p>
                <p>你将会了解如何使用测压仪器</P>
                <p>掌握如何急救</p>
              </view>
              <view class="about-instructor">
                <h3>讲师介绍</h3>
                <view class="doctor-card">
                 <view class="card-left">
                   <image src="../../static/10.jpg" mode=""></image>
                   <view class="doctor-info">
                     <p class="doctor-name">张明明</p>
                     <P class="doctor-funtion">神经内科-主治医师</P>
                   </view>
                 </view>
                 <view class="card-right">
                   <image src="../../static/arrow-right-bold.png"></image>
                 </view>
                </view>
              </view>
              <view class="lecture-details">
                <p class="lecture-details-title">讲座详情</p>
                <p class="lecture-details-text">
                  高血压（hypertension）是指以体循环动脉血压（收缩压和或舒张压）增高为主要特征（收缩压≥140毫米汞柱，舒张压≥90毫米汞柱），可伴有心、脑、肾等器官的功能或器质性损害的临床综合征。
                </p>
                <p class="priver">*讲座提供者：XXX平台</p>
              </view>
          </view>
          <view v-show="current === 1">
            <yscroll></yscroll>
          </view>
          <view v-show="current === 2">
              选项卡3的内容
          </view>
      </view>
    </view>
    <view class="content-footer">
      <view class="icon-item">
        <image src="../../static/shop.png" mode=""></image>
        <P class="icon-name">机构</P>
      </view>
      <view class="icon-item">
        <image src="../../static/star(1).png" mode=""></image>
        <P class="icon-name">收藏</P>
      </view>
      <view class="icon-item">
        <image src="../../static/message(2).png" mode=""></image>
        <P class="icon-name">咨询</P>
      </view>
      <view class="free-box">立即观看</view>
    </view>
  </view>
</template>

<script>
  import yscroll from '../../components/y-scroll/y-scroll.vue'
  export default {
    data() {
      return {
        items: ['介绍', '评价(61)','推荐'],
        current: 0,
        info:{},
        vedio:''
      }
    },
    onLoad(options) {
      const gid = options.gid
      
      this.getLectureDetails(gid)
    },
    methods: {
      onClickItem(e) {
        if (this.current != e.currentIndex) {
          this.current = e.currentIndex
        }
      },
      async getLectureDetails(gid){
        // const res = await this.request({
        //   url:':7001/medservice/lecture/findAll',
            
        //   data:{
        //     gid
        //   }
        // })
        const {data:res} = await this.request({
          url:`http://47.92.174.79:7001/medservice/lecture/${gid}`
        })
        console.log('----',gid);
        console.log('1111',res);
        this.info = res.lecture
        this.getVedio(res.lecture.sourceId)
      },
      async getVedio(sourceId){
        const res = await this.request({
          url:`http://47.92.174.79:7002//medvod/video/getVideoUrl/${sourceId}`
        })
        console.log(res);
        this.vedio = res.data
      }
    },
    components: {
      yscroll
    }
  }
</script>

<style scoped>
.content-con .content-head {
  border-radius: 20rpx;
  box-shadow:0 0 10rpx 5rpx rgba(0,0,0,0.1);
}
.content-con .content-head image {
  width: 100%;
  height: 400rpx;
}
.content-con .content-head .head-info {
  display: flex;
  padding: 40rpx 20rpx 20rpx 20rpx;
  justify-content: space-between;
}
.content-con .content-head .head-info .free {
  color: #f9284d;
  font-weight: 600;
}
.content-con .content-head .head-info .number {
  font-size: 26rpx;
  color: #999999;
}
.content-con .content-head .title {
  display: block;
  width: 670rpx;
  height: 80rpx;
  margin: 0 20rpx;
  overflow: hidden;
  border-bottom: 4rpx solid #f4f4f4;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.content-con .content-head-bot {
  display: flex;
  padding: 25rpx 20rpx 25rpx 20rpx;
}
.content-con .content-head-bot image {
  width: 50rpx;
  height: 50rpx;
}
.content-con .content-head-bot p {
  color: #a1a1a1;
  line-height: 50rpx;
  margin-left: 10rpx;
}
.content-con .content-body {
  margin-top: 40rpx;
  padding: 40rpx 20rpx 160rpx 20rpx;
  border-radius: 20rpx;
  box-shadow:0 0 10rpx 5rpx rgba(0,0,0,0.1);
}
.content .uget {
  display: flex;
  justify-content: space-between;
}
.content .uget .icon {
  display: flex;
  text-align: center;
  width: 160rpx;
  height: 40rpx;
  border-radius: 20rpx;
  background-color: #e6f1fe;
}
.content .uget .icon image {
  padding: 5rpx 10rpx;
  width: 30rpx;
  height: 30rpx;
}
.content-con .content .uget {
  margin-top: 40rpx;
  font-size: 32rpx;
}
.content-con .content .uget .icon .p {
  font-size: 24rpx;
  line-height: 38rpx;
}
.uget-info {
  margin-top: 20rpx;
}
.uget-info p {
  position: relative;
  font-size: 28rpx;
  padding-left: 50rpx;
}
.uget-info p::before {
  content: '';
  position: absolute;
  left: 15rpx;
  top: 16rpx;
  width: 6rpx;
  height: 6rpx;
  background-color: black;
}
.about-instructor {
  margin-top: 60rpx;
}
.about-instructor h3 {
  font-size: 32rpx;
}
.about-instructor .doctor-card {
  margin: 40rpx 0 60rpx 0;
  display: flex;
  justify-content: space-between;
  border-radius: 20rpx;
  width: 600rpx;
  height: 110rpx;
  background-color: #f6f7fb;
}
.about-instructor .doctor-card .card-left {
  margin-top: 20rpx;
  margin-left: 30rpx;
  display: flex;
}
.about-instructor .doctor-card .card-left .doctor-info {
  margin-left: 20rpx;
}
.about-instructor .doctor-card .card-left .doctor-funtion {
  font-size: 25rpx;
}
.about-instructor .doctor-card .card-left image {
  width: 90rpx;
  height: 90rpx;
  border-radius: 50%;
}
.about-instructor .doctor-card .card-right image {
  margin-top: 40rpx;
  padding-right: 20rpx;
  width: 40rpx;
  height: 40rpx;
}
.lecture-details .lecture-details-title {
  text-align: center;
  position: relative;
  font-size: 29rpx;
  margin-bottom: 30rpx;
}
.lecture-details .lecture-details-title::before {
  position: absolute;
  content: '';
  width: 280rpx;
  height: 4rpx;
  left: 0;
  top: 16rpx;
  background-color: #f3f3f3;
}
.lecture-details .lecture-details-title::after {
  position: absolute;
  content: '';
  width: 280rpx;
  height: 4rpx;
  right: 0;
  top: 16rpx;
  background-color: #f3f3f3;
}
.lecture-details .lecture-details-text {
  font-size: 26rpx;
}
.lecture-details .priver {
  font-size: 26rpx;
  margin-top: 10rpx;
  margin-bottom: 20rpx;
}
.content-footer {
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  justify-content: space-around;
  width: 100%;
  height: 100rpx;
  background-color: #FFFFFF;
  box-shadow:0 0 10rpx 5rpx rgba(0,0,0,0.1);
}
.content-footer .icon-item {
  margin-top: 10rpx;
  display: flex;
  flex-direction: column;
}
.content-footer .icon-item image {
  width: 40rpx;
  height: 40rpx;
}
.content-footer .icon-item .icon-name {
  font-size: 22rpx;
}
.content-footer .free-box {
  width: 300rpx;
  margin-top: 10rpx;
  text-align: center;
  line-height: 80rpx;
  color: #FFFFFF;
  border-radius: 40rpx;
  height: 80rpx;
  background-color: #2180f8;
}
.myVideo{
  width: 100%;
}
</style>
