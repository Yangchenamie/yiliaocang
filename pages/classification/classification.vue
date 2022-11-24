<template>
  <view class="content">
    <uSearchBar radius="50" placeholder="搜索关键词" bgColor="#f2f3f7" @confirm="search" />
    <!-- <view class="bread">
      <view class="bread-item" :class="move===index?'move':''" v-for="(item,index) in breads" :key="item.id" @click="changeMove(index)">
        {{item.bread}}
      </view>
    </view> -->
    <view class="container">
      <scroll-view scroll-y="true" class="scroll-y">
        <view class="items" :class="active===index?'active':''" v-for="(item,index) in cateInfo" :key="item.cateId" @click="activeChanged(item.cateId);change(index)">{{item.cateName}}</view>
      </scroll-view>
          <!-- <view class="commodity" @click="toCommodityInfo(item.commodityId,item.commodityImg,item.commodityTitle,item.commodityPrice,item.commodityStatus)" v-for="(item,index) in commodity" :key="item.commodityId">
            <image :src="item.commodityImg" mode=""></image>
            <view class="commodity-info">
              <p>{{item.commodityTitle}}</p>
              <p class="price">￥{{item.commodityPrice}}</p>
            </view>
          </view> -->
          <scroll-view scroll-y class="right-scroll-view" :scroll-top="scrollTop">
            <view class="cate-rv-con" v-for="(item2,index2) in goodsInfo" :key="index2">
              <navigator :url="'/pages/commodityInfo/commodityInfo?gid='+item2.id" class="goods-item">
                  <!-- 商品左侧图片区域 -->
                  <view class="goods-item-left">
                    <image :src="item2.productPicture" class="goods-pic"></image>
                  </view>
                  <!-- 商品右侧信息区域 -->
                  <view class="goods-item-right">
                    <!-- 商品标题 -->
                    <view class="goods-name">{{item2.productName}}</view>
                    <view class="goods-info-box">
                      <!-- 商品价格 -->
                      <view class="goods-price">￥{{item2.productPrice}}</view>
                    </view>
                  </view>
                </navigator>
            </view>
          </scroll-view>
    </view>
  </view>
</template>

<script>
  import uSearchBar from '../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.vue'
  export default {
    data() {
      return {
        active:0,
        move:0,
        current: 0,
        // classify:[
        //   {
        //     id:1,
        //     classify:'全部'
        //   },
        //   {
        //     id:2,
        //     classify:'类别1'
        //   },
        //   {
        //     id:3,
        //     classify:'类别2'
        //   },
        //   {
        //     id:4,
        //     classify:'类别3'
        //   },
        //   {
        //     id:5,
        //     classify:'类别4'
        //   },
        //   {
        //     id:6,
        //     classify:'类别5'
        //   }
        // ],
        // breads:[
        //   {
        //     id:1,
        //     bread:'全部'
        //   },
        //   {
        //     id:2,
        //     bread:'心脏病药'
        //   },
        //   {
        //     id:3,
        //     bread:'心脏病药'
        //   },
        //   {
        //     id:4,
        //     bread:'心脏病药'
        //   },
        // ],
        // commodity:[],
        cateInfo:{},
        goods_id:'',
        goodsInfo:{},
      }
    },
    onLoad() {
      // this.getCommodity()
      this.getCategory();
      this.getGoodsAll();
    },
    methods: {
      change(index) {
        this.active = index,
        this.current = index
      },
      changeMove(index) {
        this.move = index
      },
      // toCommodityInfo(commodityId,commodityImg,commodityTitle,commodityPrice,commodityStatus) {
      //   uni.navigateTo({
      //     url:`../commodityInfo/commodityInfo?Id=${commodityId}&Img=${commodityImg}&Title=${commodityTitle}&Price=${commodityPrice}&Status=${commodityStatus}`
      //   })
      // },
      // async getCommodity() {
      //   const res = await this.request({
      //     url: '/commodity'
      //     // url:'/shop/category/add'
      //   })
      //   this.commodity = res.commoditys
      // },
      async getCategory(){
        const res = await this.request({
          url:'http://1.12.244.193:8020/shop/category/get'
        })
        this.cateInfo = res.data.list
        console.log('11',this.cateInfo);
      },
      activeChanged(i){
        this.goods_id = i
        // this.cateLevel2 = this.cateList[i].children
        // this.scrollTop = this.scrollTop === 0 ? 1 : 0
        console.log('22',this.goods_id);
        this.getGoodsAll(this.goods_id);
      },  
      async getGoodsAll(id){
        if(id==null){
          id=1
        }
        const res = await this.request({
          url:`http://1.12.244.193:8020/shop/product/pageFidProduct/${id}/1/6`
        })
        console.log('33',res);
        this.goodsInfo=res.data.rows
        console.log(this.goodsInfo);
      }
    },
    components: {
      uSearchBar
    },
  }
</script>

<style scoped lang="scss">
  .scroll-view-container{
    border-top: 2rpx solid #ddd;
  }
.container {
  display: flex;
}
.content .scroll-y {
  width: 260rpx;
  height: 1080rpx;
  background-color: #f3f9ff;
}
.content .scroll-y .items {
  width: 260rpx;
  text-align: center;
  line-height: 120rpx;
  height: 120rpx;
}
.active {
  border-left: 4rpx solid #177FFF;
  background-color: #FFFFFF;
  font-weight: 600;
}
.content .bread .bread-item {
  padding: 10rpx 20rpx;
  border-radius: 30rpx;
  text-align: center;
  font-size: 28rpx;
  line-height: 20rpx;
  height: 20rpx;
  border: 4rpx solid #999999;
}
.content .bread {
  display: flex;
  flex-flow: wrap;
  margin-bottom: 20rpx;
  padding: 20rpx;
}
.content .bread .bread-item {
  margin-right: 20rpx;
  font-size: 26rpx;
  color: #999999;
}
.move {
  background-color: #f3f9ff;
  color: #177FFF;
  border: 4rpx solid #177FFF !important;
}
.con-right {
  width: 540rpx;
  margin-left: 20rpx;
}
.commodity {
  display: flex;
  margin-bottom: 40rpx;
  border-bottom: 2rpx solid #333333;
  height: 230rpx;
}
.commodity image {
  width: 200rpx;
  height: 200rpx;
}
.commodity .commodity-info {
  padding-left: 20rpx;
  padding-right: 20rpx;
  font-size: 28rpx;
  width: 290rpx;
  height: 200rpx;
}
.commodity .commodity-info .price {
  color: #f9284d;
  margin-top: 80rpx;
  font-weight: 600;
}
.cate-lv2-title{
    font-size: 12px;
    text-align: center;
    padding: 15px 0;
    font-weight: bold;
    }
     .goods-item {
        display: flex;
        padding: 10px 5px;
        border-bottom: 1px solid #f0f0f0;
    
        .goods-item-left {
          margin-right: 5px;
    
          .goods-pic {
            width: 100px;
            height: 100px;
            display: block;
          }
        }
    
        .goods-item-right {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
    
          .goods-name {
            font-size: 13px;
          }
    
          .goods-price {
            font-size: 16px;
            color: #c00000;
          }
        }
      }
</style>
