<template>
	<view class="content">
	  <view class="welcome">
	    <view class="img-box">
        <image :src="userInfo.avatarUrl" mode=""></image>
        <view class="welcome-text">欢迎您！{{userInfo.nickName}}</view>
	    </view>
      <view class="address">
        <image src="../../static/address.png" mode=""></image>天河区乐意居花苑
      </view>
	  </view>
    <medicalNav></medicalNav>
    <carousel :swipers="swipers"></carousel>
    <discount></discount>
    <healthProducts :product="product"></healthProducts>
    <consult :list="list"></consult>
	</view>
</template>

<script>
  import medicalNav from '../../components/medicalNav/medicalNav.vue'
  import carousel from '../../components/carousel/carousel.vue'
  import discount from '../../components/discount/discount.vue'
  import healthProducts from '../../components/healthProducts/healthProducts.vue'
	import consult from '../../components/consult/consult.vue'
  // 导入自己封装的 mixin 模块
  import badgeMix from '@/mixins/tabbar-badge.js'
   import { mapState } from 'vuex'
  export default {
    // 将 badgeMix 混入到当前的页面中进行使用
      mixins: [badgeMix],
		data() {
			return {
				swipers: [],
        product:{},
        list:{}
			}
		},
    components:{
      medicalNav,carousel,discount,healthProducts,consult
    },
		onLoad() {
      // this.getSwiper()
      this.getProduct(),
      this.getList()
		},
    methods: {
      // async getCommodity() {
      //   const res = await this.request({
      //     url: '/commodity'
      //   })
      //   this.commodity = res.commoditys
      // },
      async getProduct(){
          
        const res = await this.request({
          url:'http://1.12.244.193:8020/shop/product/pageProduct/1/2/0'
        })
        this.product = res.data.rows;
        console.log(this.product);
        
      },
      async getList(){
          
        const res = await this.request({
          url:'http://47.92.174.79:7001/medservice/infor/fimdAll'
        })
        this.list = res.data.list;
        console.log(this.list);
        
      }
    },
    computed:{
      ...mapState('m_user',['userInfo']),
    }
  }
  
</script>

<style>
@import url("../../util/css/common.css");
body {
  background-color: #fdfdfd;
}
.content .welcome {
  width: 100%;
  height: 300rpx;
  background-color: #007AFF;
}
.content .welcome .img-box {
  display: flex;
}
.content .welcome .img-box image {
  margin-left: 20rpx;
  width: 80rpx;
  height: 80rpx;
  background-color: #FFFFFF;
  border-radius: 50%;
}
.welcome .welcome-text {
  line-height: 80rpx;
  font-size: 42rpx;
  padding-left: 20rpx;
  color: #FFFFFF;
}
.welcome .address {
  padding: 30rpx 0;
  display: flex;
  color: #FFFFFF;
  font-size: 28rpx;
}
.welcome .address image{
  margin-left: 20rpx;
  width: 40rpx;
  height: 40rpx;
}
.hub-slider { position: relative; }
 
.hub-slider ul { list-style: none; }
 
.hub-slider ul li {
  width: 800px;
  height: 300px;
  background: #add8e6;
  position: absolute;
  left: 0;
  top: 0;
}
 
.hub-slider-controls {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1000;
}
 
.hub-slider-arrow {
  width: 40px;
  height: 40px;
  border: none;
  background: #f00;
  color: #fff;
  font-weight: bold;
}      
</style>
