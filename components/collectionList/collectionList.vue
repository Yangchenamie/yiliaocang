<template>
  <view class="bg-box">
    <view class="conTabar">
      <view class="conTabarLeft">
        <view class="">
          收藏时间<uni-icons type="bottom" size="16"></uni-icons>
          
        </view>
        <view class="conTabarRight">
          全部分类<uni-icons type="bottom" size="16"></uni-icons>
          
        </view>
      </view>
      <view class="" @click="showText">{{textChange}} </view>
    </view>
      <view class="goods-list">
        <block v-for="(item,index) in collectionList" :key="index">
          <view class="goods-item">
            <!-- 商品左侧图片区域 -->
            <view class="goods-item-left">
              <!-- <radio :checked="radioFlag" color="#177fff" v-show="radioFlag" ref="radioRef" @click="isCheck"></radio> -->
              <label>
                <checkbox color="#177fff" style="transform:scale(0.8)" v-show="radioFlag"/><text></text>
              </label>
              <image :src="item.productPicture || defaultPic" class="goods-pic"></image>
            </view>
            <!-- 商品右侧信息区域 -->
            <view class="goods-item-right">
              <!-- 商品标题 -->
              <view class="con">
                <view class="goods-name">{{item.productName}}</view>
              </view>
              <view class="goods-info-box">
                <!-- 商品价格 -->
                <view class="goods_people">共有1000+人收藏</view>
                <view class="goods-price">￥{{item.productPrice}}</view>
              </view>
            </view>
          </view>
        </block>
        
      </view>
    <view class="footTabar"  v-show="radioFlag">
      <view class="my-settle-container">
          <!-- 全选 -->
          <!-- <label class="radio" @click="changeAllState">
            <radio color="#177fff" :checked="changeAll" /><text>全选</text>
          </label> -->
          <checkbox color="#177fff" style="transform:scale(0.8)"/><text>全选</text>
          <!-- 合计 -->
          <!-- <view class="amount-box">
            合计:<text class="amount">分享</text>
          </view> -->
          <view class="btnAll">
            <view class="btn-settle">加入购物车</view>
            <!-- 结算按钮 -->
            <view class="btn-settle" @click="settlement">分享</view>
            <view class="btn-settle" @click="deleteGoods">删除</view>
          </view>
        </view>
        
    </view>
    </view>
</template>

<script>
  export default {
    name:"collectionList",
    props:['collectionList'],
    data() {
      return {
         defaultPic: 'https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png',
         textChange:'管理',
         radioFlag:false,
         num:0,
         changeAll:false
      }
    },
    computed:{ 
     
      // isFullCheck(){
      //   this.num = 
      //   const total = this.collectionList.length
      //   console.log(this.checkedCount);
      //   return this.total === this.checkedCount
      // },
    },
    methods: {
      isCheck(){
        this.radioFlag = true
        console.log("123456",this.$refs.checked);
      },
      // changeAllState() {
      //   if(this.changeAll) {
      //     this.changeAll = true
      //   }else {
      //     this.changeAll = false
      //   }
      //   this.changeAll = !this.changeAll
      // },
    //   async del (item,index) {
    //    const coll = {commodityId:item.commodityId,id:uni.getStorageSync('user').id}
    //    console.log(coll)
    //    this.collectionList.splice(index,1)
    //     await this.request({url:'/delCollection',method:'POST',data:coll}).then(res=>{
    //                 if(res.code === '200') {
    //                   this.reload()
    //                 }
    //             }).catch(err=> {
    //               console.log("error")
    //               console.log('表单错误信息：',err)
    //             })
    //   },
    //   reload() {
    //           // 页面重载
    //           const pages = getCurrentPages()
    //           // 声明一个pages使用getCurrentPages方法
    //           const curPage = pages[pages.length - 1]
    //           // 声明一个当前页面
    //           curPage.onLoad(curPage.options) // 传入参数
    //           curPage.onShow()
    //           curPage.onReady()
    //           // 执行刷新
    //       },
    // }
    showText(){
        if(this.textChange == '管理') {
            this.textChange='完成' 
            this.radioFlag = true
        }else if(this.textChange == '完成'){
          this.textChange='管理' 
          this.radioFlag = false
        }
        console.log(this.collectionList);
    },
    // changeAllState(){
    //   // console.log('123456789',this.collectionList);
    //   // // this.updateAllGoodsState(!this.isFullCheck);
    //   this.collectionList.forEach(x => x.status = !this.isFullCheck)
      
    // },
    // addtoCart(){
      
    //   const goods = {
    //    =
    //   }
    //   this.addToCart(goods)
    // }
  }
  }
</script>

<style scoped lang="less">

.bg-box{
  margin-top: 10rpx;
  width: 100%;
  height: 100%;
  border-top-left-radius: 80rpx;
  border-top-right-radius: 80rpx;
  background-color: #f6f6f6;
}
.goods-item {
  display: flex;
  padding: 10px 5px;
  /* border-bottom: 1px solid #f0f0f0; */
  }
.goods-pic {
      width: 120px;
      height: 120px;
      display: block;
      border-radius: 30rpx;
}
.goods-item-left {
  display: flex;
  align-items: center;
    margin-right: 5px;
}
  .goods-item-right {
    /* width: 240px; */
    display: flex;
    flex-direction: column;
    margin-left: 15rpx;
    justify-content: space-between;
}
.goods-name {
  width: 100%;
  font-size: 16px;
  height: 90rpx;
  font-weight: 700;
  /* overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical; */
  display: block;
}
    .goods-price {
      font-size: 36rpx;
      color: #c00000;
      margin-top: 30rpx;
    }
      
    .goods_people{
      color: grey;
      font-size: 24rpx;
    }
    .conTabar{
      font-size: 28rpx;
      display: flex;
      justify-content: space-around;
      line-height: 60rpx;
    }
    .conTabar view{
      margin: 30rpx 0;
    }
    .conTabarLeft{
      
      display: flex;
      justify-content: space-between;
    }
    .conTabarLeft view{
      margin: 0 20rpx;
    }
    .my-settle-container {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        padding-left: 5px;
        box-sizing: border-box;
    
        .radio {
          display: flex;
          align-items: center;
        }
    
        .amount-box {
          .amount {
            color: #C00000;
            font-weight: bold;
          }
        }
    
        .btn-settle {
          border: 2rpx solid #177fff;
          height: 30px;
          color: #177fff;
          line-height: 30px;
          padding: 0 15px;
          // min-width: 100px;
          text-align: center;
          border-radius: 50rpx;
        }
        .btnAll{
          margin-right: 10rpx;
          display: flex;
          flex: 0.8;
          justify-content: space-between;
        }
      }
</style>
