<template>
    <div id="app">
      <template v-if="$router.currentRoute.path !== '/login'">
        <el-button @click="logout" v-show="token">退出</el-button>
        <el-button class="flex-wrp flex-center" v-show="!token" @click="$router.push('/login')">登录</el-button>
      </template>
      <h3 class="flex-wrp flex-center color2">{{title}}</h3>
      <div class="flex-wrp flex-center pb60 pt30">
        <el-card>Vue-dev</el-card>
      </div>
      <router-view>
      </router-view>
    </div>
</template>

<script>
import * as types from '@/store/types'
import { mapState } from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    
  },
  computed: mapState({
    title: state => state.title,
    token: state => state.token
  }),
  methods: {
    logout () {
      this.$store.commit(types.LOGOUT)
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/app.scss";
</style>
