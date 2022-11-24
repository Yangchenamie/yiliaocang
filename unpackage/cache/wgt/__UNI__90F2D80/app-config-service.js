
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/people/people","pages/benefits/benefits","pages/management/management","pages/lecture/lecture","pages/lectureDetails/lectureDetails","pages/writeOffList/writeOffList","pages/orderWriteOff/orderWriteOff","pages/memberRecharge/memberRecharge","pages/classification/classification","pages/commodityInfo/commodityInfo","pages/testAppointment/testAppointment","pages/physicalList/physicalList","pages/physicalInfo/physicalInfo","pages/time/time","pages/detail/detail","pages/listInquiries/listInquiries","pages/listPrescriptions/listPrescriptions","pages/drugDetails/drugDetails","pages/login/login","pages/register/register","pages/collection/collection","pages/userLogin/userLogin","pages/payment/payment","pages/cart/cart","pages/consultation/consultation","pages/allcomments/allcomments","pages/address/address"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#818181","selectedColor":"#0057c8","list":[{"text":"首页","pagePath":"pages/index/index","iconPath":"static/home.png","selectedIconPath":"static/home-active.png"},{"text":"购物车","pagePath":"pages/cart/cart","iconPath":"static/cart- full.png","selectedIconPath":"static/cart-active.png"},{"text":"咨询","pagePath":"pages/listInquiries/listInquiries","iconPath":"static/Consultation.png","selectedIconPath":"static/Consultation-active.png"},{"text":"个人中心","pagePath":"pages/people/people","iconPath":"static/people.png","selectedIconPath":"static/people-active.png"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"Medical-Warehouse-app","compilerVersion":"3.6.4","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","navigationBarBackgroundColor":"#177fff"}},{"path":"/pages/people/people","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#177fff"}},{"path":"/pages/benefits/benefits","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/management/management","meta":{},"window":{"navigationBarTitleText":"我的订单","enablePullDownRefresh":false}},{"path":"/pages/lecture/lecture","meta":{},"window":{"navigationBarTitleText":"医生讲座","enablePullDownRefresh":false}},{"path":"/pages/lectureDetails/lectureDetails","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/writeOffList/writeOffList","meta":{},"window":{"navigationBarTitleText":"核销列表","enablePullDownRefresh":false}},{"path":"/pages/orderWriteOff/orderWriteOff","meta":{},"window":{"navigationBarTitleText":"订单核销","enablePullDownRefresh":false}},{"path":"/pages/memberRecharge/memberRecharge","meta":{},"window":{"navigationBarTitleText":"会员充值","enablePullDownRefresh":false}},{"path":"/pages/classification/classification","meta":{},"window":{"navigationBarTitleText":"分类","enablePullDownRefresh":false}},{"path":"/pages/commodityInfo/commodityInfo","meta":{},"window":{"navigationBarTitleText":"药品详情","enablePullDownRefresh":false}},{"path":"/pages/testAppointment/testAppointment","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#177fff"}},{"path":"/pages/physicalList/physicalList","meta":{},"window":{"navigationBarTitleText":"体检列表","enablePullDownRefresh":false}},{"path":"/pages/physicalInfo/physicalInfo","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/time/time","meta":{},"window":{"navigationBarTitleText":"预约时间","enablePullDownRefresh":false}},{"path":"/pages/detail/detail","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/listInquiries/listInquiries","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"咨询列表","enablePullDownRefresh":false}},{"path":"/pages/listPrescriptions/listPrescriptions","meta":{},"window":{"navigationBarTitleText":"处方列表","enablePullDownRefresh":false}},{"path":"/pages/drugDetails/drugDetails","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#177fff"}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/register/register","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/collection/collection","meta":{},"window":{"navigationBarTitleText":"收藏","enablePullDownRefresh":false}},{"path":"/pages/userLogin/userLogin","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/payment/payment","meta":{},"window":{"navigationBarTitleText":"支付","navigationBarBackgroundColor":"#efeef4","enablePullDownRefresh":false}},{"path":"/pages/cart/cart","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/consultation/consultation","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/allcomments/allcomments","meta":{},"window":{"navigationBarTitleText":"评论","enablePullDownRefresh":false}},{"path":"/pages/address/address","meta":{},"window":{"navigationBarTitleText":"我的收货地址","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
