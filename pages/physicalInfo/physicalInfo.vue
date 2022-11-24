<template>
  <view>
    <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular="true">
      <swiper-item>
        <view class="swiper-item">
          <image src="../../static/10.jpg" mode=""></image>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item">
          <image src="../../static/10.jpg" mode=""></image>
        </view>
      </swiper-item>
    </swiper>
    <view class="content">
      <view class="top">
        <view class="top-left">
          <p class="price">￥30.00</p>
          <p class="useing-price">券后: ￥20.00</p>
        </view>
        <view class="top-right">已售250</view>
      </view>
      <view class="stock">库存: 300</view>
      <view class="tip">实际价格以被当地门诊价格为准</view>
      <view class="title">{{info.name}}</view>
      <view class="labels">
        <p>肿瘤筛查</p>
        <p>前列腺检查</p>
        <p>甲状腺检查</p>
      </view>
      <view class="pre-time-box">
        <p class="pre-time">预约时间</p>
      </view>
      <view class="time-slot">
        <view class="time-title">请选择预约时间段</view>
        <view class="times">
          <p v-for="(item,index) in times" :key="item.id" :class="move===index?'move':''" @click="changeMove(index,item.time)">{{item.time}}</p>              
        </view>
      </view>
      <view class="choose">
        <p>已选择
          <span>{{choosetime}}</span>
        </p>
        <uni-datetime-picker type="date" :clear-icon="false" v-model="single"/>
      </view>
      {{ytime}}
      <view class="address-box">
        <p class="title">体检医院地点</p>
        <view class="address-con">
          <view class="address-top">
            <image src="../../static/ask.png" mode=""></image>
            <p>{{info.clinic}}</p>
          </view>
          <view class="address">
            <p>地址</p>
            <P class="right">深圳市软件产业基地滴4栋裙君414-415室</P>
          </view>
          <view class="phone">
            <P>电话</P>
            <P class="right">+86(0755) 2777 9898</P>
          </view>
          <view class="work-time">
            <p>工作时间</p>
            <p class="right">上午9:00-12:00下午14:00-18:00</p>
          </view>
        </view>
      </view>
      
      <view class="text-box">
        <p class="infos">图文详情</p>
        <view class="text">
          <view class="text-title">常规项目检查(4)</view>
          <p>一般检查</p>
          <p>了解身高、体重、体重指数、血压、三围、腰臀比例和营养发育状况等</p>
          <p>内科常规检查</p>
          <p>对胸廊、心脏、肺脏、腹部、肝脏、胆囊、脾脏、肾脏和神经系统等进行全面理学检查，发现可能存在的阳性体征，及早予诊断和治疗</p>
          <p>外科常规检查（男）</p>
          <p>检查全身皮肤、潜在淋巴结、甲状腺、四肢、关节脊柱等重要组织器官、发现可能存在的阳性体征</p>
          <p>眼科常规检查</p>
          <p>检查视力、眼脸、泪器、结膜、眼球、角膜等项目及外眼器官</p>
          <image src="../../static/10.jpg" mode="" class="pic"></image>
        </view>
      </view>
      <uGoodsNav :fill="true"  :options="options" :buttonGroup="buttonGroup" @buttonClick="buttonClick" class="fix" @onInfo="getInfo" @click="collection"/>
    </view>
  </view>
</template>

<script>
  import uGoodsNav from '../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.vue'
  export default {
    data() {
      return {
        info:{},
        flag:0,
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
        ],
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
                	      backgroundColor: '#6daeff',
                	      color: '#fff'
                	    },
                	    {
                	      text: '立即购买',
                	      backgroundColor: '#3790ff',
                	      color: '#fff'
                	    }
                	    ]
      }
    },
    onLoad(option) {
      this.info = option
    },
    onReady() {
      //当渲染完页面的时候请求查询该产品的收藏状态
      this.queryCollection()
    },
    methods: {
      buttonClick (e) {
      	    console.log(e)
      	    this.options[2].info++
            if(e.index == 0) {
              this.addCart()
            }else {
              this.addOrder()
            }
      },
      changeMove(index,time) {
        this.move = index
        this.itemTime = time
      },
      // 点击是收藏按钮,收藏按钮变化
      collection() {
        if(this.flag == 0) {
          this.options[1].icon = 'heart-filled'
          this.addCollection()
        }else {
          this.options[1].icon = 'heart'
          this.delCollection()
        }
        this.flag =!this.flag
      },
      //请求添加该产品到收藏列表里
      async addCollection(){
         await this.request({url:':7003/thaliservice/med-thali-collection/addCollection',method:'POST',data:{"id":this.info.id,"thaliAvatar":this.info.avatar,"thaliName":this.info.name,"thaliPrice":this.info.price,"userId":"lanan"}}).then(res=>{
            if(res.code === '200') {
                
            }
        }).catch(err=> {
          console.log("error")
          console.log('表单错误信息：',err)
        })
      },
      //请求从收藏列表里面删除该产品
      async delCollection(){
         await this.request({url:`:7003/thaliservice/med-thali-collection/${this.info.id}`,method:'DELETE',data:''}).then(res=>{
            if(res.code === '200') {
      
            }
        }).catch(err=> {
          console.log("error")
          console.log('表单错误信息：',err)
        })
      },
      //查询当前产品是否被收藏
      queryCollection(){
        if(this.info.isCollection == 1) {
          this.options[1].icon = 'heart-filled'
          this.flag = 1
        }else {
          this.options[1].icon = 'heart'
          this.flag = 0
        }
      },
      // 加入购物车
      async addCart() {
        const res = await this.request({
          url: ':7004/testservice/testcart/addCart',
          method:'POST',
          data:{
            "thaliAvatar":this.info.avatar,
            "thaliId":this.info.id,
            "thaliName":this.info.name,
            "thaliPrice":this.info.price,
            "userId":"123"
          }
        }).then(res => {
          if(res.code === '200') {
            // this.commodity = res.commoditys
          }
        })
      },
      // 添加订单
      async addOrder() {
        const res = await this.request({
          url: ':7004/testorderservice/testorder/addTestorder',
          method:'POST',
          data:{
            "thaliAvatar":this.info.avatar,
            "thaliName":this.info.name,
            "thaliPrice":this.info.price,
            "userName":"蓝桉",
            "ytime":this.ytime
          }
        }).then(res => {
          if(res.code === '200') {
            // this.commodity = res.commoditys
          }
        })
      },
      toTime() {
        uni.navigateTo({
          url:'../time/time'
        })
      }
    },
    components: {
      uGoodsNav
    },
    computed: {
      choosetime() {
        var mooth = this.single.slice(5,7)
        var date = this.single.slice(8,10)
        return mooth+"-"+date+" "+this.itemTime
      },
      ytime() {
        return this.single + this.choosetime.slice(5,10) +":00"
      }
    }
  }
