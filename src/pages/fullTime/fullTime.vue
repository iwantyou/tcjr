<template>
  <div>
    <h2 class="text-center header">全职</h2>
    <!--分类导航-->
    <div class="nav-content">
      <div
        v-for="(item, index) in nav"
        :key="index"
        @click="tab(index, item.type)"
        :class="['nav',{'cur': index == cur}]"
      >{{item.sort}}</div>
    </div>
    <!--内容区 -->
    <div class="content">
      <el-row>
        <el-col :sm="8" :md="6" v-for="(item, index) in projects1" :key="index">
          <div class="widge">
            <div class="box">
              <div>职位名称：</div>
              <div>职位描述</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <!--分页 -->
    <div class="elbottom" style="text-align:center;padding:0 0 15px 0;">
      <el-pagination
        layout="total,sizes,prev, pager, next,jumper"
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
import { Pagination } from "element-ui";
import { getfulldata, getfullsort } from "@/axios/index";
Vue.use(Pagination);

export default {
  name: "fullTime",
  components: {},
  data() {
    return {
      cur: 0,
      nav: [
        { sort: "发布时间", type: "item_public_time" },
        { sort: "热度", type: "hot" }
      ],
      projects1: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
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
    this.getData();
  },
  methods: {
    tab(index, sort) {
      this.cur = index;
    },
    sort(index, sort) {
      this.cur = index;
      var feather = sort.type;
      getfullsort({ ...pagedata, feather }).then(res => {
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
    getData() {
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
    handlecurrentchange(page) {
      this.pagedata.page = page;
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../assets/css/mixin.less";
.header {
  .mar-tb(8px);
}
.nav-content {
  margin-left: 25px;
  border-bottom: 3px solid orangered;
}
.nav {
  display: inline-block;
  padding: 5px 8px;
  transition: background-color 0.1s;
}
.cur {
  background-color: orangered;
  color: #fff;
  border-bottom: 2px solid #fff;
  border-radius: 4px;
}
.content {
  height: calc(100% - 118px);
  overflow-y: auto;
  padding: 10px 15px;
  box-sizing: border-box;
}
.widge {
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
}
.box {
  padding: 5px 8px;
  border: 1px dashed #666;
}
</style>
