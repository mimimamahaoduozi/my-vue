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

<style lang="less">
  @import "./style/reset";
  @font-face {
    font-family: 'iconfont';  /* project id 799023 */
    src: url('//at.alicdn.com/t/font_799023_2lnbung9cez.eot');
    src: url('//at.alicdn.com/t/font_799023_2lnbung9cez.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_799023_2lnbung9cez.woff') format('woff'),
    url('//at.alicdn.com/t/font_799023_2lnbung9cez.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_799023_2lnbung9cez.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:20px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
  .clearfix:before{
    content: '';
    display: block;
    clear: both;
  }
  .clearfix:after{
    content: '';
    display: block;
    clear: both;
  }
  .contents{
    margin-top: 1.95rem;
  }
</style>