</script>

<style>
  .move {
    background-color: #177FFF !important;
    color: #FFFFFF;
  }
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
  .choose {
    width: 640rpx;
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
swiper {
  width: 100%;
  height: 400rpx;
}
.swiper-item image {
  width: 100%;
  height: 400rpx;
}
.content {
  padding: 20rpx;
}
.content .top {
  display: flex;
  justify-content: space-between;
}
.content .top .top-left {
  display: flex;
}
.content .top .top-left .price {
  color: #f9284d;
  font-size: 38rpx;
  font-weight: 600;
}
.content .top .top-left .useing-price {
  padding: 0rpx 10rpx;
  font-size: 24rpx;
  margin-left: 10rpx;
  line-height: 48rpx;
  text-align: center;
  color: #FFFFFF;
  border-radius: 20rpx;
  background-color: #f9284d;
}
.content .top .top-right {
  font-size: 24rpx;
  color: #666666;
}
.content .stock {
  margin-top: 20rpx;
  font-size: 24rpx;
  color: #747474;
}
.content .tip {
  margin-top: 20rpx;
  font-size: 22rpx;
  color: #f9284d;
}
.content .title {
  margin-top: 20rpx;
  font-weight: 600;
}
.content .labels {
  margin-top: 20rpx;
  display: flex;
}
.content .labels p {
  color: #666666;
  border-radius: 10rpx;
  font-size: 24rpx;
  height: 40rpx;
  line-height: 40rpx;
  padding: 0 10rpx;
  margin-right: 15rpx;
  background-color: #e0e0e0;
}
.content .pre-time-box {
  width: 500rpx;
  margin-top: 20rpx;
  font-size: 32rpx;
  font-weight: 600;
}
.content .pre-time-box p {
  margin-bottom: 20rpx;
}
.content .pre-time-box .choose-box {
  display: flex;
}
.content .pre-time-box .choose {
  font-size: 28rpx;
  font-weight: 500;
  text-align: center;
  width: 120rpx;
  border-radius: 10rpx;
  line-height: 50rpx;
  height: 70rpx;
  background-color: #C0C0C0;
  border: 3rpx solid #C0C0C0;
}
.address-box {
  margin-top: 60rpx;
}
.address-box .title {
  font-size: 34rpx;
}
.address-box .address-con {
  color: #666666;
  padding: 30rpx;
  font-size: 28rpx;
  margin-top: 40rpx;
  background-color: #FFFFFF;
  border-radius: 20rpx;
  box-shadow:0 0 10rpx 5rpx rgba(0,0,0,0.1);
}
.address-box .address-con .address-top {
  display: flex;
  font-weight: 600;
}
.address-box .address-con .address-top image {
  width: 40rpx;
  height: 40rpx;
  margin-right: 20rpx;
}
.address-box .address-con .address, .phone, .work-time {
  display: flex;
  justify-content: space-between;
  margin-top: 30rpx;
}

.address-box .address-con .right {
  width: 450rpx;
}
.text-box .infos {
  margin-top: 40rpx;
  font-size: 34rpx;
  font-weight: 600;
}
.text {
  padding: 30rpx;
  margin-top: 40rpx;
  font-size: 24rpx;
  background-color: #FFFFFF;
  border-radius: 20rpx;
  box-shadow:0 0 10rpx 5rpx rgba(0,0,0,0.1);
}
.text p {
  display: block;
  margin: 20rpx 0;
  color: #666666;
}
.text p:nth-child(3), .text p:nth-child(5){
  height: 80rpx;
  border-bottom: 2rpx solid #ebebeb;
}
.text p:nth-child(5) {
  height: 120rpx;
  border-bottom: 2rpx solid #ebebeb;
}
.text p:nth-child(7) {
  height: 100rpx;
  border-bottom: 2rpx solid #ebebeb;
}
.text .text-title {
  width: 250rpx;
  margin-top: 40rpx;
  font-weight: 600;
  margin-left: 50%;
  border-radius: 30rpx;
  transform: translateX(-50%);
  text-align: center;
  padding: 10rpx 20rpx;
  background-color: #e0e0e0;
}
.text image {
  margin-top: 40rpx;
  margin-bottom: 100rpx;
  height: 250rpx;
  border-radius: 20rpx;
}
.fix {
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
