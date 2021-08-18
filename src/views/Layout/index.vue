<template>
  <div class='layoutContainer'>
    <el-container class="layout-container">
        <el-header class="header-container">
          <!-- <img src="logo.png" alt=""> -->
          导航网站的资源网站
          <LayoutHeader/>
        </el-header>
        <el-container>
            <el-aside width="auto" class="aside-container">
              <LayoutAside/>
            </el-aside>
            <el-main class="main-container">
              <!--主体部分子路由出口 -->
              <router-view/>
            </el-main>
        </el-container>
    </el-container>
 </div>
</template>

<script>
import LayoutAside from '@/components/layout/Aside.vue'
import LayoutHeader from '@/components/layout/Header.vue'
export default {
  name: 'LayoutIndex',
  data () {
    return {

    }
  },
  props: {

  },
  components: {
    LayoutAside,
    LayoutHeader
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
    backTop () {

    }
  }
}
</script>

<style scoped lang="less">
.layout-container {
    position: absolute;
    top:0;
    right: 0;
    bottom: 0;
    left: 0;
}
.aside-container{
  background-color: #D3DCE6;
  .aside-menu {
    height: 100%;
  }
}
.header-container{
  background-color: #B3C0D1;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.main-container{
  background-color: #E9EEF3;
  height: 100%;
}

</style>
