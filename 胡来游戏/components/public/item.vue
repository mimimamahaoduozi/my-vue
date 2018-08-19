<template>
  <li class="menu-item">
  <router-link to="/youxi">
    <div>
      <img v-bind:src='src' alt=""><br>
      <span>{{title}}</span>
    </div>
    <span class="toguanwang">进入官网</span>
  </router-link>
</li>
</template>

<script>
export default {
  name: 'item',
  props: ['src', 'title']
}
</script>

<style scoped lang="less">

</style>
