<template>
  <div class="flex-wrp flex-center">
    <div class="flex-wrp flex-between flex-algin-center" :style="{width: '600px'}">
      <el-form>
        <label class="color2 size22 flex-wrp flex-center">请输入你的 Github Personal Token(Press Enter),进行测试</label>
        <el-input type="password" v-model="token"></el-input>
        <div class="flex-wrp flex-center ptb30">
          <div class="flex-wrp flex-between flex-algin-center" :style="{width: '200px'}">
              <el-button @click="login">登录</el-button>
              <a href="https://github.com/settings/tokens/new" class="underline-none el-button el-button">生成你的 token</a>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script type="application/ecmascript">
import * as types from '@/store/types'
export default {
  name: '',
  data () {
    return {
      msg: '',
      token: ''
    }
  },
  mounted () {
    this.$store.commit(types.TITLE, '登录')
  },
  methods: {
    login () {
      if (this.token) {
        this.$store.commit(types.LOGIN, this.token)
        let redirect = decodeURIComponent(this.$route.query.redirect || '/')
        this.$router.push({
          path: redirect
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>

</style>
