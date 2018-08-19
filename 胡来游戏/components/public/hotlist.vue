<template>
    <ul class="hotlists">
      <h3 class="listtitle">热门游戏</h3>
      <li
        v-for="list in lists"
        class="list"
      >
        <img :src="list.img" alt="">
        <h3>{{list.title}}</h3>
        <p>{{list.con}}</p>
        <a href="#">></a>
      </li>
    </ul>
</template>

<script>
import axios from 'axios'
export default {
  name: 'hotlist',
  data: function () {
    return {
      lists: {}
    }
  },
  mounted: function () {
    let self = this
    axios.get('http://localhost:3000/hotlist', {
      headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
      .then((res) => {
        self.lists = res.data
      })
  }
}
</script>

<style scoped lang="less">
.hotlists{
  padding: 0 10px;
  &>h3{
    position: relative;
    width: 100%;
    height: 24px;
    margin-bottom: 20px;
    display: inline-block;
    font: normal 24px/24px Microsoft YaHei,simhei;
    padding: 0 24px 0 12px;
    border-left: 4px solid #ff5a27;
  }
  .list{
    display: inline-block;
    position: relative;
    width: 100%;
    height: 124px;
    padding: 22px 40px 22px 112px;
    img{
      position: absolute;
      top: 15px;
      left: 20px;
    }
    h3{
      font: normal 18px/40px Microsoft YaHei,simhei;
    }
    p{
      font: normal 14px/30px Microsoft YaHei,simhei;
      color: #999;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    a{
      font-size: 38px;
      position: absolute;
      top: 29px;
      right: 0;
    }
  }
}
</style>
