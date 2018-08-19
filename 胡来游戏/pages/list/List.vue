<template>
  <div class="list">
    {{count}}<br>
    <button @click="add">+</button>

    <ul>
      <li
        v-for="todo in todos"
        :class="{red:todo.done}"
      >
        <input type="checkbox" @click="change(todo.id)">{{todo.text}}
      </li>
    </ul>
    <hr>
    <ul>
      <li
        v-for="(doneTodo,key) in doneTodos"
        :key="key"
      >{{doneTodo.text}}</li>
    </ul>
  </div>
</template>
<script>
import {mapState, mapGetters, mapMutations} from 'vuex'
export default {
  methods: {
    add () {
      this.$store.commit('increment')
    },
    change (id) {
      this.$store.commit('change', id)
    }
  },
  computed: {
    ...mapState([
      // 映射 this.count 为 store.state.count
      'count',
      'todos'
    ]),
    ...mapGetters([
      'doneTodos'
    ])
  }
}
</script>
<style scoped lang="less">
  .list{
    margin-top: 100px;
    button{
      padding: 10px 30px;
    }
    .red{
      background-color: red;
    }
  }
</style>
