<template>
  <div class="home">
    <add-cont ref="addcont"/>
    <h4 class="module-header">查询</h4>
    <h4 class="module-header">结果</h4>
    <el-button class="add" @click.stop="addit">add</el-button>
    <div class="card">
      <Content :list="list" />
    </div>
  </div>
</template>

<script>
import * as api from "@/api"
import addCont from '@/components/addCont.vue'
import Content from '@/components/content.vue'
export default {
  name: 'index',
  data() {
    return {
      list: []
    }
  },
  components:{
    addCont,
    Content
  },
  mounted() {
    this.getList(true)
  },
  methods: {
    addit() {
      this.$refs.addcont.open()
    },
    // 获取视频列表 ,flag 为true，更新整个list
    getList(flag) {
      api.getOrderList().then(res => {
        this.list = res.list
      }).catch(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  position: relative;
  .create{
    position: absolute;
    right: 20px;
    top: 10px;
  }
  .module-box {
    padding: 30px 30px 0;
  }
  .page{
    display: flex;
    justify-content: center;
    margin: 30px 0;
  }
}
</style>
