<template>
<div class="header clearfix">
  <slot name="left" class="left"></slot>
  <div class="middle">{{title}}</div>
  <slot name="right" class="right"></slot>
</div>
</template>

<script>
export default {
  name: 'header',
  props: ['title']
}
</script>

<style lang="less" scoped>
  .header{
    font-size: .8rem;
    background-color: #3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 1.95rem;
    line-height: 1.95rem;
    color: #fff;
    position: relative;
   .middle{
     left: 25%;
     width:50%;
     position: absolute;
     text-align: center;
   }
    .left{
      left: .8rem;
      width: 0.9rem;
      height: 0.9rem;
      position: absolute;
    }
    .right{
      right: 0.55rem;
      position: absolute;
    }
  }

</style>
