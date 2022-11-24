<template>
  <view>
    <view class="content">
      <view class="content-item">
        <view class="item-left">
          <image src="../../static/home-active.png" mode=""></image>
        </view>
        <view class="item-right">
          <view class="name">
            阿咩_
          </view>
          <view class="phone">
            12345678912
          </view>
          <view class="address">
            广东省 韶关市 浈江区 新韶镇 韶关学院
          </view>
        </view>
        <view class="update">
          <image src="../../static/line_ order-editor.png" mode=""></image>
        </view>
      </view>
    </view>
    <view class="conntion">
          <view class="btn-settle" @click="settlement">+ 添加收货地址</view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      
    }
  }
</script>

<style lang="less">
  .content{
    background-color: #f6f6f6;
    border-radius: 30px;
    margin: 0 10rpx;
    //width: 100%;
    box-sizing: border-box;
  }
  .content-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 120rpx;
    margin-bottom: 30rpx;
  }
  .item-left{
    width: 60rpx;
    height: 60rpx;
  }
  .item-left image{
    width: 100%;
    height: 100%;
  }
  .update{
     width: 60rpx;
     height: 60rpx;
  }
  .update image{
    width: 100%;
     height: 100%;
  }
  .item-right{
    text-align: left;
  }
  .name{
    float: left;
    font-weight: 700;
    margin-right: 20px;
  }
  .phone{
    float: left;
  }
  .address{
    clear: left;
  }
.conntion{
  width: 90%;
    height: 100rpx;
    position: fixed;
    bottom: 30rpx;
    left: 34rpx;
  }
      .btn-settle {
        background-color: #177fff;
        height: 50px;
        color: white;
        line-height: 50px;
        
        border-radius: 50px;
        width: 100%;
        text-align: center;
        box-sizing: border-box;
      }

</style>
