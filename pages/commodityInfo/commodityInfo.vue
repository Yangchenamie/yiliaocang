<template>
  <view>
    <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular="true">
      <swiper-item>
        <view class="swiper-item">
          <image :src="goodsData.productPicture" mode=""></image>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item">
          <image :src="goodsData.productPicture" mode=""></image>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item">
          <image :src="goodsData.productPicture" mode=""></image>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item">
          <image :src="goodsData.productPicture" mode=""></image>
        </view>
      </swiper-item>
    </swiper>
    <view class="top">
      <view class="price-box">
        <p class="price">￥{{goodsData.productPrice}}.00</p>
        <p>已售: 2132</p>
      </view>
      <view class="vip">
        <view class="vip-left">
          <image src="../../static/vip.png" mode=""></image>
          <p>XXX会员价: ￥{{goodsData.productPrice - 1}}.00</p>
        </view>
        <view class="vip-right">
          <P>成为会员></P>
        </view>
      </view>
      <view class="introduce">
        <view class="title">
          <view class="label">处方药</view>
          <P>{{goodsData.productName}}</P>
        </view>
        <p class="text">{{goodsData.productDescription}}</p>
      </view>
    </view>
    <view class="info-box">
      <view class="freight">
        <p>运费:</p>
        <span>￥10</span>
      </view>
      <view class="discount">
        <p>优惠活动:</p>
        <span>满100包邮</span>
      </view>
      <view class="ensure">
        <p>保证:</p>
        <span>7天无理由退货</span>
      </view>
      <view class="number">
        <view class="number-left">
          <P>购买数量</P>
          <span>有货</span>
        </view>
        <uni-number-box v-model="vModelValue"></uni-number-box>
      </view>
    </view>
    <view class="evaluate">
      <view class="evaluate-number">
        <p>药品评价(300+)</p>
        <p class="all" @click="toAllComment">查看全部 ></p>
      </view>
      <!-- <view class="kinds">
        <view class="kinds-item">正品(20)</view>
        <view class="kinds-item">日期新鲜(30)</view>
        <view class="kinds-item">日期新鲜(30)</view>
      </view> -->
    </view>
    <uGoodsNav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onclick" @buttonClick="buttonClick"
      class="fix" />
  </view>
</template>

