<template>
    <div>
      <section class="footer">
        <section @click="gotoAddress('/')" class="footer-item" :class="{on : this.$route.path==='/'}"><i class="iconfont">&#xe603;</i>外卖</section>
        <section @click="gotoAddress('/search')" class="footer-item" :class="{on : this.$route.path==='/search'}"><i class="iconfont">&#xe602;</i>搜索</section>
        <section @click="gotoAddress('/dd')" class="footer-item" :class="{on : this.$route.path==='/dd'}"><i class="iconfont">&#xe600;</i>订单</section>
        <section @click="gotoAddress('/user')" class="footer-item" :class="{on : this.$route.path==='/user'}"><i class="iconfont">&#xe601;</i>
          我的</section>
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
  padding: .5rem 0;
  font-size: .45rem;
  background-color: #fff;
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  list-style: none;
  box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
  .footer-item{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    &.on{
      color: #007aff;
    }
  }

}

</style>
