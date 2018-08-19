<template>
    <div class="active">
      <div class="activeTitle clearfix">
        <mytitle title="最热活动" url="/aaa"></mytitle>
        <div
          v-for="(active,key) in actives"
          class="activecon"
        >
          <img :src="active" :key="key">
        </div>
      </div>
    </div>
</template>

<script>
import title from '../../../components/public/title'
import axios from 'axios'
// var mydata = new URLSearchParams()
// mydata.append('username', 'admin')
// mydata.append('pwd', 'admin')

export default {
  name: 'active',
  data: function () {
    return {
      actives: {}
    }
  },
  components: {
    'mytitle': title
  },
  mounted: function () {
    let self = this
    axios.get('http://localhost:3000/header', {
      headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
      .then(function (response) {
        self.actives = response.data
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>

<style scoped lang="less">
.active{
  padding: 20px 20px 0;
  width: 100%;
  background-color: hsla(0,0%,100%,.8);
  margin-bottom: 30px;
  .activecon{
    width: 25%;
    float: left;
    margin-bottom: 20px;
  }
}
</style>
