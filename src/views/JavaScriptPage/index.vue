<template>
    <el-row>
        <el-col :span="4" v-for="(item, index) in page" :key="index" :offset="index > -1 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }" >
            <a :href="item.resoure_url" target="_blank" style="text-decoration:none">
              <img :src="item.img_url"  class="image">
              <div style="padding: 10px;">
                  <span >{{ item.title }}</span>
                  <div class="bottom">
                  <time class="time">{{ item.describe }}</time>
                  <el-button type="text" class="button">进入学习</el-button>
                  </div>
              </div>
            </a>
            </el-card>
        </el-col>
    </el-row>
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
</template>

<script>
import { jsData } from '@/data/JsPageData.js'
export default {
  name: 'JavaScriptIndex',
  data () {
    return {
      jsData,
      pageSizes: [10, 20, 30, 40],
      pageSize: 10,
      page: jsData.slice(0, 10),
      total: jsData.length,
      currentPage: 1
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
    this.getdata()
  },
  mounted () {

  },
  methods: {
    getdata () {
      console.log(jsData)
      console.log(jsData[0].img_url)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
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
