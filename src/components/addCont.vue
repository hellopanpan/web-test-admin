
<template>
  <el-dialog title="Add the page list" :visible.sync="dialogFormVisible">
    <el-form :model="form" size="mini" label-width="80px">
      <el-form-item label="title" >
        <el-input v-model="form.title" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="text">
        <el-input type="textarea" rows="10" v-model="form.text"></el-input>
      </el-form-item>
      <el-form-item label="img" >
        <el-input v-model="form.img" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="learn" >
        <el-input v-model="form.learn" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="good" >
        <el-input v-model="form.good" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="comment" >
        <el-input v-model="form.comment" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false" size="mini">cancel</el-button>
      <el-button type="primary" @click="submit" size="mini">comfirm</el-button>
    </div>
  </el-dialog>
</template>

<script>
import * as api from "@/api"
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {}
    }
  },
  methods: {
    open() {
      this.form = {}
      this.dialogFormVisible = true
    },
    close() {
      this.dialogFormVisible = false
    },
    submit() {
      let params = Object.assign({}, this.form)
      params.addtime = new Date().getTime()
      api.addList(params).then(res => {
        this.list = res.list
      }).catch(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="less" scoped>
</style>