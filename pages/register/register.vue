<template>
  <view>
    <view style="width: 90%; margin: 200rpx; auto"></view>
    <view style="margin-bottom: 70rpx; font-size: 60rpx; color: #F0AD4E; text-align: center;">注 册</view>
    <uni-forms ref="form" :model="form" :rules="rules">
      <uni-forms-item name="username">
        <!-- <uni-easyinput v-model="form.username" prefixIcon="person" placeholder="请输入登录用户名"></uni-easyinput> -->
        <uni-easyinput v-model="form.username" focus placeholder="请输入用户名"></uni-easyinput>
        		</uni-section>

      </uni-forms-item>
      <uni-forms-item name="password">
        <uni-easyinput type="password" v-model="form.password" prefixIcon="locked" placeholder="请输入密码"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="confirm">
        <uni-easyinput type="password" v-model="form.confirm" prefixIcon="locked" placeholder="请确认密码"></uni-easyinput>
      </uni-forms-item>
    </uni-forms>
    <view>
      <button type="primary" @click="register">注 册</button>
    </view>
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
          },
          confirm: {
            rules: [{required: true,errorMessage:'请确认密码'}],
            validateTrigger:'submit'
          }
        }
      }
    },
    methods: {
      register() {
        this.$refs.form.validate().then(res=> {
          if(this.form.password !== this.form.confirm) {
            uni.showToast({
              icon:"none",
              title:'俩次密码输入不一致'
            })
            return
          }
          this.request({url:'/register',method:'POST',data:this.form}).then(res=> {
            if(res.code === '200') {
              // 跳转页面
              uni.navigateTo({
                url:'/pages/login/login'
              })
              uni.showToast({
                title:'注册成功'
              })
            }
          }).catch(err=> {
            console.log('表单的错误：',err)
          })
        })
      }
    }
  }
</script>

<style>

</style>
