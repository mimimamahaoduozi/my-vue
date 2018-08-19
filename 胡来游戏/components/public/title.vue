<template>
    <h3 class="title clearfix">
      <span>{{title}}</span>
      <router-link :to="url">more<span>+</span></router-link>
    </h3>
</template>

<script>
export default {
  name: 'title',
  props: ['title', 'url']
}
</script>

<style lang="less">
.title{
  width: 100%;
  border-left: solid 3px #FF5A27;
  position: relative;
  padding: 0 80px 0 140px;
  height: 24px;
  margin-bottom: 20px;
  &>span{
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 20px;
    font-size: 18px;
  }
  a{
    position: absolute;
    top: 0;
    right: 0;
    color: #999;
    span{
      display: inline-block;
      width: 15px;
      height: 15px;
      text-align: center;
      line-height: 15px;
      background: #FF5A27;
      border-radius: 50%;
      margin-left: 10px;
      color: #fff;
    }
  }
}
  .title:after{
    content: "";
    display: block;
    width: 100%;
    height: 12px;
    border-bottom: 1px dashed #ccc;
  }
</style>