<script>
  import uGoodsNav from '../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.vue'
  import uNumberBox from '../../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.vue'
  import {
    mapState,
    mapMutations,
    mapGetters
  } from 'vuex'
  export default {
    data() {
      return {
        vModelValue: 1,
        flag: undefined,
        options: [{
          icon: 'headphones',
          text: '客服'
        }, {
          icon: 'heart',
          text: '收藏',
        }, {
          icon: 'cart',
          text: '购物车',
          info: 0
        }],
        buttonGroup: [{
            text: '加入购物车',
            backgroundColor: '#ff0000',
            color: '#fff'
          },
          {
            text: '立即购买',
            backgroundColor: '#ffa200',
            color: '#fff'
          }
        ],
        commodity: [],
        coll: {}, //存用户id和产品id
        goodsData: {},
        // uId:uni.getStorageSync('uId')
      }
    },
    computed: {
      ...mapState('m_user', ['uId']),
      ...mapGetters('m_cart', ['total'])
    },
    watch: {
      // total(newVal){
      //   const findResult = this.options.find((x) => x.text ==='购物车')
      //   if(findResult){
      //     findResult.info = newVal
      //   }
      // }
      total: {
        handler(newVal) {

          const findResult = this.options.find((x) => x.text === '购物车')
          if (findResult) {
            findResult.info = newVal
          }

        },
        immediate: true,

      }
    },
    onLoad(option) {
      this.commodity = option
      this.coll = {
        commodityId: this.commodity.Id,
        id: uni.getStorageSync('user').id
      }
      const gid = option.gid;
      const uId = uni.getStorageSync('uId')
      const id = this.goodsData.id
      
      this.getDetails(gid)
      this.getStatus(gid)
      this.changeStatus()
    },
    onReady() {
      //当渲染完页面的时候请求查询该产品的收藏状态
      // this.queryCollection()

    },
    methods: {
      ...mapMutations('collection', ['addToCollection']),
      ...mapMutations('m_cart', ['addToCart']),
      buttonClick(e) {
        console.log(e)
        this.options[2].info++;
        if (e.index == 0) {

          const goods = {
            "cartId": this.goodsData.id,
            "cartName": this.goodsData.productName,
            "cartNum": 1,
            "cartPicture": this.goodsData.productPicture,
            "cartPid": 0,
            "cartPrice": this.goodsData.productPrice,
            "cartStock": 0,
            "cartUid": "string",
            "cartValid": 0,
            "status": true
          }
          this.addToCart(goods)
        }
      },
      onclick(e) {
        if (e.index == 0) {
          console.log(1);
        } else if (e.index == 1) {
          if(this.flag == true) {
            this.options[1].icon = 'heart-filled'
            console.log('收藏了');
            this.addCollection()
            //this.changeStatus()
            this.flag = false;
          }else if(this.flag == false){
            this.options[1].icon = 'heart'
            this.delCollection()
            //this.getStatus()
             //this.changeStatus()
            this.flag = true
          }
          //this.addCollection()
        } else if (e.index == 2) {
          wx.switchTab({
            url: '../cart/cart'
          })
        }
      },
      toAllComment() {
        uni.navigateTo({
          url:'/pages/allcomments/allcomments'
        })
      },
      //请求添加该产品到收藏列表里
      async addCollection() {
        const res = await this.request({
          url: 'http://1.12.244.193:8020/shop/collection/add',
          data: {
            "productId": this.goodsData.id,
            "productName": this.goodsData.productName,
            "productPicture": this.goodsData.productPicture,
            "userId": this.uId,
            "productPrice":this.goodsData.productPrice
          },
          method: 'POST'
          //         data:{
          // "productId": 0,
          // "productName": "string",
          // "productPicture": "string",
          // "userId": "string"

          //         }

        })
        console.log('87645', res);
      },
      //请求从收藏列表里面删除该产品
      async delCollection(){
        const res =  await this.request({
           url:`http://1.12.244.193:8020/shop/collection/delete/${this.uId}/${this.goodsData.id}`,
           // data:{
           //   uId:this.uId,
           //   pid:this.goodsData.id,   
           // },
           method:'DELETE'
           })
           console.log(res);
           
      },
      //查询当前产品是否被收藏
      // async queryCollection(){
      //    await this.request({url:'/queryCollection',method:'POST',data:this.coll}).then(res=>{
      //       if(res.code === '200' && res.isCollected === "true") {
      //         this.options[1].icon = 'heart-filled'
      //         this.flag = "true"
      //       } else {
      //          this.options[1].icon = 'heart'
      //          this.flag = "false"
      //       }
      //   })
      // },
      // collection() {
      //   if(this.flag === "false") {
      //     this.options[1].icon = 'heart-filled'
      //     this.addCollection()
      //   }else {
      //     this.options[1].icon = 'heart'
      //     this.delCollection()
      //   }
      // },
      async getDetails(gid) {

        const res = await this.request({
          url: `http://1.12.244.193:8020/shop/product/${gid}`
        })
        console.log('55555', res);
        this.goodsData = res.data.product
        
      },
      async getStatus(gid){
        
        console.log('5675432134567',this.goodsData);
        const res = await this.request({
          url:`http://1.12.244.193:8020/shop/product/getDetails/${this.uId}/${gid}`,
          // data:{
          //   uid:this.uId,
          //   productId:this.goodsData.id
          // }
        })
        this.flag = res.data.details.collect
        console.log('判断状态',this.flag);
        // if(res.data.details.collect){
        // }else return false        
        this.changeStatus(this.flag)
      },
      changeStatus(flag){
        console.log('12345',this.flag);
        if(this.flag == true){
          this.options[1].icon = 'heart-filled'
          this.flag = false
        }
      },
      
    },
    components: {
      uNumberBox,
      uGoodsNav
    }
  }
</script>

