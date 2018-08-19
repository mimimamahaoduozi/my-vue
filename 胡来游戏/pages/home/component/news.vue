<template>
  <div class="news clearfix">
    <div class="news-left">
      <div v-for="item in news.left" :class="item.className" class="col">
        <img :src="item.bgimg" alt="">
      </div>
    </div>
    <div class="news-right">
      <h4><span>热点资讯</span><router-link to="news">+</router-link></h4>
      <ul class="news-list">
        <li
          v-for="item in news.right"
        >
          <router-link to="/">{{item.con}}</router-link><span>{{item.date}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import news from '../../../store/news'

console.log(news)
export default {
  name: 'news',
  data: function () {
    return {
      news
    }
  }
}
</script>

<style scoped lang="less">
  .news{
    width: 100%;
    padding: 20px 20px 0;
    margin-bottom: 30px;
    background-color: hsla(0,0%,100%,.8);
    .news-left{
      float: left;
      width: 743px;
      margin-left: -10px;
      margin-right: -10px;
      .col{
        float: left;
        padding-left: 10px;
        padding-right: 10px;
        margin-bottom: 20px;
        overflow: hidden;
        img{
          vertical-align: middle;
        }
      }
      .col-mini{
        width: 33%;
      }
      .col-max{
        width: 66%;
      }
    }
    .news-right{
      float: right;
      width: 437px;
      height: 381px;
      padding: 0 20px;
      margin-bottom: 20px;
      background-color: #282a2d;
      h4{
        font-size: 24px;
        color: #FF5A27;
        font-weight: lighter;
        line-height: 45px;
        border-bottom: solid 1px #42474A;
        position: relative;
        a{
          display: inline-block;
          width: 40px;
          height: 40px;
          position: absolute;
          top: 0;
          right: -20px;
          line-height: 24px;
          padding-left: 16px;
          text-align: center;
          z-index: 10;
          color: #fff;
        }
        a:after{
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          z-index: -1;
          display: block;
          width: 0;
          height: 0;
          border-width: 20px;
          border-color: #ff5a27 #ff5a27 transparent transparent;
          border-style: solid solid dashed dashed;
        }
      }
      ul{
        li{
          position: relative;
          width: 100%;
          height: 46px;
          padding-left: 18px;
          line-height: 46px;
          font-size: 14px;
          cursor: pointer;
          a{
            display: inline-block;
            max-width: 80%;
            color: #fff;
            opacity: .8;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          span{
            display: inline-block;
            color: #999;
            float: right;
          }
        }
        li:before{
          content: "";
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #fff;
          position: absolute;
          top: 50%;
          left: 4px;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
        }
      }
    }
  }
</style>
