<template>
  <div class="flex-wrp flex-center">
    <el-button class="flex-wrp flex-center" @click="$router.push('/repository')">进入管理页面(需要 Token)</el-button>
  </div>
</template>

<script type="application/ecmascript">
export default {
  name: '',
  data () {
    return {
      msg: ''
    }
  },
  mounted () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
</style>
