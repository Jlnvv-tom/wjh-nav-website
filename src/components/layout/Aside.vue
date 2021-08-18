<template>
  <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <el-radio-button :label="false">展开</el-radio-button>
  <el-radio-button :label="true">收起</el-radio-button>
</el-radio-group> -->
    <div >
        <i
        :class="{
         'el-icon-s-fold': !isCollapse,
         'el-icon-s-unfold': isCollapse
        }"
        @click="isCollapse =!isCollapse"
        ></i>
    </div>
  <el-menu
      router
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
    <el-menu-item index="/">
      <i class="el-icon-menu"></i>
      <template #title>首页</template>
    </el-menu-item>
    <el-menu-item index="/webpage">
      <i class="el-icon-menu"></i>
      <template #title>web资源</template>
    </el-menu-item>
    <el-menu-item index="/javaScriptPage">
      <i class="el-icon-menu"></i>
      <template #title>JavaScript资源</template>
    </el-menu-item>
    <el-menu-item index="/nodeJs" >
      <i class="el-icon-document"></i>
      <template #title>NodeJs资源</template>
    </el-menu-item>
    <el-menu-item index="/vueJs">
      <i class="el-icon-setting"></i>
      <template #title>VueJS资源</template>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'LayoutAside',
  data () {
    return {
      isCollapse: false
    }
  },
  props: [],
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
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped  lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
