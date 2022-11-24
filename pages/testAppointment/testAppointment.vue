<template>
  <view class="con">
    <view class="select">
      <p>体检预约 ·</p>
      <uDataSelect
       class="select-box"
       v-model="value"
       :localdata="range"
       :clear="false"
      ></uDataSelect>
    </view>
    <view class="nav-box">
      <view class="nav">
        <view class="nav-item">
          <image src="../../static/file.png" mode=""></image>
          <P>体检套餐</P>
        </view>
        <view class="nav-item">
          <image src="../../static/disc.png" mode=""></image>
          <P>限时优惠</P>
        </view>
        <view class="nav-item">
          <image src="../../static/address4.png" mode=""></image>
          <P>体检地点</P>
        </view>
        <view class="nav-item">
          <image src="../../static/_my.png" mode=""></image>
          <P>我的体检</P>
        </view>
        <view class="nav-item">
          <image src="../../static/time.png" mode=""></image>
          <P>预约时间</P>
        </view>
        <view class="nav-item">
          <image src="../../static/notice.png" mode=""></image>
          <P>体检须知</P>
        </view>
        <view class="nav-item">
          <image src="../../static/standard.png" mode=""></image>
          <P>健康标准</P>
        </view>
        <view class="nav-item">
          <image src="../../static/line_ order-editor.png" mode=""></image>
          <P>在线预约</P>
        </view>
      </view>
    </view>
    <view class="kinds-box">
      <uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="text" activeColor="#177fff">
        
      </uni-segmented-control>
      <view class="content">
          <view v-show="current === 0">
              <view class="items" >
                <view class="item">
                  <image src="../../static/10.jpg" mode=""></image>
                  <view class="info-box">
                    <view class="title">
                      <view class="label">热门</view>
                      <p>[男]全面体检套餐</p>
                    </view>
                    <view class="labels">
                      <p>肿瘤筛查</p>
                      <p>前列腺检查</p>
                      <p>甲状腺检查</p>
                    </view>
                    <view class="can">
                      <p>三天可预约</p>
                    </view>
                    <view class="bottom">
                      <view class="bot-left">
                        <view class="price-box">
                          <p class="price">￥30.00</p>
                          <P class="shelled">已售300+</P>
                        </view>
                        <view class="hospital">
                          <image src="../../static/ask.png" mode=""></image>
                          <p>深圳市北京大学附属医院</p>
                        </view>
                      </view>
                      <view class="bot-right" @click="toPhysicalInfo">
                        预约体验
                      </view>
                    </view>
                  </view>
                </view>
              </view>
              <view class="items" >
                <view class="item">
                  <image src="../../static/10.jpg" mode=""></image>
                  <view class="info-box">
                    <view class="title">
                      <view class="label">热门</view>
                      <p>[男]全面体检套餐</p>
                    </view>
                    <view class="labels">
                      <p>肿瘤筛查</p>
                      <p>前列腺检查</p>
                      <p>甲状腺检查</p>
                    </view>
                    <view class="can">
                      <p>三天可预约</p>
                    </view>
                    <view class="bottom">
                      <view class="bot-left">
                        <view class="price-box">
                          <p class="price">￥30.00</p>
                          <P class="shelled">已售300+</P>
                        </view>
                        <view class="hospital">
                          <image src="../../static/ask.png" mode=""></image>
                          <p>深圳市北京大学附属医院</p>
                        </view>
                      </view>
                      <view class="bot-right" @click="toPhysicalInfo">
                        预约体验
                      </view>
                    </view>
                  </view>
                </view>
              </view>
              <view class="items" >
                <view class="item">
                  <image src="../../static/10.jpg" mode=""></image>
                  <view class="info-box">
                    <view class="title">
                      <view class="label">热门</view>
                      <p>[男]全面体检套餐</p>
                    </view>
                    <view class="labels">
                      <p>肿瘤筛查</p>
                      <p>前列腺检查</p>
                      <p>甲状腺检查</p>
                    </view>
                    <view class="can">
                      <p>三天可预约</p>
                    </view>
                    <view class="bottom">
                      <view class="bot-left">
                        <view class="price-box">
                          <p class="price">￥30.00</p>
                          <P class="shelled">已售300+</P>
                        </view>
                        <view class="hospital">
                          <image src="../../static/ask.png" mode=""></image>
                          <p>深圳市北京大学附属医院</p>
                        </view>
                      </view>
                      <view class="bot-right" @click="toPhysicalInfo">
                        预约体验
                      </view>
                    </view>
                  </view>
                </view>
              </view>
          </view>
          <view v-show="current === 1">
              选项卡2的内容
          </view>
      </view>
    </view>
  </view>
