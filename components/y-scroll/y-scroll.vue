<template>
  <view class="container">
    <view class="content-footer">
      <textarea name="" id="" cols="30" rows="10" placeholder="说点什么!"></textarea>
      <view class="put">
        发表
      </view>
    </view>
    <scroll-view scroll-y="true" class="scroll-y">
      <p class="total">61条评论</p>
      <!-- 一个滚动元素 -->
      <view class="scroll-items">
        <!-- 一个主评论 -->
        <view class="index-comment">
          <image src="../../static/10.jpg" mode="" class="index-img"></image>
          <view class="comment-con">
            <view class="comment-name">小鸡炖蘑菇</view>
            <view class="comment-text">视频真的好看！视频真的好看！视频真的好看！视频真的好看！</view>
            <view class="comment-bot">
              <view class="time">8小时前</view>
              <view class="callback">回复</view>
            </view>
            <!-- 该评论下的回复 -->
            <view class="reply">
              <view class="reply-items" :style="{'display':display,'height':height}">
                 <view class="items">
                   <image src="../../static/10.jpg" mode="" class="reply-img"></image>
                   <view class="reply-items-con">
                     <view class="head">
                       <view class="replycomment-name">小鸡炖蘑菇</view>
                       <view class="replywho">
                         <image src="../../static/Player, play.png" mode=""></image>
                         <p>清风拂杨柳</p>
                       </view>
                     </view>
                     <view class="replycomment-text">视频真的好看！视频真的好看！视频真的好看！视频真的好看！</view>
                     <view class="replycomment-bot">
                       <view class="replytime">8小时前</view>
                       <view class="replycallback">回复</view>
                     </view>
                   </view>
                 </view>
              </view>
              <view class="reply-title" @click="rot">
                <p class="reply-title-p" v-if="design==0">展开66条回复</p>
                <p class="reply-title-p" v-if="design==1">收回</p>
                <view class="row-box">
                  <image src="../../static/arrow-down.png" :style="{'transform':'rotate'+'('+rotate+'deg'+')'}" class="row"></image>
                </view>
              </view>
            </view> 
          </view>
        </view>
      </view>
      <view class="scroll-items">
        <view class="index-comment">
          <image src="../../static/10.jpg" mode="" class="index-img"></image>
          <view class="comment-con">
            <view class="comment-name">小鸡炖蘑菇</view>
            <view class="comment-text">视频真的好看！视频真的好看！视频真的好看！视频真的好看！</view>
            <view class="comment-bot">
              <view class="time">8小时前</view>
              <view class="callback">回复</view>
            </view>
            <!-- 该评论下的回复 -->
            <view class="reply">
              <view class="reply-items" :style="{'display':display,'height':height}">
                 <view class="items">
                   <image src="../../static/10.jpg" mode="" class="reply-img"></image>
                   <view class="reply-items-con">
                     <view class="head">
                       <view class="replycomment-name">小鸡炖蘑菇</view>
                       <view class="replywho">
                         <image src="../../static/Player, play.png" mode=""></image>
                         <p>清风拂杨柳</p>
                       </view>
                     </view>
                     <view class="replycomment-text">视频真的好看！视频真的好看！视频真的好看！视频真的好看！</view>
                     <view class="replycomment-bot">
                       <view class="replytime">8小时前</view>
                       <view class="replycallback">回复</view>
                     </view>
                   </view>
                 </view>
              </view>
              <view class="reply-title" @click="rot">
                <p class="reply-title-p" v-if="design==0">展开66条回复</p>
                <p class="reply-title-p" v-if="design==1">收回</p>
                <view class="row-box">
                  <image src="../../static/arrow-down.png" :style="{'transform':'rotate'+'('+rotate+'deg'+')'}" class="row"></image>
                </view>
              </view>
            </view> 
          </view>
        </view>
      </view>
      <view class="scroll-items">
        <view class="index-comment">
          <image src="../../static/10.jpg" mode="" class="index-img"></image>
          <view class="comment-con">
            <view class="comment-name">小鸡炖蘑菇</view>
            <view class="comment-text">视频真的好看！视频真的好看！视频真的好看！视频真的好看！</view>
            <view class="comment-bot">
              <view class="time">8小时前</view>
              <view class="callback">回复</view>
            </view>
            <!-- 该评论下的回复 -->
            <view class="reply">
              <view class="reply-items" :style="{'display':display,'height':height}">
                 <view class="items">
                   <image src="../../static/10.jpg" mode="" class="reply-img"></image>
                   <view class="reply-items-con">
                     <view class="head">
                       <view class="replycomment-name">小鸡炖蘑菇</view>
                       <view class="replywho">
                         <image src="../../static/Player, play.png" mode=""></image>
                         <p>清风拂杨柳</p>
                       </view>
                     </view>
                     <view class="replycomment-text">视频真的好看！视频真的好看！视频真的好看！视频真的好看！</view>
                     <view class="replycomment-bot">
                       <view class="replytime">8小时前</view>
                       <view class="replycallback">回复</view>
                     </view>
                   </view>
                 </view>
              </view>
              <view class="reply-title" @click="rot">
                <p class="reply-title-p" v-if="design==0">展开66条回复</p>
                <p class="reply-title-p" v-if="design==1">收回</p>
                <view class="row-box">
                  <image src="../../static/arrow-down.png" :style="{'transform':'rotate'+'('+rotate+'deg'+')'}" class="row"></image>
                </view>
              </view>
            </view> 
          </view>
        </view>
      </view>
      <view class="scroll-items">
        <view class="index-comment">
          <image src="../../static/10.jpg" mode="" class="index-img"></image>
          <view class="comment-con">
            <view class="comment-name">小鸡炖蘑菇</view>
            <view class="comment-text">视频真的好看！视频真的好看！视频真的好看！视频真的好看！</view>
            <view class="comment-bot">
              <view class="time">8小时前</view>
              <view class="callback">回复</view>
            </view>
            <!-- 该评论下的回复 -->
            <view class="reply">
              <view class="reply-items" :style="{'display':display,'height':height}">
                 <view class="items">
                   <image src="../../static/10.jpg" mode="" class="reply-img"></image>
                   <view class="reply-items-con">
                     <view class="head">
                       <view class="replycomment-name">小鸡炖蘑菇</view>
                       <view class="replywho">
                         <image src="../../static/Player, play.png" mode=""></image>
                         <p>清风拂杨柳</p>
                       </view>
                     </view>
                     <view class="replycomment-text">视频真的好看！视频真的好看！视频真的好看！视频真的好看！</view>
                     <view class="replycomment-bot">
                       <view class="replytime">8小时前</view>
                       <view class="replycallback">回复</view>
                     </view>
                   </view>
                 </view>
              </view>
              <view class="reply-title" @click="rot">
                <p class="reply-title-p" v-if="design==0">展开66条回复</p>
                <p class="reply-title-p" v-if="design==1">收回</p>
                <view class="row-box">
                  <image src="../../static/arrow-down.png" :style="{'transform':'rotate'+'('+rotate+'deg'+')'}" class="row"></image>
                </view>
              </view>
            </view> 
          </view>
        </view>
      </view>
      <view class="scroll-items">
        <view class="index-comment">
          <image src="../../static/10.jpg" mode="" class="index-img"></image>
          <view class="comment-con">
            <view class="comment-name">小鸡炖蘑菇</view>
            <view class="comment-text">视频真的好看！视频真的好看！视频真的好看！视频真的好看！</view>
            <view class="comment-bot">
              <view class="time">8小时前</view>
              <view class="callback">回复</view>
            </view>
            <!-- 该评论下的回复 -->
            <view class="reply">
              <view class="reply-items" :style="{'display':display,'height':height}">
                 <view class="items">
                   <image src="../../static/10.jpg" mode="" class="reply-img"></image>
                   <view class="reply-items-con">
                     <view class="head">
                       <view class="replycomment-name">小鸡炖蘑菇</view>
                       <view class="replywho">
                         <image src="../../static/Player, play.png" mode=""></image>
                         <p>清风拂杨柳</p>
                       </view>
                     </view>
                     <view class="replycomment-text">视频真的好看！视频真的好看！视频真的好看！视频真的好看！</view>
                     <view class="replycomment-bot">
                       <view class="replytime">8小时前</view>
                       <view class="replycallback">回复</view>
                     </view>
                   </view>
                 </view>
              </view>
              <view class="reply-title" @click="rot">
                <p class="reply-title-p" v-if="design==0">展开66条回复</p>
                <p class="reply-title-p" v-if="design==1">收回</p>
                <view class="row-box">
                  <image src="../../static/arrow-down.png" :style="{'transform':'rotate'+'('+rotate+'deg'+')'}" class="row"></image>
                </view>
              </view>
            </view> 
          </view>
        </view>
      </view>
      <view class="scroll-items">
        <view class="index-comment">
          <image src="../../static/10.jpg" mode="" class="index-img"></image>
          <view class="comment-con">
            <view class="comment-name">小鸡炖蘑菇</view>
            <view class="comment-text">视频真的好看！视频真的好看！视频真的好看！视频真的好看！</view>
            <view class="comment-bot">
              <view class="time">8小时前</view>
              <view class="callback">回复</view>
            </view>
            <!-- 该评论下的回复 -->
            <view class="reply">
              <view class="reply-items" :style="{'display':display,'height':height}">
                 <view class="items">
                   <image src="../../static/10.jpg" mode="" class="reply-img"></image>
                   <view class="reply-items-con">
                     <view class="head">
                       <view class="replycomment-name">小鸡炖蘑菇</view>
                       <view class="replywho">
                         <image src="../../static/Player, play.png" mode=""></image>
                         <p>清风拂杨柳</p>
                       </view>
                     </view>
                     <view class="replycomment-text">视频真的好看！视频真的好看！视频真的好看！视频真的好看！</view>
                     <view class="replycomment-bot">
                       <view class="replytime">8小时前</view>
                       <view class="replycallback">回复</view>
                     </view>
                   </view>
                 </view>
              </view>
              <view class="reply-title" @click="rot">
                <p class="reply-title-p" v-if="design==0">展开66条回复</p>
                <p class="reply-title-p" v-if="design==1">收回</p>
                <view class="row-box">
                  <image src="../../static/arrow-down.png" :style="{'transform':'rotate'+'('+rotate+'deg'+')'}" class="row"></image>
                </view>
              </view>
            </view> 
          </view>
        </view>
      </view>
      <view class="scroll-items">
        <view class="index-comment">
          <image src="../../static/10.jpg" mode="" class="index-img"></image>
          <view class="comment-con">
            <view class="comment-name">小鸡炖蘑菇</view>
            <view class="comment-text">视频真的好看！视频真的好看！视频真的好看！视频真的好看！</view>
            <view class="comment-bot">
              <view class="time">8小时前</view>
              <view class="callback">回复</view>
            </view>
            <!-- 该评论下的回复 -->
            <view class="reply">
              <view class="reply-items" :style="{'display':display,'height':height}">
                 <view class="items">
                   <image src="../../static/10.jpg" mode="" class="reply-img"></image>
                   <view class="reply-items-con">
                     <view class="head">
                       <view class="replycomment-name">小鸡炖蘑菇</view>
                       <view class="replywho">
                         <image src="../../static/Player, play.png" mode=""></image>
                         <p>清风拂杨柳</p>
                       </view>
                     </view>
                     <view class="replycomment-text">视频真的好看！视频真的好看！视频真的好看！视频真的好看！</view>
                     <view class="replycomment-bot">
                       <view class="replytime">8小时前</view>
                       <view class="replycallback">回复</view>
                     </view>
                   </view>
                 </view>
              </view>
              <view class="reply-title" @click="rot">
                <p class="reply-title-p" v-if="design==0">展开66条回复</p>
                <p class="reply-title-p" v-if="design==1">收回</p>
                <view class="row-box">
                  <image src="../../static/arrow-down.png" :style="{'transform':'rotate'+'('+rotate+'deg'+')'}" class="row"></image>
                </view>
              </view>
            </view> 
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
  export default {
    name:"y-scroll",
    data() {
      return {
        rotate:0,
        flag: 1,
        design:0,
        height:0+'rpx',
        display:'none'
        //180
      };
    },
    methods: {
      rot() {
        if(this.flag) {
          this.height = 0+'rpx'
          this.rotate = 0
          this.display = 'none'
          this.design = 0
        }else {
          // this.height = 400
          this.height = 'auto'
          this.rotate = -180
          this.display = 'block'
          this.design = 1
        }
        this.flag = !this.flag
      },
    }
  }
