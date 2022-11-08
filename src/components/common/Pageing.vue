<template>
  <div>
    <el-pagination @size-change="handleSizeChange"
                   @current-change="handleCurrentChange"
                   :current-page="page"
                   :page-sizes="[5,10, 20, 50, 100]"
                   :page-size="size"
                   layout="total, sizes, prev, pager, next, jumper"
                   :total="total"
                   :url="url">
      <!-- :url，让其它地方也能使用分页功能 -->
    </el-pagination>
  </div>
</template>

<script>
import { getTableData } from "@/utils/table";
export default {
  props: {
    //接收WorkMent传递过来的数据
    "total": Number,
    "url": String
  },
  data () {
    return {
      page: 1, //当前页数
      size: 10, //显示条数
    }
  },
  created () {
    //this指向的是当前的组件，我们需要的是WorkMent组件的this
    getTableData(this.$parent, "/works", { page: this.page, size: this.size }, ["completed"]);
  },
  methods: {
    handleSizeChange (val) {
      this.size = val
      this.page = 1
      //更改后再次调用，获取最新的数据
      getTableData(this.$parent, "/works", { page: this.page, size: val }, ["completed"]);
    },
    handleCurrentChange (val) {
      this.page = val
      getTableData(this.$parent, "/works", { page: val, size: this.size }, ["completed"]);
    },
  },
}
</script>