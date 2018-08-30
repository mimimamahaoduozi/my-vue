<template>
<div>
  <Header title="燕山大学里仁学院">
    <div slot="left" class="left">
      <router-link to="/search"><i class="iconfont">&#xe602;</i></router-link>
    </div>
    <div slot="right" class="right">
      <router-link to="/user">登录/注册</router-link>
    </div>
  </Header>
  <div class="contents">
    <ul>
      <footItem
        v-for="item in bannerlists[0].entries"
        :item="item"
      ></footItem>
    </ul>
    <ul class="nav">
      <li>
        <template>
          <el-select v-model="value" placeholder="请选择" class="aaa">
            <el-option
              v-for="item in shopSort.inside_sort_filter"
              :key="item.value"
              :label="item.name"
              :value="item.name">
            </el-option>
          </el-select>
        </template>
      </li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</div>
</template>

<script>
import Header from '../../components/header/'
import {mapState} from 'vuex'
import footItem from './components/footItem'
export default {

  name: 'home',
  data () {
    return {
      show: true,
      value:''
    }
  },
  computed: {
    ...mapState([
      'bannerlists',
      'shopSort'
    ])
  },
  components: {
    Header,
    footItem
  },
  mounted () {
    this.$store.dispatch('getbanner')
    this.$store.dispatch('getSort')
  }
}
</script>

<style scoped lang="less">
.nav{
  li{
    width: 25%;
  }
}
</style>
