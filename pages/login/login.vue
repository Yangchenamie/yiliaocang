<template>
  <view>
    <view style="width: 90%; margin: 200rpx; auto"></view>
    <view style="margin-bottom: 70rpx; font-size: 60rpx; color: royalblue; text-align: center;">登录</view>
    <uni-forms ref="form" :model="form" :rules="rules">
      <uni-forms-item name="username">
        <!-- <uni-easyinput v-model="form.username" prefixIcon="person" placeholder="请输入登录用户名"></uni-easyinput> -->
        <uni-easyinput v-model="form.username" focus placeholder="请输入登录用户名"></uni-easyinput>
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
  </view>
</template>

<script>
  
  export default {
    data() {
      return {
        form: {username:'',password:''},
        rules: {
          username: {
            rules: [{required: true,errorMessage:'请输入用户名'}],
            validateTrigger:'submit'
          },
          password: {
            rules: [{required: true,errorMessage:'请输入密码'}],
            validateTrigger:'submit'
          }
        }
      }
    },
    methods: {
      login(){
        this.$refs.form.validate().then(res=> {
          this.request({url:'/login',method:'POST',data:this.form}).then(res=>{
            if(res.code === '200') {
              console.log(res.token)
              // 跳转页面
              uni.switchTab({
                url:'/pages/index/index'
              })
              uni.showToast({
                title:'登录成功'
              })
              // 存储用户的数据到storage
              uni.setStorageSync('user',res.data)
            }
          })
        }).catch(err=> {
          console.log("error")
          console.log('表单错误信息：',err)
        })
      }
    }
  }
</script>

<style>

</style>
