<template>
  <div class="hot clearfix">
    <div class="hotgame">
      <mytitle title="热门游戏" url="/"></mytitle>
      <ul>
        <gameitem
          v-for="item in items.slice(0,6)"
          :item="item"
        ></gameitem>
      </ul>
    </div>
    <div class="hom-hotlist">
      <hotlist></hotlist>
    </div>
  </div>
</template>

<script>
import hotlist from '../../../components/public/hotlist'
import mytitle from '../../../components/public/title'
import gameitem from '../../../components/public/gameitem'
import axios from 'axios'
export default {
  name: 'hot',
  components: {
    'hotlist': hotlist,
    'mytitle': mytitle,
    'gameitem': gameitem
  },
  data () {
    return {
      items: {}
    }
  },
  mounted: function () {
    axios.get('http://localhost:3000/hotgame')
      .then((res) => {
        this.items = res.data
      })
  }
}
</script>

<style scoped lang="less">
  .hot{
    width: 100%;
    padding: 20px 20px 0;
    margin-bottom: 30px;
    background-color: hsla(0,0%,100%,.8);
    .hotgame{
      width: 75%;
      float: left;
    }
    .hom-hotlist{
      width: 25%;
      float: right;
    }
  }
</style>
