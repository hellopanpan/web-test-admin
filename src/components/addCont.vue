
<template>
  <el-dialog title="Add the page list" :visible.sync="dialogFormVisible">
    <el-form :model="form" size="mini" label-width="80px">
      <el-form-item label="title" >
        <el-input v-model="form.title" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="type" >
        <el-input v-model="form.type" autocomplete="off"></el-input>
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
      <el-button type="primary" v-if="!editflag" @click="submit" size="mini">comfirm</el-button>
      <el-button type="primary" v-if="editflag" @click="editsubmit" size="mini">edit</el-button>
    </div>
  </el-dialog>
</template>

<script>
import * as api from "@/api"
import utils from '@/lib/utils'
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {},
      editflag: false
    }
  },
  methods: {
    open() {
      this.form = {}
      this.editflag = false
      this.dialogFormVisible = true
    },
    close() {
      this.dialogFormVisible = false
    },
    edit(row) {
      this.form = Object.assign({}, row)
      this.editflag = true
      this.dialogFormVisible = true
    },
    editsubmit() {
      let reg = /^\d+$/
      if(!(reg.test(this.form.learn) && reg.test(this.form.learn) && reg.test(this.form.type) && reg.test(this.form.comment))) {
        return utils.showToast.call(this, '亲输入正确的num值', 'error')
      }
      let params = Object.assign({}, this.form)
      params.addtime = new Date().getTime()
      api.updateList(params).then(res => {
        utils.showToast.call(this, res.msg)
        this.$emit('update')
        this.dialogFormVisible = false
      }).catch(res => {
        console.log(res)
      })
    },
    submit() {
      let reg = /^\d+$/
      if(!(reg.test(this.form.learn) && reg.test(this.form.learn) && reg.test(this.form.comment))) {
        return utils.showToast.call(this, '亲输入正确的num值', 'error')
      }
      let params = Object.assign({}, this.form)
      params.addtime = new Date().getTime()
      api.addList(params).then(res => {
        utils.showToast.call(this, res.msg)
        this.$emit('update')
        this.dialogFormVisible = false
      }).catch(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="less" scoped>
</style>