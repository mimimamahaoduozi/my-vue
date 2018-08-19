<template>
  <div>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>
  @font-face {
    font-family: 'iconfont';  /* project id 799023 */
    src: url('//at.alicdn.com/t/font_799023_ptwhommnlq.eot');
    src: url('//at.alicdn.com/t/font_799023_ptwhommnlq.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_799023_ptwhommnlq.woff') format('woff'),
    url('//at.alicdn.com/t/font_799023_ptwhommnlq.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_799023_ptwhommnlq.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:24px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
</style>
