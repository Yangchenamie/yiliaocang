<template>
  <view class="conntion">
    <view class="my-settle-container">
        <!-- 全选 -->
        <label class="radio" @click="changeAllState">
          <radio color="#177fff" :checked="isFullCheck" /><text>全选</text>
        </label>
    
        <!-- 合计 -->
        <view class="amount-box">
          合计:<text class="amount">￥{{checkedGoodsAmount}}</text>
        </view>
    
        <!-- 结算按钮 -->
        <view class="btn-settle" @click="settlement">结算({{checkedCount}})</view>
      </view>
  </view>
</template>

<script>
    import { mapState,mapMutations,mapGetters } from 'vuex'
  export default {
    name:"settle",
    computed:{
        ...mapGetters('m_cart',['checkedCount','total','checkedGoodsAmount']),
        ...mapGetters('m_user',['addstr']),
        ...mapState('m_user',['token']),
        isFullCheck(){
          return this.total === this.checkedCount
        }
      },
      data() {
        return {
          
        };
      },
      methods:{
        ...mapMutations('m_cart',['updateAllGoodsState']),
        changeAllState(){
          this.updateAllGoodsState(!this.isFullCheck)
        },
        settlement(){
          if(!this.checkedCount) return uni.$showMsg('请选择要结算的商品！')
          uni.navigateTo({
            url:'../../pages/payment/payment'
          })
        }
      },
      components:{
        
      }
  }
</script>

<style lang="scss">
  .conntion{
    height: 100rpx;
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
        background-color: #177fff;
        height: 50px;
        color: white;
        line-height: 50px;
        padding: 0 10px;
        min-width: 100px;
        text-align: center;
      }
    }
</style>