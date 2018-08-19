<template>
  <div class="content">
    <div>
      <Banner></Banner>
    </div>
    <div class="main">
      <news></news>
      <active></active>
      <hot></hot>
    </div>
  </div>
</template>

<script>

import Banner from './component/banner'
import news from './component/news'
import active from './component/active'
import hot from './component/hot'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'Banner': Banner,
    'news': news,
    'active': active,
    'hot': hot
  }
}
</script>
<style scoped>
  .content{
    position: relative;
    width: 100%;
    padding-top: 640px;
    background-color: #f3f5fb;
    z-index: 10;
  }
  .main{
    width: 1240px;
    margin: 0 auto;
    z-index: 11;
  }
</style>
