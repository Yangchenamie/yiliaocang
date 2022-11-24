import {mapGetters} from 'vuex'
export default{
  
    computed:{
      ...mapGetters('m_cart',['total'])
    },
    watch:{
      total:{
      handler(newVal){

          this.setBadge()

      },
      immediate:true
      }
    },
    onShow() {
        // 在页面刚展示的时候，设置数字徽标
        console.log('total',this.total);

          this.setBadge()

      },
    methods: {
      
      setBadge(){
        console.log('11',this.total);
        if(this.total > 0){
          uni.setTabBarBadge({
          index:1,
          
          text:this.total + '' // 注意：text 的值必须是字符串，不能是数字
        })
        }else{
          uni.removeTabBarBadge({
            index:1,
            text:""
          })
        }
        
      }
    }
  
}