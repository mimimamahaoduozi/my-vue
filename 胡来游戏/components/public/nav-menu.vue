<template>
    <ul class="menu clearfix">
      <div class="menu-top"></div>
      <item
        v-bind:src="img.img"
        v-bind:title="img.title"
        v-for="img in imgs"
      ></item>
    </ul>
</template>

<script>
import item from './item'
const img = require.context('../../assets/nav', true, /^\.\/.*(\.png|\.jpg|\.gif)$/)
const imgs = img.keys().map(img)
console.log(imgs)
export default {
  name: 'Menu',
  components: {
    item
  },
  data: function () {
    return {
      imgs: {
        '0': {img: imgs[0], title: '胡莱三国2'},
        '1': {img: imgs[1], title: '豪门足球风云'},
        '2': {img: imgs[2], title: '勇者大作战'},
        '3': {img: imgs[3], title: '合战三国'},
        '4': {img: imgs[4], title: '元气封神'}
      }

    }
  }
}
</script>

<style scoped lang="less">

</style>
