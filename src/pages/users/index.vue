<template>
  <div>
    <Header title="我的">
      <div slot="left">
        <i class="iconfont left" @click="goback">&#xe61c;</i>
      </div>
    </Header>
    <div>
      个人中心
    </div>
  </div>
</template>

<script>
import Header from '../../components/header/'
export default {
  name: 'index',
  components: {
    Header
  },
  methods: {
    goback () {
      this.$router.back()
    }
  }
}
</script>

<style scoped>

</style>
