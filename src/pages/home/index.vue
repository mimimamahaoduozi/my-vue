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
  主页
</div>
</template>

<script>
import Header from '../../components/header/'
export default {
  name: 'home',
  components:{
    Header
  }
}
</script>

<style scoped>

</style>
