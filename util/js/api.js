// // 配置域名
// const BASE_URL = 'http://192.168.188.138'
// export const myRequest = (options)=> {
//   return new Promise((resolve, reject) => {
//     uni.request({
//       url:BASE_URL+options.url,
//       method:options.method || 'GET',
//       data:options.data || {},
//       success:(res)=> {
//         // if(res.statusCode !=200) {
//         //   return uni.showToast({
//         //     title:'获取数据失败！'
//         //   })
//         // }
//         resolve(res)
//       },
//       fail:(err)=> {
//         uni.showToast({
//           title:'获取数据失败！'
//         })
//         reject(err)
//       }
//     })
//   })
// }

// const BASE_URL = `http://192.168.188.138:8080`
// const BASE_URL = `http://192.168.2.117`
// const BASE_URL = `http://192.168.50.87`
export const request = (options) => {
  return new Promise((resolve,reject) => {
    uni.request({
      url:options.url,
      method:options.method || 'GET',
      // header:{token:uni.getStorageSync('user')?uni.getStorageSync('user').token:'',
      // "Access-Control-Allow-Origin":"*"},
      header:options.header,
      data:options.data || {},
      success: (res) => {
        const data = res.data
        console.log(data)
        if(data.code === '401') {
          uni.navigateTo({
            url:'/pages/login/login.vue'
          })
          return 
        }else if(res.code=='200') {
          uni.showToast({
            icon:'error',
            title:'操作错误'
          })
        }
        resolve(data)
      },
      fail: (error) => {
        uni.showToast({
          icon:'error',
          title:'系统错误'
        })
        reject(error)
      }
    })
  })
}