</template>

<script>
  import uSegmentedControl from '../../uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.vue'
  import uDataSelect from '../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.vue'
  export default {
    data() {
      return {
        value: 0,
        DiscountList:[],
        range: [
          { value: 0, text: "深圳" },
          { value: 1, text: "广州" },
          { value: 2, text: "北京" },
        ],
        items: ['热门', '可预约时间'],
        current: 0
      }
    },
    onLoad() {
      // this.getDiscountList()
    },
    methods: {
      onClickItem(e) {
        if (this.current != e.currentIndex) {
          this.current = e.currentIndex
        }
      },
      toPhysicalInfo() {
        uni.navigateTo({
          url:"../physicalInfo/physicalInfo"
        })
      },
    },
    components: {
      uDataSelect
    }
  }
</script>

<style>
uDataSelect{
  color: #fff;
}
.con .select {
  padding: 20rpx;
  display: flex;
  width: 710rpx;
  height: 260rpx;
  background-color: #177FFF;
}
.con .select p {
  color: #FFFFFF;
}
.con .select .select-box {
  margin-top: -16rpx;
  margin-left: -5rpx;
}
.con .nav-box {
  padding: 20rpx;
}
.con .nav-box .nav {
  width: 610rpx;
  height: 240rpx;
  border-radius: 20rpx;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 40rpx 60rpx 40rpx 40rpx;
  background-color: #FFFFFF;
  margin-top: -190rpx;
  box-shadow:0 0 10rpx 5rpx rgba(0,0,0,0.1);
}
.con .nav-box .nav-item {
  display: flex;
  margin-left: 20rpx;
  margin-bottom: 40rpx;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 24rpx;
  width: 110rpx;
  height: 100rpx;
}
.con .nav-box .nav-item image {
  width: 60rpx;
  height: 60rpx;
}
.content {
  padding: 20rpx;
}
.content .items {
  background-color: #FFFFFF;
  width: 650rpx;
  margin: 40rpx 0;
  height: 250rpx;
  padding: 30rpx;
  border-radius: 20rpx;
  box-shadow:0 0 10rpx 5rpx rgba(0,0,0,0.1);
}
.content .items .item {
    display: flex;
}
.content .item image {
  width: 150rpx;
  border-radius: 10rpx;
  height: 150rpx;
}
.content .items .item .info-box {
  margin-left: 20rpx;
}
.content .items .item .info-box .title {
  display: flex;
}
.content .items .item .info-box .title .label {
  width: 70rpx;
  height: 40rpx;
  background-color: #177FFF;
  color: #FFFFFF;
  border-radius: 10rpx;
  text-align: center;
  line-height: 40rpx;
  font-size: 24rpx;
}
.content .items .item .info-box .title p {
  line-height: 35rpx;
  margin-left: 15rpx;
}
.content .items .item .labels {
  margin-top: 10rpx;
  font-size: 24rpx;
  display: flex;
}
.content .items .item .labels p {
  color: #848484;
  border-radius: 10rpx;
  padding: 0 10rpx;
  margin-right: 15rpx;
  background-color: #e0e0e0;
}
.content .items .item .can {
  margin-top: 10rpx;
  width: 120rpx;
  text-align: center;
  border-radius: 10rpx;
  font-size: 24rpx;
  padding: 0 10rpx;
  background-color: #f0f7fe;
  color: #177FFF;
  border: 4rpx solid #177FFF;
}
.content .items .item .price-box {
  display: flex;
}
.content .items .item .price-box .price {
  font-size: 38rpx;
  font-weight: 600;
  color: #f9284d;
}
.content .items .item .price-box .shelled {
  font-size: 22rpx;
  margin-left: 10rpx;
  line-height: 55rpx;
}
.content .items .item .hospital {
  display: flex;
  line-height: 25rpx;
  font-size: 22rpx;
}
.content .items .item .hospital image {
  width: 25rpx;
  height: 25rpx;
}
.content .items .item .bottom {
  width: 480rpx;
  margin-top: 40rpx;
  display: flex;
  justify-content: space-between;
}
.content .items .item .bottom .bot-right {
  margin-top: 20rpx;
  color: #FFFFFF;
  font-size: 28rpx;
  text-align: center;
  width: 140rpx;
  line-height: 55rpx;
  background-color: #177FFF;
  border-radius: 10rpx;
  height: 55rpx;
}
</style>
