<template>
  <div class="login">
    <div class="login-wrap">
      <div class="box-header">登录账户</div>
      <div class="box-body">
        <el-form ref="form" :model="form">
          <el-form-item>
            <el-input
              type="text"
              v-model="form.username"
              placeholder="请输入登录账号"
            >
              <i slot="prefix" class="iconfont icon-my" />
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              type="password"
              v-model="form.password"
              placeholder="请输入密码"
            >
              <i slot="prefix" class="iconfont icon-lock" />
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="block" type="primary" @click="onSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="box-footer">copyright</div>
    </div>
  </div>
</template>

<script>
import * as apis from '@/api'

export default {
  data() {
    return {
      form: {}
    }
  },
  methods: {
    onSubmit() {
      if (!this.form.username || !this.form.password) {
        this.$message.error('请输入账号或密码')
        return
      }
      apis.userLogin(this.form).then(res => {
        this.$router.push('/')
      }).catch(err => {
        this.$message.error(err.msg)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('../assets/images/bg.jpg') no-repeat;
  background-size: cover;
  .login-wrap {
    position: absolute;
    background: rgba(255, 255, 255, 0.9);
    width: 350px;
    height: 300px;
    left: 50%;
    top: 50%;
    transform: translateX(20%) translateY(-50%);
    border-radius: 3px;
    overflow: hidden;
    color: #333;
  }
  .box-header {
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
    font-size: 22px;
    background: #ddd;
    color: #555;
  }
  .box-body {
    padding: 30px;
  }
}
</style>
