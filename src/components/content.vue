
<template>
  <div class="content">
    <el-table
      :data="list"
      border
      style="width: 100%"
      ref="moviesTable" 
      @selection-change="handleSelectionChange"
      >
      <el-table-column
        type="selection"
        align="center"
        :selectable="selectable"
        min-width="55">
      </el-table-column>
      <el-table-column
        prop="title"
        label="title"
        min-width="280">
      </el-table-column>
      <el-table-column
        prop="img"
        label="img"
        min-width="220">
      </el-table-column>
      <el-table-column
        prop="type"
        label="type"
        min-width="80">
      </el-table-column>
      <el-table-column
        prop="addtime"
        label="add time"
        :formatter="dateFormat" 
        min-width="130">
      </el-table-column>
      <el-table-column
        prop="learn"
        label="learn"
        min-width="60">
      </el-table-column>
      <el-table-column
        prop="good"
        label="good"
        min-width="60">
      </el-table-column>
      <el-table-column
        prop="comment"
        label="comment"
        min-width="90">
      </el-table-column>
      <el-table-column label="edit" min-width="120">
        <template slot-scope="scope">
          <el-button  type="primary" size="mini" @click.stop="edit(scope.row)">edit</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
import * as api from "@/api"
import utils from '@/lib/utils'
export default {
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      selectArr: []
    }
  },
  watch: {
    selectArr(newArr, old) {
      this.$emit('select', newArr)
    }
  },
  methods: {
    edit(row) {
      this.$emit('edit', row)
    },
    selectable() {
      return true
    },
    //  选择
    handleSelectionChange(e) {
      this.selectArr = e
    },
    // 格式化时间
    dateFormat(row, column) {
      var date = row[column.property]/ 1000; 
      if (date == undefined) { 
        return ""; 
      } 
      let str = utils.formatDate(date, 'yyyy-MM-dd hh:mm'); 
      return str
    } 
  }
}
</script>

<style lang="less" scoped>
.content{
  width:100%;
}
</style>