</script>

<style scoped>
.scroll-y {
  width: 710rpx;
  height: 1000rpx;
}
.scroll-items {
  padding: 20rpx;
}
.total {
  text-align: center;
  font-size: 24rpx;
}
.index-comment .index-img {
  width: 80rpx;
  height: 80rpx;
  margin-right: 20rpx;
  border-radius: 50%;
}
.index-comment {
  display: flex;
}
.comment-con .comment-bot,.reply-items-con .replycomment-bot {
  display: flex;
  margin-top: 10rpx;
}
.comment-con .comment-name,.reply-items-con .replycomment-name {
  font-size: 28rpx;
  /* width: 200rpx; */
  margin-bottom: 10rpx;
  color: #828282;
}
.comment-con .comment-bot .time,.reply-items-con .replycomment-bot .replytime {
  font-size: 28rpx;
  margin-right: 30rpx;
  color: #a8a8a8;
}
.comment-con .comment-bot .callback,.reply-items-con .replycomment-bot .replycallback {
  font-size: 28rpx;
  color: #b1b1b1;
}
.comment-con .comment-text {
  width: 550rpx;
}

.reply-items-con {
  width: 400rpx;
}
.reply-items-con .replycomment-text {
  width: 500rpx;
}
.reply .reply-title {
  position: relative;
}
.reply .reply-title::before {
  position: absolute;
  content: '';
  width: 50rpx;
  height: 2rpx;
  left: 0rpx;
  top: 20rpx;
  background-color: #a8a8a8;
}
.reply .reply-title .reply-title-p {
  margin-left: 70rpx;
  font-size: 28rpx;
  color: #919191;
}
.reply .row-box {
  width: 40rpx;
  height: 40rpx;
}
.reply .row-box .row {
  width: 40rpx;
  transition: all 0.5s; 
  height: 40rpx;
}
.reply-title {
  display: flex;
}
.reply .reply-img {
  width: 50rpx;
  height: 50rpx;
  margin-right: 20rpx;
  border-radius: 50%;
}
.reply .reply-items {
  display: flex;
  margin-top: 20rpx;
}
.items {
  display: flex;
}
.replywho image {
  width: 40rpx;
  height: 40rpx;
}
.replywho {
  display: flex;
}
.replywho p {
  font-size: 28rpx;
  color: #828282;
}
.head {
  display: flex;
}
.content-footer {
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 66;
  border-top: 4rpx solid #fafafa;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 130rpx;
  background-color: #ffffff;
  /* box-shadow:0 0 10rpx 5rpx rgba(0,0,0,0.1); */
}
.content-footer textarea {
  width: 500rpx;
  height: 60rpx;
  padding: 10rpx;
  border-radius: 20rpx;
  background-color: #f3f3f3;
}
.put {
  width: 150rpx;
  height: 60rpx;
  text-align: center;
  line-height: 60rpx;
  color: #ffffff;
  border-radius: 20rpx;
  background-color: #2180f8;
}
</style>