<template>
  <view>
    <!-- 体检列表 -->
      <view class="items">
        <view class="con-body">
            <ul class="items">
              <li class="item" v-for="(item,index) in textList" :key="index" @click="todrugDetails(item.id)">
                <navigator :url="'/pages/drugDetails/drugDetails?gid='+item.id">
                  <view class="item-head">
                    <view class="item-head-left">
                      <image src="../../static/order.png" mode=""></image>
                      <p>订单编号:{{item.id}}</p>
                    </view>
                    <view class="item-head-right">
                      <p>2022.02.22</p>
                    </view>
                  </view>
                  <view class="item-body">
                    <image src="../../static/doctor-people.png" mode=""></image>
                    <view class="detail">
                      <p class="title">
                        张明明
                      </p>
                      <p class="professional">内科 主治医师</p>
                      <p class="people">深圳市北京大学附属医院</p>
                    </view>
                  </view>
                  <view class="item-bootom">
                    <p class="time">开药时间:{{item.gmtCreate}}</p>
                    <p class="time">药单费用：{{item.price}}元</p>
                    <p class="time">就诊人：陈小春</p>
                    <view class="btn">
                      <a class="hexiao" :url="'/pages/drugDetails/drugDetails?gid='+item.id">处方详情</a>
                    </view>
                  </view>
                </navigator>
              </li>
            <!--  <li class="item">
                <view class="item-head">
                  <view class="item-head-left">
                    <image src="../../static/order.png" mode=""></image>
                    <p>订单编号:123484411284</p>
                  </view>
                  <view class="item-head-right">
                    <p>2022.02.22</p>
                  </view>
                </view>
                <view class="item-body">
                  <image src="../../static/doctor-people.png" mode=""></image>
                  <view class="detail">
                    <p class="title">
                      张明明
                    </p>
                    <p class="professional">内科 主治医师</p>
                    <p class="people">深圳市北京大学附属医院</p>
                  </view>
                </view>
                <view class="item-bootom">
                  <p class="time">开药时间:2022年7月22日09:00</p>
                  <p class="time">药单费用：100元</p>
                  <p class="time">就诊人：陈小春</p>
                  <view class="btn">
                    <a class="hexiao">处方详情</a>
                  </view>
                </view>
              </li>
              <li class="item">
                <view class="item-head">
                  <view class="item-head-left">
                    <image src="../../static/order.png" mode=""></image>
                    <p>订单编号:{{}}</p>
                  </view>
                  <view class="item-head-right">
                    <p>2022.02.22</p>
                  </view>
                </view>
                <view class="item-body">
                  <image src="../../static/doctor-people.png" mode=""></image>
                  <view class="detail">
                    <p class="title">
                      张明明
                    </p>
                    <p class="professional">内科 主治医师</p>
                    <p class="people">深圳市北京大学附属医院</p>
                  </view>
                </view>
                <view class="item-bootom">
                  <p class="time">开药时间:2022年7月22日09:00</p>
                  <p class="time">药单费用：100元</p>
                  <p class="time">就诊人：陈小春</p>
                  <view class="btn">
                    <a class="hexiao">处方详情</a>
                  </view>
                </view>
              </li> -->
            </ul>
          </view>
        </view>
  </view>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    props:['textList'],
    name:"prescriptions",
    data() {
      return {
        
      };
    },
    computed:{
      //...mapState('m_user',['uId']),
    },
    onLoad() {
      
    },
    methods: {
      
        
      
    }
  }
</script>

<style scoped>
@import url("../../util/css/common.css");
.con-body {
  padding: 20rpx;
}
.items .item {
  margin: 40rpx 0;
  padding: 40rpx;
  width: 630rpx;
  border-radius: 20rpx;
  box-shadow:0 0 10rpx 5rpx rgba(0,0,0,0.1);
}
.items .item .item-head {
  display: flex;
  justify-content: space-between;
}
.items .item .item-head .item-head-left {
  display: flex;
}
.items .item .item-head .item-head-left p {
  font-size: 28rpx;
  line-height: 38rpx;
}
.items .item .item-head .item-head-left image {
  width: 40rpx;
  height: 40rpx;
  margin-right: 6rpx;
}
.items .item .item-head .item-head-right p {
  font-size: 30rpx;
  position: relative;
}

.item-body {
  margin-top: 20rpx;
  display: flex;
}
.item-body image {
  width: 150rpx;
  height: 150rpx;
  border-radius: 20rpx;
}
.item-body .detail .title {
  font-size: 44rpx;
  font-weight: 700;
}
.item-body .detail  .professional{
  position: absolute;
  left: 180rpx;
  top: 20rpx;
  font-size: 36rpx;
  width: 100%;
}
.item-body .detail {
  position: relative;
  padding-left: 20rpx;
  padding-top: 10rpx;
}
.item-body .detail .people {
  position: relative;
  font-size: 30rpx;
  padding-top: 20rpx;
  padding-bottom: 20rpx;
  color: #177fff;
}
.item-body .detail .price {
  color: #f9284d;
  font-size: 36rpx;
  font-weight: 600;
}
.item-bootom {
  position: relative;
  padding-top: 20rpx;
  
}
.item-bootom .time {
  font-size: 28rpx;
  color: #666666;
  line-height: 60rpx;
  font-weight: 600;
}
.item-bootom .btn .hexiao {
  position: absolute;
  display: block;
  text-align: center;
  border: 2rpx solid #177FFF;
  border-radius: 20rpx;
  color: #177ffe;
  background-color: #f1f7ff;
  padding: 12rpx 30rpx;
  font-weight: 400;
  right: 0rpx;
  bottom: 0rpx;
}
</style>