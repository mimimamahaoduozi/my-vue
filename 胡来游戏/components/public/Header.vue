<template>
    <div>
      <div class="header">
        <div class="header-main">
          <div class="header-logo">
            <router-link to="/"><img src="../../assets/header-logo.png" alt=""></router-link>
          </div>
          <div class="header-nav">
            <ul class="clearfix">
              <li><router-link to="/">官网首页</router-link></li>
              <li @mouseenter="show = !show" @mouseleave="show = !show">
                <router-link to="/List" >游戏列表</router-link>
                <Menu v-show="show"></Menu>
              </li>
              <li><router-link to="/Active">热门活动</router-link></li>
              <li><router-link to="/About">关于胡莱</router-link></li>
            </ul>
          </div>
          <div class="header-user">
            <div class="notlog">
              <router-link to="/login">登录</router-link>|
            </div>
            <div class="zhuce">
              <router-link to="/zhuce">注册</router-link>
            </div>
          </div>
        </div>
      </div>

    </div>

</template>

<style lang="less">
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
  .header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background-color: rgba(0,0,0,.8);
    z-index: 1000;
  }
  .header-main{
    width: 1240px;
    height: 100%;
    margin: 0 auto;
  }
  .clearfix:after{
    content: '';
    display: block;
    clear: both;
  }
  .header-nav>ul {
    li {
      float: left;
      list-style: none;
      line-height: 100px;
      position: relative;
      a {
        color: #fff;
        padding: 0 30px;
        text-decoration: none;
        display: block;
      }
      .menu{
        /*display: none;*/
        position: absolute;
        top: 100%;
        left: -575px;
        width: 1000px;
        height: 365px;
        border-bottom: 5px solid #ff5a27;
        border-radius: 0 0 5px 5px;
        background-color: #fcf1ed;
        padding: 0 40px;
        .menu-top{
          width: 100%;
          height: 45px;
          border-bottom: solid 1px #d1dbe5;
          margin-bottom: 15px;
        }
        li.menu-item{
          width:20%;
          padding: 0 15px;
          float: left;
          text-align: center;
          line-height: 1.5em;
          a{
            padding: 0;
            color: #333;
            div{
              height: 240px;
              background: #fff;
              img{
                width: 100%;
              }
            }
            .toguanwang{
              margin-top: 20px;
              display: block;
              color: #999;
            }
          }
        }
      }
    }
    &>li:before{
      content: "";
      position: absolute;
      width: 100%;
      height: 80px;
      top: 20px;
      left: 0;
      display: none;
      background-color: #fff;
    }
    &>li>a:hover{
      color: #ff5a27;
    }
  }
    .header-logo{
      float: left;
      width: 240px;
      height: 100%;
      padding: 18px 0;
      margin-right: 210px;
      img {
        width: 100%;
      }
    }
  .header-nav{
    float: left;
  }
  .header-user{
    height: 100%;
    line-height: 100px;
    float: right;
    div{
      float: left;
      color: #fff;
      a{
        color: #fff;
        padding: 0 20px;
        font: normal 14px/1.5 Microsoft YaHei,simhei;
      }
    }
  }
</style>

<script>
import Menu from './nav-menu'
export default {
  name: 'Header',
  data: function () {
    return {
      show: false
    }
  },
  components: {
    Menu
  }
}
</script>
