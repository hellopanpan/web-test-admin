
<template>
  <div class="content">
    <el-table
      :data="list"
      border
      style="width: 100%"
      ref="moviesTable" 
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
        min-width="80">
      </el-table-column>
      <el-table-column label="操作" min-width="120">
        <template slot-scope="scope">
          <el-button  type="primary" size="mini" @click.stop="edit(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import * as api from "@/api"
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
    }
  },
  methods: {
    edit(row) {
      debugger
    },
    selectable() {
      return true
    }
  }
}
</script>

<style lang="less" scoped>
.content{
  width:100%;
}
</style>