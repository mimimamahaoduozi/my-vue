<template>
<div class="musicCon">
  <img :src="activeMusic.pic" alt="">
  <h3>{{activeMusic.title}}</h3>
  <h4>{{activeMusic.author}}</h4>
  <audio :src="activeMusic.url" controls></audio>
</div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
  name: 'musicCon',
  computed: {
    ...mapState([
      'activeMusic'
    ]),
    ...mapMutations([
      'getmusic'
    ])
  },
  mounted () {
    console.log(this.$route.params.musicid)
    this.$store.commit('getmusic', 571338279)
  }
}
</script>

<style scoped lang="less">
.musicCon{
  margin-top: 100px;
}
</style>
