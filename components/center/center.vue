<template>
  <view class="content">
    <myInfo></myInfo>
    <deliveryOrder></deliveryOrder>
    <reservationOrder></reservationOrder>
    <register></register>
    <otherFunctions></otherFunctions>
  </view>
</template>

<script>
  import deliveryOrder from '../../components/deliveryOrder/deliveryOrder.vue'
  import reservationOrder from '../../components/reservationOrder/reservationOrder.vue'
  import register from '../../components/register/register.vue'
  import otherFunctions from '../../components/otherFunctions/otherFunctions.vue'
  import myInfo from '../../components/my-info/my-info.vue'
  export default {
    name:"center",
    data() {
      return {
        
      };
    },
    methods: {
      
    },
    components:{
      deliveryOrder,reservationOrder,register,otherFunctions,myInfo
    }
  }
</script>

<style>
@import url("../../util/css/common.css");
body {
  background-color: #fdfdfd;
}
</style>