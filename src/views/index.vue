<template>
  <div class="home">
    <add-cont ref="addcont" @update='update'/>
    <h4 class="module-header">Search</h4>
    <div class="card">
      <div class="module-box">
        <el-form :inline="true" :model="form" class="demo-form-inline">
          <el-form-item label="title">
            <el-input v-model="form.search" placeholder="title key words" />
          </el-form-item>
          <el-button type="primary"  @click.stop="getList">search</el-button>
        </el-form>
      </div>
    </div>
    <h4 class="module-header">Result
      <el-button class="add" type="primary" size="mini" @click.stop="addit">Add New</el-button>
      <el-button class="remove" type="primary" size="mini" @click.stop="remove">Remove</el-button>
    </h4>
    <div class="card">
      <Content :list="list" @edit='edit' @select="select"/>
    </div>
    <div class="page">
      <el-pagination
        :page-size="pageSize"
        layout="prev, pager, next"
        @current-change="currentChange"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import * as api from "@/api"
import addCont from '@/components/addCont.vue'
import Content from '@/components/content.vue'
import utils from '@/lib/utils'
export default {
  name: 'index',
  data() {
    return {
      list: [],
      form: {},
      pageSize: 10,
      total: 14,
      currentPage: 1,
      selectArr: [],
      imageUrl: ''
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
    // 选取改变
    select(arr) {
      this.selectArr = arr
    },
    // 编辑
    edit(row) {
      this.$refs.addcont.edit(row)
    },
    // 打开add弹窗
    addit() {
      this.$refs.addcont.open()
    },
    // 页码改变
    currentChange(e) {
      this.currentPage = e
      this.getList(true)
    },
    // 更新
    update() {
      this.getList()
    },
    // delete
    remove() {
      if (!this.selectArr.length) return
      let deleteArr = this.selectArr.map(item => {
        return item._id
      })
      let params = {
        ids: deleteArr
      }
      api.removeList(params).then(res => {
        utils.showToast.call(this, res.msg)
        this.getList(true)
      }).catch(res => {
        console.log(res)
        utils.showToast.call(this, res.msg)
      })
    },
    // 获取视频列表 ,flag 为true，更新整个list
    getList(flag) {
      let params = Object.assign({}, this.form)
      params.pageSize = this.pageSize;
      params.currentPage = this.currentPage;
      api.getOrderList(params).then(res => {
        this.list = res.list
        this.total = res.total
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
  h4{
    position: relative;
    .add{
      position: absolute;
      left: 100px;
      top: 16px;
    }
    .remove{
      position: absolute;
      left: 190px;
      top: 16px;
    }
  }
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
