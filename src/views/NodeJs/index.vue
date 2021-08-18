<template>
  <div class='nodeJs'>
    <el-row>
        <el-col :span="4" v-for="(item, index) in jsData" :key="index" :offset="index > -1 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }" >
            <a :href="item.resoure_url" target="_blank">
              <img :src="item.img_url"  class="image">
              <div style="padding: 10px;">
                  <span>好吃的汉堡</span>
                  <div class="bottom">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button">操作按钮</el-button>
                  </div>
              </div>
            </a>
            </el-card>
        </el-col>
    </el-row>
 </div>
</template>

<script>
import { jsData } from '@/data/JsPageData.js'
export default {
  name: 'NodeIndex',
  data () {
    return {
      jsData
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

  }
}
</script>

<style scoped>
.el-card{
    margin-bottom: 20px;
    width: 300px;
    height: 250px;
}
 .time {
    font-size: 13px;
    color: #999;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .button {
    padding: 0;
    min-height: auto;
  }

  .image {
    width: 100%;
    height: 150px;
    display: block;
  }
</style>
