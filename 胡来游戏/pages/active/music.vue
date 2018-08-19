<template>
  <div class="active">
    <ul class="items">
      <li
        v-if="music.has"
        v-for="item in music.msg.songs.slice(0,5)"
      >
        <router-link :to="/Active/+item.id">
          <img :src="item.pic" alt="">
          <h3>{{item.title}}</h3>
          <h4>{{item.author}}</h4>
          <audio :src="item.url" controls></audio>
        </router-link>
      </li>

    </ul>
  </div>
</template>

<script>
import { mapState, mapActions} from 'vuex'

export default {
  computed: {
    ...mapState([
      'music'
    ]),
    ...mapActions([
      'getMineBaseApi'
    ])
  },
  mounted () {
    // let self = this
    if (this.$store.state.music.has === 0) {
      this.$store.dispatch('getMineBaseApi')
    }
  }
}
</script>

<style scoped lang="less">
.active{
  margin-top: 100px;
  .items{
    li{
      width: 200px;
      img{
        width: 100%;
      }
    }
  }
}
</style>
