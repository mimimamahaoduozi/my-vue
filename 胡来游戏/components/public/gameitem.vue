<template>
    <li class="hotGameItem">
      <div class="gametop">
        <img :src="item.img">
        <div class="gamebg">
          <img :src="item.QRcode">
          <router-link :to="item.url">进入官网</router-link>
        </div>
      </div>
      <div class="gamebuttom">
        <router-link :to="item.url"><h3>{{item.title}}</h3></router-link>
        <p>{{item.con}}</p>
      </div>

    </li>
</template>

<script>
export default {
  name: 'game',
  props: {
    item: Object
  }
}
</script>

<style scoped lang="less">
.hotGameItem{
  display: inline-block;
  padding: 0 10px;
  margin-bottom: 20px;
  height: 300px;
  width: 33.33333%;
  overflow: hidden;
  .gametop{
    overflow: hidden;
    height: 180px;
    img{
      display: block;
    }
    .gamebg{
      width: 100%;
      height: 100%;

      -webkit-transition: transform .3s;
      -moz-transition: transform .3s;
      -ms-transition: transform .3s;
      -o-transition: transform .3s;
      transition: transform .3s;
      position: relative;
      background-color: rgba(0,0,0,0.7);
      display: flex;
      padding: 40px 25px;
      img{
        width: 100px;
      }
      a{
        color: #fff;
        border: solid 1px #fff;
        border-radius: 10px;
        width: 40%;
        height: 38px;
        text-align: center;
        line-height: 38px;
        margin: 30px 0 0 30px;
      }
      a:hover{
        background-color: #ff5a27;
        border-color: #ff5a27;
      }
    }
  }
  .gametop:hover .gamebg{
    transform: translateY(-180px);
  }
  .gamebuttom{
    background-color: #f6f7f9;
    padding: 10px 25px;
    h3{
      font-size: 20px;
      color: #333;
      margin-bottom: 20px;
    }
    p{
      color: #999;
      word-break:break-all;
      display:-webkit-box;
      -webkit-line-clamp:2;
      -webkit-box-orient:vertical;
      overflow:hidden;
    }
  }
}
</style>
