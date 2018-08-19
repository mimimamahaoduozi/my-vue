import Vue from 'vue'
import Vuex from 'vuex'
import api from '../fatch/api'

Vue.config.productionTip = false

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 7, text: '留下1', done: true },
      { id: 1, text: '留下2', done: true },
      { id: 2, text: '消失1', done: false },
      { id: 3, text: '留下3', done: true },
      { id: 4, text: '消失2', done: false }
    ],
    music: {
      has: 0,
      msg: {}
    },
    activeMusic:[]
  },
  mutations: {
    increment (state) {
      state.count++
    },
    change (state, id) {
      let a = state.todos.filter(todo => (todo.id === id))
      a[0].done = !a[0].done
    },
    getmusics (state, data) {
      state.music.has = 1
      state.music.msg = data
    },
    getmusic (state, id) {
      state.activeMusic = state.music.msg.songs.filter(my => (my.id === id))
      console.log(state.music.msg.songs.filter(my => (my.id === id)));
      console.log('1');
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }

  },
  actions: {
    increment (store) {
      store.commit('increment')
    },
    // 获取音乐列表
    getMineBaseApi ({commit}) {
      api.mineBaseMsgApi()
        .then(res => {
          console.log('action中调用封装后的axios成功')
          commit('getmusics', res)
        })
    }
  }
})
export default store
