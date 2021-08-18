<template>
  <div class="headerContainer">
    <!-- <div class="headerImg">
      <img src="logo.png" alt="">
    </div> -->
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template #title>我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template #title>选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" >消息中心</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'LayoutHeader',
  data () {
    return {
      activeIndex: '1'
    }
  },
  props: {

  },
  components: {

  },
  computed: {

  },
  watch: {

  },
  created () {

  },
  mounted () {

  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped >
/* .headerContaine{
  width: 100%;
  background-color: #B3C0D1;
  display: inline-flex;
  // display: flex;
  justify-content: center;
  // align-content: center;
  .headerImg{
    img{
      width: 200px;
      height: 100px;
    }
  }
  .el-menu{
    background-color: #B3C0D1;
  }
} */

.el-menu{
    background-color: #B3C0D1;
  }
</style>
