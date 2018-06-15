<template>
    <div class="container">
        <div v-for="(repo, index) in list" :key="index" class="flex-wrp flex-cell flex-align-center">
            <el-card class="flex-wrp flex-between mtb10" :style="{width: '1000px'}">
                <div slot="header" class="clearfix">
                    <div :style="{width:'100px',height:'100px'}">
                        <img :src="repo.owner.avatar_url" alt="People">
                    </div>
                    <div style="text-align: left">
                        <div class="md-title">{{repo.name}}</div>
                        <div>{{repo.description}}</div>
                    </div>
                </div>
                <div class="repo-mark">
                    <span v-if="repo.language">
                        <span>{{repo.language}}</span>
                    </span>
                    <span v-if="repo.stargazers_count">
                        <span>{{repo.stargazers_count}}</span>
                    </span>
                    <span v-if="repo.forks_count">
                        <span>{{repo.forks_count}}</span>
                    </span>
                    <span>
                        <span>{{repo.updated_at}}</span>
                    </span>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script type="application/ecmascript">
import api from '@/constant/api'
import * as types from '@/store/types'

export default {
  name: '',
  data () {
    return {
      msg: '',
      list: []
    }
  },
  mounted () {
    this.$store.commit(types.TITLE, '你的仓库')
    this.getRepository()
  },

  methods: {
    getRepository () {
      let params = {
        sort: 'updated'
      }
      this.axios.get(api.repo_list, params)
        .then(response => {
          this.list = response.data
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>

</style>
