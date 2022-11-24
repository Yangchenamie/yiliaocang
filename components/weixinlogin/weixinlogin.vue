<template>
  <!-- <view>
    <view style="width: 90%; margin: 200rpx; auto"></view>
    <view style="margin-bottom: 70rpx; font-size: 60rpx; color: royalblue; text-align: center;">登录</view>
    <uni-forms ref="form" :model="form" :rules="rules">
      <uni-forms-item name="username">
        <!-- <uni-easyinput v-model="form.username" prefixIcon="person" placeholder="请输入登录用户名"></uni-easyinput> -->
 <!--       <uni-easyinput v-model="form.username" focus placeholder="请输入登录用户名"></uni-easyinput>
        		</uni-section>

      </uni-forms-item>
      <uni-forms-item name="password">
        <uni-easyinput type="password" v-model="form.password" prefixIcon="locked" placeholder="请输入登录密码"></uni-easyinput>
      </uni-forms-item>
    </uni-forms>
    <view>
      <button type="primary" @click="login">登录</button>
    </view>
    <navigator url="../register/register" style="margin: 40rpx 0; color: deepskyblue;">前往注册</navigator>
  </view> -->
  <view class="login-container">
    <!-- 提示登录的图标 -->
    <uni-icons type="contact-filled" size="100" color="#AFAFAF"></uni-icons>
    <!-- 登录按钮 -->
    <button type="primary" class="btn-login" @click="getUserProfile">一键登录</button>
    <!-- 登录提示 -->
    <view class="tips-text">登录后尽享更多权益</view>
  </view>
</template>

<script>
  import { mapMutations,mapState } from 'vuex'
  export default {
    name:"login",
    data() {
      return {
        // form: {username:'',password:''},
        // rules: {
        //   username: {
        //     rules: [{required: true,errorMessage:'请输入用户名'}],
        //     validateTrigger:'submit'
        //   },
        //   password: {
        //     rules: [{required: true,errorMessage:'请输入密码'}],
        //     validateTrigger:'submit'
        //   }
        // }
      }
    },
      
    computed:{
      ...mapState('m_user',['userInfo','token','flag','uId']),
    },
    methods: {
      ...mapMutations('m_user',['updateUserInfo','updateToken','updateFlag','updateUId']),
      getUserProfile(){
        uni.getUserProfile({
          desc:'你的授权信息',
          success: (res) => {
           this.updateUserInfo(res.userInfo)
            console.log('11',res.userInfo);
            this.getToken(res)
             // uni.login({
             //   success: (res) => {
             //     console.log('res-login', res);
             //     this.code = res.code;
             //     console.log('code', res.code);
             //     if (res.errMsg == 'login:ok') {
             //       uni.request({
             //         url:'/api/login',
             //           data: {
             //             code: this.code,
             //           },
             //         })
             //       .then((res) => {
                   
             //       });
             //       console.log('res', res);
             //     }
             //     }
             // })
          },
          fail: (res) => {
            return uni.$showMsg('您取消了登录授权')
          }
        })
      },
      async getToken(info){
        const [err,res] = await uni.login().catch(err => err)
        if(res.errMsg !== "login:ok") return uni.$showMsg('登录失败！123')
        console.log('22',info);
        console.log('33',res);
        const query = {
          code: res.code,
          encryptedData: info.encryptedData,
          iv: info.iv,
          rawData: info.rawData,
          signature: info.signature
        }
        // const {data: loginResult} = await uni.$http.post(':8003/ucenter/wx/login',query)
        const loginResult = await this.request({
          url:'http://1.12.244.193:8021/ucenter/wx/login',
          data:{
            code: res.code,
            encryptedData: info.encryptedData,
            iv: info.iv,
            rawData: info.rawData,
            signature: info.signature
            },
            method:'POST'
          })
        // const {data: loginResult} = await uni.$http.post(`/api/ucenter/wx/login?code=${query.code}&rawData=${query.rawData}`)
        console.log('---------------',query);
        if (loginResult.code !== 200){
          return uni.$showMsg('登录失败！12')
        }else  {
          uni.switchTab({
            url:'/pages/index/index'
          })
          
        }
        
        console.log('44',loginResult);
        this.updateToken(loginResult.data.token);
this.getText()
      },
      async getText(){
        // const query = {
        //   token:loginResult.data.token
        // }
        const res= await this.request({
          url:'http://1.12.244.193:8021/ucenter/member/auth/getLoginInfo',
          header:{
            // cookie:uni.getStorageSync(token)
             'token': uni.getStorageSync('token')
          },
          method:'GET'
        })
        console.log(res);
        console.log(uni.getStorageSync('token'));
        this.updateUId(res.data.user.id)
      }
    }
  }
</script>

<style lang="scss">
.login-container{
    height: 750rpx;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #f8f8f8;
      position: relative;
      overflow: hidden;
        &::after {
          content: ' ';
          display: block;
          position: absolute;
          width: 100%;
          height: 40px;
          left: 0;
          bottom: 0;
          background-color: white;
          border-radius: 100%;
          transform: translateY(50%);
        }
        .btn-login {
            width: 90%;
            border-radius: 100px;
            margin: 15px 0;
            background-color: #177fff;
          }
        
          // 按钮下方提示消息的样式
          .tips-text {
            font-size: 12px;
            color: gray;
          }
  }
</style>