<style scoped>
  @import url("../../util/css/common.css");

  swiper {
    width: 100%;
    height: 400rpx;
  }

  .swiper-item image {
    width: 100%;
  }

  .top {
    margin-top: 40rpx;
    padding: 30rpx;
    background-color: #FFFFFF;
    border-radius: 30rpx;
    box-shadow: 0 0 10rpx 5rpx rgba(0, 0, 0, 0.1);
  }

  .top .price-box {
    display: flex;
    font-size: 28rpx;
    justify-content: space-between;
  }

  .top .price-box .price {
    color: #f9284d;
    font-weight: 600;
    font-size: 34rpx;
  }

  .top .vip {
    display: flex;
    justify-content: space-between;
    margin-top: 20rpx;
    border-radius: 20rpx;
    background: linear-gradient(45deg, #f7e5d5, #f2d4b9);
    width: 100%;
    height: 100rpx;
  }

  .top .vip image {
    width: 50rpx;
    padding: 20rpx 20rpx 20rpx 20rpx;
    height: 50rpx;
  }

  .top .vip .vip-left {
    display: flex;
  }

  .top .vip .vip-left p {
    color: #b79979;
    font-size: 28rpx;
    font-weight: 600;
    line-height: 100rpx;
  }

  .top .vip .vip-right {
    margin-right: 20rpx;
    line-height: 100rpx;
    font-size: 24rpx;
    font-weight: 600;
    color: #b79979;
  }

  .introduce .title {
    padding-top: 40rpx;
    display: flex;
    font-size: 34rpx;
    line-height: 35rpx;
    font-weight: 600;
  }

  .introduce .title .label {
    width: 100rpx;
    background-color: #daeaff;
    text-align: center;
    margin-right: 20rpx;
    border: 4rpx solid #177FFF;
    font-size: 24rpx;
    line-height: 30rpx;
    color: #177fff;
    height: 30rpx;
  }

  .introduce .text {
    padding: 30rpx 0;
    font-size: 28rpx;
  }

  .info-box {
    font-size: 28rpx;
    margin-top: 40rpx;
    padding: 30rpx;
    border-radius: 30rpx;
    background-color: #FFFFFF;
    box-shadow: 0 0 10rpx 5rpx rgba(0, 0, 0, 0.1);
  }

  .info-box .freight,
  .info-box .ensure,
  .info-box .discount {
    display: flex;
    padding: 20rpx 0;
  }

  .info-box .freight p {
    font-size: 28rpx;
  }

  .info-box .freight span,
  .info-box .discount span,
  .info-box .ensure span {
    font-weight: 600;
    margin-left: 30rpx;
  }

  .info-box .number {
    margin-top: 10rpx;
    display: flex;
    justify-content: space-between;
  }

  .info-box .number .number-left span {
    font-size: 24rpx;
    color: #999999;
    margin-left: 20rpx;
  }

  .evaluate {
    padding: 30rpx;
    margin-top: 40rpx;
    padding-bottom: 150rpx;
    border-radius: 30rpx;
    background-color: #FFFFFF;
    box-shadow: 0 0 10rpx 5rpx rgba(0, 0, 0, 0.1);
  }

  .evaluate .evaluate-number {
    display: flex;
    justify-content: space-between;
  }

  .evaluate .evaluate-number .all {
    font-size: 26rpx;
    color: #177FFF;
    font-weight: 600;
  }

  .evaluate .kinds {
    display: flex;
    padding-top: 20rpx;
  }

  .evaluate .kinds .kinds-item {
    padding: 10rpx;
    height: 30rpx;
    font-size: 28rpx;
    text-align: center;
    line-height: 30rpx;
    margin-right: 20rpx;
    border-radius: 15rpx;
    background-color: #c3deff;
  }

  .fix {
    position: fixed;
    bottom: 0;
    left: 0;
  }

  .fix::before {
    position: absolute;
    left: 0;
    top: 0;
    width: 10rpx;
    height: 10rpx;
    background: url(../../static/Star.png) no-repeat;
    background-size: 20rpx;
  }
</style>
