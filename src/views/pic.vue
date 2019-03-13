<template>
  <div class="pic">
    <el-upload
      class="upload-demo"
      action="/webtest/post/"
      multiple
      :on-success="success"
      :before-upload="beforeAvatarUpload"
      :on-remove="handleRmove"
      :limit="10"
      :file-list="fileList">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <div class="picont">
      <el-row  :gutter="10" class="row-bg" >
        <el-col class="row-bg-col" :xs="12" :sm="6" :md="6" :lg="6" :xl="4" v-for="(item, index) in olist" :key="index" >
          <el-card :body-style="{ padding: '0px' }">
            <img :src="item.imgpath" class="image">
            <div style="padding: 14px;" class="text">
              {{item.url}}
            </div>
            <el-button class="btn" size="mini" type="danger" circle @click.stop="remove(item.picfile)">
              <i class="el-icon-close"></i>
            </el-button>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import utils from '@/lib/utils'
import * as api from "@/api"
// const path = 'http://localhost:3001/images/'
import path from '@/config'
export default {
  name: 'pic',
  data() {
    return {
      fileList: [],
      olist: []
    }
  },
  created() {
    this.getList()
  }, 
  methods: {
    success() {
      this.getList()
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG/PNG格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    // 获取列表
    getList() {
      api.getPicList().then((res) => {
        let imgArr = res.imgList.map(item => {
          return {
            imgpath: path.staticPath + item,
            url: path.static + item,
            picfile: item
          }
        })
        this.olist =imgArr
      }).catch((e) => {
        console.log(e)
        utils.showToast.call(this, e.msg, 'error')
      })
    },
    // 移除
    remove(file) {
      let params = {
        picfile: file
      }
      api.removepic(params).then((res) => {
        utils.showToast.call(this, res.msg)
        this.getList()
      }).catch((e) => {
        console.log(e)
        utils.showToast.call(this, e.msg, 'error')
      })
    },
    // 列表中移除
    handleRmove(file) {
      this.remove(file.name)
    }
  }
}
</script>
<style lang="less" scoped>
  .picont{
    margin-top: 20px;
  }
  .el-row {
    .row-bg-col{
      margin-bottom: 20px;
      position: relative;
      .btn{
        position: absolute;
        right: 10px;
        top: 10px;
      }
      .el-button--mini.is-circle{
        padding: 2px;
      }
      img{
        height: auto;
        max-height: 200px;
        width: 100%;
      }
      .text{
        word-wrap: break-word;
      }
    }
  }
</style>
