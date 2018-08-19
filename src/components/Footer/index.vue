<template>
    <div>
      <section class="footer">
        <section @click="gotoAddress('/')" class="footer-item">外卖</section>
        <section @click="gotoAddress('/search')" class="footer-item">搜索</section>
        <section @click="gotoAddress('/dd')" class="footer-item">订单</section>
        <section @click="gotoAddress('/user')" class="footer-item">我的</section>
      </section>
    </div>
</template>

<script>
export default {
  name: 'index',
  methods: {
    gotoAddress (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped lang="less">
.footer{
  background-color: #fff;
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  list-style: none;
  .footer-item{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

</style>
