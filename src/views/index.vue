<template>
  <div class="home">
    <h4 class="module-header">查询</h4>
    <h4 class="module-header">结果</h4>
    <div class="cont">
      <ul>
        <li v-for="(item, index) in list" :key="item.id">
          {{index}} --> {{item.name}} ---> {{item.age}} 
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import * as api from "@/api"
export default {
  name: 'index',
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.getList(true)
  },
  methods: {
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
