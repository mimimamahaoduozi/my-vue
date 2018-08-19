<template>
  <div class="banner">
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
      <!-- slides -->
      <swiper-slide
        v-for="item in banner.state"
        v-bind:style="{ 'background-image': 'url(' + item.bgimg + ')'}"
      >
        <div class="banneritem">
          <img :src="item.logoimg" alt="">
          <!--<img :src="item.conimg" alt="">-->
          <h1>{{item.title}}</h1>
          <h1>{{item.con}}</h1>
          <p></p>
          <img src="../../../assets/banner/icon/linkToMore.png">
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>

  </div>

</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import banner from '../../../store/banner'
console.log(banner.state)

export default {
  components: {
    swiper,
    swiperSlide
  },
  data: function () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: true,
        effect: 'fade',
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination'
        }
      },
      banner
    }
  }
}
</script>

<style scoped lang="less">
  .banner{
    position: absolute;
    top: 0;
    width: 100%;
    height: 1675px;
    z-index: -1;
  }
  .swiper-button-next{
    top: 280px;
    width: 48px;
    height: 80px;
    background-size: 48px 80px;
    border-radius: 0;
    opacity: .3;
    background-image: url("../../../assets/banner/icon/next.png");
  }
  .swiper-button-prev{
    top: 280px;
    width: 48px;
    height: 80px;
    background-size: 48px 80px;
    border-radius: 0;
    opacity: .3;
    background-image: url("../../../assets/banner/icon/prv.png");
  }
  .swiper-pagination{
    bottom: 1060px;
  }
  .swiper-pagination>span.swiper-pagination-bullet{
    display: block;
    background: #fc5c33;
    border: 2px solid #fff;
    width: 16px;
    height: 16px;
  }
  .swiper-slide{
    background-position: top;
    padding-top: 100px;
    .banneritem{
      margin: 0 auto;
      width: 1240px;
      padding: 65px 90px 0 650px;
      h1{
        font: normal 48px/66px Microsoft YaHei,simhei;
        font-weight: 700;
      }
      p{
        margin-top: 10px;
        padding: 20px 0;
        border-top: 1px solid #070707;
        font: normal 18px/30px Microsoft YaHei,simhei;
      }
    }
  }
  .swiper-container{
    height: 1675px;
  }

</style>
