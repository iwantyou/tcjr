<template>
  <div>
    <div class="bi" style="text-align: center;margin:20px 0;font-size:20px;letter-spacing:5px;">全职</div>
    <!--分类导航-->
    <div class="nav" style="margin-left:25px;border-bottom:3px solid orangered">
      <div
        v-for="(item, index) in nav"
        :key="index"
        @click="c(index)"
        :class="['com',{'cur': index == cur}]"
      >{{item}}</div>
    </div>
    <div class="flex">
      <full
        v-for="(project, index) in projects1.slice((curt-1)*12,12*curt)"
        :project="project"
        :key="index"
      ></full>
    </div>
    <div class="elbottom" style="text-align:center;padding:0 0 15px 0;">
      <el-pagination
        layout="total,sizes,prev, pager, next,jumper"
        background="true"
        :total="totalpage"
        :current-page="pagedata.page"
        :page-sizes="[12]"
        :page-size="totalpage < 7 ? totalpage : 7"
        @current-change="handlecurrentchange"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import full from "@/components/fullpartime/fulltime";
import { Pagination } from "element-ui";
import { getfulldata } from "@/axios/index";
Vue.use(Pagination);

export default {
  name: "fullTime",
  components: {
    full
  },
  data() {
    return {
      cur: 0,
      nav: ["发布时间", "热度"],
      projects1: [],
      pagedata: {
        limit: 12,
        page: 1,
        item_position_state: 1
      },
      loadmore: "",
      totalpage: "" // 总条目数
    };
  },
  created() {
    getfulldata(pagedata).then(res => {
      if (res === 0) {
        const { result, loadmore } = res.data;
        this.projects1 = result.rows;
        this.loadmore = loadmore;
        this.totalpage = Math.ceil(result.count / this.pagedata.limit);
      } else {
        this.$message({
          message: res.msg,
          type: "warning"
        });
      }
    });
  },
  methods: {
    c(index) {
      this.cur = index;
    },
    handlecurrentchange(page) {
      this.pagedata.page = page;
    }
  }
};
</script>
<style lang="scss">
@import "index.scss";
@media (min-width: 1024px) {
  .flex {
    width: 33.33%;
  }
}
@media (max-width: 1023px) {
  .flex {
    width: 50%;
  }
}
</style>
