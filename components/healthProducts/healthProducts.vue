<template>
  <view class="content">
    <view class="content-head">
      <h3>大健康产品</h3>
      <view class="more" @click="toclassification">更多 ></view>
    </view>
    <view class="content-body">
      <ul>
        <li v-for="(item,index) in product" :key="index">
          <navigator :url="'/pages/commodityInfo/commodityInfo?gid='+item.id">
            <image :src="item.productPicture" mode=""></image>
            <p class="title">{{item.productName}}</p>
            <span>{{item.productDescription}}</span>
            <view class="price-box">
              <p class="price">￥{{item.productPrice}}</p>
              <a class="buy">购买</a>
            </view>
          </navigator>
        </li>
        
      </ul>
    </view>
  </view>
</template>

<script>
  export default {
    props:['product'],
    name:"healthProducts",
    data() {
      return {
        
      };
    },
    
    
    methods: {
      toclassification() {
        uni.navigateTo({
          url:'../../pages/classification/classification'
        })
      },
        
      // async getProduct(){
          
      //   const res = await this.request({
      //     url:'http://1.12.244.193:8020/shop/product/pageProduct/1/2'
      //   })
      //   this.product = res.data.row;
      //   console.log(this.product);
        
      // }
    }
  }
</script>

<style scoped>
@import url("../../util/css/common.css");
.content {
  padding: 40rpx;
}
.content-head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50rpx;
}
.content-head h3 {
  font-size: 40rpx;
  font-weight: 600;
}
.content-head .more {
  font-size: 30rpx;
  color: #979797;
  line-height: 50rpx;
}
.content-body ul {
  display: flex;
  justify-content: space-between;
}
.content-body ul li navigator {
  width: 315rpx;
  height: 315rpx;
  border-radius: 20rpx;
  background-color: #FFFFFF;
  box-shadow:0 0 10rpx 5rpx rgba(0,0,0,0.1);
}
.content-body ul li span{
  display: block;
  padding: 5rpx 10rpx;
      width: 300rpx;
   overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap
}
.content-body ul li  image {
  width: 100%;
  height: 50%;
  border-radius: 20rpx 20rpx 0 0;
}
.content-body ul li .title { 
  padding: 5rpx 10rpx;
  width: 300rpx;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.content-body ul li span {
  padding: 5rpx 10rpx;
  font-size: 26rpx;
  color: #777777;
}
.content-body ul li .price-box {
  padding: 10rpx;
  display: flex;
  font-size: 28rpx;
  justify-content: space-between;
}
.content-body ul li .price {
  color: #f9284d;
}
.content-body ul li .buy {
  display: block;
  width: 90rpx;
  border-radius: 10rpx;
  text-align: center;
  color: #FFFFFF;
  font-size: 25rpx;
  background-color: #0057c8;
  height: 40rpx;
  line-height: 40rpx;
}
</style>
