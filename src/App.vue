<template>
  <div id="app">
    <router-view v-if="isHtml" />
    <template v-if="!isHtml">
      <top-header />
      <div class="main">
        <div class="left">
          <sidebar />
        </div>
        <div class="content">
          <router-view />
        </div>
      </div>
      <footer-bar />
    </template>
  </div>
</template>

<script>
import topHeader from '@/components/header'
import sidebar from '@/components/sidebar'
import footerBar from '@/components/footer'

export default {
  name: 'app',
  components: {
    topHeader,
    sidebar,
    footerBar
  },
  data() {
    return {}
  },
  computed: {
    isHtml() {
      return this.$store.state.isHtml
    }
  }
}
</script>

<style lang="less" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.content {
  margin: 55px 0 0 260px;
  padding: 30px 20px;
}
@media only screen and (max-width: 1199px){
  .left{
    display: none;
  }
  .content {
    margin: 55px 0 0 0px;
    padding: 30px 20px;
  }
}
</style>