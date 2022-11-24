<template>
  <view class="content">
    <uCalendar class="uni-calendar--hook" :selected="info.selected" :showMonth="false" @change="change" @monthSwitch="monthSwitch" />
    <view class="time-slot">
      <view class="time-title">请选择预约时间段</view>
      <view class="times">
        <p v-for="(item,index) in times" :key="item.id" :class="move===index?'move':''" @click="changeMove(index,item.time)">{{item.time}}</p>    
      </view>
    </view>
    <view class="tip">
      <p class="tip-title">预约须知</p>
      <p>1.规定的时间内使用服务。</p>
      <p>2.如若超过时间，请及时修改时间。</p>
    </view>
    <view class="choose">
      <p>已选择
        <span>{{choosetime}}</span>
      </p>
      <uni-datetime-picker type="date" :clear-icon="false" v-model="single"/>
    </view>
  </view>
</template>

<script>
  import uDatetimePicker from '../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.vue'
  import uCalendar from '../../uni_modules/uni-calendar/components/uni-calendar/uni-calendar.vue'
  export default {
    data() {
      return {
        move:0,
        single: "2022-10-08",
        itemTime:'9:00-10:00',
        times:[
          {
            id:1,
            time:'9:00-10:00'
          },
          {
            id:2,
            time:'10:00-11:00'
          },
          {
            id:3,
            time:'11:00-12:00'
          },
          {
            id:4,
            time:'14:00-15:00'
          },
          {
            id:5,
            time:'15:00-16:00'
          },
          {
            id:6,
            time:'16:00-17:00'
          },
          {
            id:7,
            time:'17:00-18:00'
          }
        ]
      }
    },
    methods: {
      changeMove(index,time) {
        this.move = index
        this.itemTime = time
      },
      toPhysicalInfo(choosetime) {
        uni.navigateTo({
          url:'../physicalInfo/physicalInfo?choosetime={choosetime}'
        })
      }
    },
    components: {
      uCalendar,uDatetimePicker
    },
    computed: {
      choosetime() {
        var mooth = this.single.slice(5,7)
        var date = this.single.slice(8,10)
        return mooth+"-"+date+" "+this.itemTime
      }
    }
  }
</script>

<style scoped>
.time-slot {
  padding: 40rpx;
  margin-top: 40rpx;
  background-color: #FFFFFF;
  box-shadow:0 0 10rpx 5rpx rgba(0,0,0,0.1);
}
.time-slot .time-title {
  font-weight: 600;
  margin-bottom: 20rpx;
}
.time-slot .times {
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
}
.time-slot .times p {
  padding: 10rpx;
  width: 180rpx;
  text-align: center;
  margin-top: 20rpx;
  border-radius: 20rpx;
  background-color: #f6f6f6;
  margin-right: 20rpx;
}
.tip {
  padding: 40rpx;
  padding-bottom: 150rpx;
}
.tip .tip-title {
  font-weight: 600;
}
.tip p {
  font-size: 28rpx;
  margin: 10rpx 0;
}
.move {
  background-color: #177FFF !important;
  color: #FFFFFF;
}
.choose {
  width: 690rpx;
  padding: 40rpx;
  display: flex;
  justify-content: space-between;
}
.choose p {
  font-size: 28rpx;
  margin-right: 30rpx;
  line-height: 70rpx;
}
.choose p span {
  color: #177FFF;
  font-weight: 600;
}
</style>
