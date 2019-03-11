<template>
  <div class="header">
    <div class="left">商品管理后台</div>
    <div class="right">
      <div class="pull-right"><span class="text" v-show="info.username">你好，{{info.username}}</span><el-button @click="logout" title="退出" size="mini" type="danger" circle><i class="iconfont icon-shutdown"></i></el-button></div>
    </div>
  </div>
</template>

<script>
import * as apis from '@/api'
export default {
  data() {
    return {
      info: {}
    }
  },
  mounted() {
    // this.getUserInfo()
  },
  methods: {
    logout() {
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      this.$router.push('/login')
    }
    // getUserInfo() {
    //   apis.getUserInfo().then(res => {
    //     this.info = res
    //   })
    // }
  }
}
</script>


<style lang="less" scoped>
.header {
  position: fixed;
  height: 55px;
  line-height: 55px;
  background: #fff;
  left: 0;
  top: 0;
  width: 100%;
  border-bottom: 1px solid #eee;
  z-index: 100;
  display: flex;
  .left {
    flex: none;
    width: 260px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: #666;
  }
  .right {
    flex: 1;
    box-sizing: border-box;
    padding: 0 20px;
  }
  .pull-right {
    float: right;
  }
  .text {
    font-size: 14px;
    margin-right: 20px;
  }
}
</style>
