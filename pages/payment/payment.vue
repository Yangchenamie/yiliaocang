<template>
  <view class="container">
    <view class="pay">
      <p class="defalut">支付金额</p>
      <view class="money-box">
        <p class="sign">￥</p>
        <p class="money">{{checkedGoodsAmount}}</p>
      </view>
    </view>
    <view class="choise">
      <p>选择支付方式</p>
    </view>
    <view class="ways">
      <view class="way">
        <view class="way-left">
          <image src="../../static/wallet.png" mode=""></image>
          <p>余额支付</p>
          <p class="canuse">可用余额14元</p>
        </view>
        <view class="roll">
          <view class="roll-inset"></view>
        </view>
      </view>
    </view>
    <view class="determine" @tap="openModal" @click="isHave">
      确定
    </view>
    <payKeyboard v-if="showKeyBoard" title="Mi安全键盘" @success="enterSuccess" @close="close"></payKeyboard>
    <view class="settingPassword" v-if="showset===1">
      <view class="setting">
        <p class="setting-title" v-show="setting===0">设置密码</p>
        <p class="setting-title" v-show="setting===1">设置成功</p>
        <p class="illustrate">设置支付密码,用于本软件的支付使用</p>
        <view class="set" @tap="openModal" v-show="setting===0" @click="changeset">设置</view>
        <view class="done" v-show="setting===1" @click="back">返回</view>
        <payKeyboard v-if="showKeyBoard" title="Mi安全键盘" @success="enterSuccess" @close="close"></payKeyboard>
      </view>
    </view>
  </view>
</template>

<script>
  import {mapGetters} from 'vuex'
  import payKeyboard from '../../components/mi-payKeyboard/mi-payKeyboard.vue'
  export default {
    data() {
      return {
        showKeyBoard: false, //打输入键盘
        setting:0, //更改显示是(设置还是返回)
        have:0 ,//0代表还没有设置支付密码
        showset:0 //显示设置密码的设置窗口
      }
    },
    
    methods: {
      // 点击确定的时候打开输入框，或者点击设置的时候打开
      openModal() {
        // 如果点击确定发现没有,先去设置
        if(this.have === 0) {
          this.showset = 1 //将已经设置密码的状态改为1（代表设置了支付密码）
        }
        // 已经有了支付密码正常打开
        if(this.have === 1) {
          this.showKeyBoard = true
        }
      },
      // 点击确定先判断是否已经设置了支付密码
      isHave() {
        if(this.have == 0) {
          // 如果hava为0没有设置密码,先弹出设置密码的设置
          this.showset = 1
        }else {
          // 如果有设置了支付密码则正常弹出输入密码的键盘
          this.showKeyBoard = true
        }
      },
      // 点击返回按钮,隐藏设置密码的
      back() {
        this.showset = 0 //将弹出的设置隐藏
      },
      changeset() {
        this.setting = 1
        // 设置成功后调用接口,更改设置密码的状态
        this.have = 1
        this.showKeyBoard = true
      },
      // 输入正确的回调
      enterSuccess(password) {
        console.log(password) // 输入的密码
        this.showKeyBoard = false
      },
      // 点击[取消] 关闭输入框 的回调
      close() {
        this.showKeyBoard = false
      }
    },
    computed:{
          ...mapGetters('m_cart',['checkedCount','total','checkedGoodsAmount']),
        },
    components: {
      payKeyboard
    }
  }
</script>

<style scoped>
  .container {
    height: 100vh;
    background-color: #efeef4;
  }

  .pay {
    display: flex;
    width: 760rpx;
    height: 300rpx;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .pay .defalut {
    font-size: 26rpx;
  }

  .money-box {
    margin-top: 20rpx;
    font-weight: 600;
    display: flex;
  }

  .money-box .money {
    font-size: 60rpx;
  }

  .money-box .sign {
    margin-top: 30rpx;
  }

  .choise {
    width: 760rpx;
    height: 55rpx;
    background-color: #fff;
    border-bottom: 4rpx solid #ececec;
  }

  .choise p {
    text-indent: 1em;
  }

  .ways {
    background-color: #fff;
    width: 760rpx;
  }

  .way {
    display: flex;
    justify-content: space-between;
    padding: 20rpx 30rpx;
  }

  .way .way-left {
    display: flex;
  }

  .way .way-left image {
    width: 50rpx;
    height: 50rpx;
    margin-right: 10rpx;
  }

  .way .way-left .canuse {
    margin-left: 20rpx;
    font-size: 26rpx;
    color: #eb4958;
    line-height: 46rpx;
  }

  .roll {
    width: 40rpx;
    height: 40rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 2rpx solid #03bdf6;
  }

  .roll .roll-inset {
    width: 20rpx;
    height: 20rpx;
    border-radius: 50%;
    background-color: #03bdf6;
  }

  .determine {
    margin: 0 auto;
    width: 650rpx;
    height: 80rpx;
    margin-top: 60rpx;
    color: #fff;
    font-size: 26rpx;
    line-height: 80rpx;
    border-radius: 40rpx;
    text-align: center;
    background-color: #03bdf6;
  }
  .settingPassword {
    background-color: #4c4c4c;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    width: 760rpx;
    height: 100vh;
  }
  .setting {
    width: 600rpx;
    border-radius: 20rpx;
    height: 400rpx;
    background-color: #fff;
  }
  .setting .setting-title {
    font-size: 36rpx;
    margin-top: 40rpx;
    text-align: center;
    font-weight: 600;
  }
  .setting .illustrate {
    font-size: 26rpx;
    margin-top: 20rpx;
    color: #03bdf6;
    text-align: center;
  }
  .setting .set,.done {
    width: 200rpx;
    height: 60rpx;
    margin: 100rpx auto;
    color: #fff;
    text-align: center;
    line-height: 60rpx;
    font-size: 28rpx;
    background-color: #03bdf6;
    border-radius: 40rpx;
  }
</style>
