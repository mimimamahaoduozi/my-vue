<template>
    <div class="about">
      <p>{{ $route.name}}</p>
      <ul>
        <li><router-link to="/about/11">aaa</router-link></li>
        <li><router-link to="/about/13">bbb</router-link></li>
        <li><router-link to="/about/12">ccc</router-link></li>
      </ul>
      <input type="text" v-sss>
      <Aaa/>
      <router-view/>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'About',
  mounted: function () {
    axios.get('http://www.hoolai.com/_nuxt/manifest.05fe7aeede9aa3ab43a8.js')
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  components: {
    'child-component': {
      template: '<h1>我是局部组件</h1>'
    }
  },
  directives: {
    sss: {
      // 指令的定义
      inserted: function (el) {
        el.focus()
      }
    }
  }
}
</script>

<style lang="less">
.about{
  margin-top: 100px;
};
</style>
