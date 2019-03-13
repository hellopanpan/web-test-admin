<template>
  <div class="sidebar">
    <el-menu
      router
      default-active="2"
      class="el-menu-vertical-demo"
    >
      <template v-for="(item) of navList">
        <template v-if="item.children && item.children.length">
          <el-submenu 
            :index="item.path" 
            :key="item.path"
          >
            <template slot="title">
              <i :class="'el-icon-' + item.icon" />
              <span>{{item.name}}</span>
            </template>
            <el-menu-item-group>
              <template v-for="(ite) of item.children">
                <el-menu-item 
                  :index="ite.path" 
                  :key="ite.path"
                >
                  {{ite.name}}
                </el-menu-item>
              </template>
            </el-menu-item-group>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item 
            :index="item.path" 
            :key="item.path"
          >
            <i :class="'el-icon-' + item.icon" />
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [{
        name: '页面管理',
        path: '/index',
        icon: 'tickets'
      },
      {
        name: '图片管理',
        path: '/pic',
        icon: 'menu'
      }]
    }
  }
}
</script>

<style lang="less" scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 260px;
  background: #fff;
  z-index: 99;
  box-sizing: border-box;
  padding: 55px 0;
}
</style>
