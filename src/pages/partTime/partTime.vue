<template>
  <div class="wrapper">
    <div class="container">
      <div class="box">
        <div class="search">
          <el-input type="text" v-model="search" placeholder="请输入要搜索的职位">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <div class="nav">
          <span v-for="(item, index) in navData" :key="index">{{item}}</span>
        </div>
      </div>
      <div class="content">
        <div class="content_box">
          <div class="box_item">
            <em>工作地点:</em>
            <span
              v-for="(item ,index) in placeData[0]"
              :key="index"
              :class="[{'col-block': cur == index}]"
              @click="cur = index"
            >{{item}}</span>
          </div>
          <div class="box_item">
            <em>工作年限:</em>
            <span
              v-for="(item ,index) in placeData[1]"
              :key="index"
              :class="[{'col-block': cur1 == index}]"
              @click="cur1 = index"
            >{{item}}</span>
          </div>
          <div class="box_item">
            <em>更多选项:</em>
            <span :class="[{'col-block': !cur2}]" @click="cur2 = false;checkvalue=[]">不限</span>
            <el-checkbox-group
              v-model="checkvalue"
              text-color="#5183ff"
              style="display: inline-block;padding-left:15px"
              @change="check()"
            >
              <el-checkbox
                v-for="(item ,index) in placeData[2]"
                :key="index"
                :label="index"
              >{{item}}</el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
      </div>
      <div class="pos">
        <div class="pos_box">
          <el-row :gutter="20">
            <el-col :span="18" class="left">
              <div class="box_header">
                <span
                  v-for="(item ,index) in seData"
                  :key="index"
                  :class="[{'col-block': pos_index == index}]"
                  @click="pos_index = index"
                >{{item}}</span>
                <p class="msg">
                  为您优选
                  <em style="color:#5183ff">{{mount}}</em>个放心职位
                </p>
              </div>
              <div class="pos_content">
                <div class="pos_content_box" v-for="(item ,index) in content" :key="index">
                  <el-row>
                    <el-col :span="14">
                      <h2>{{item.title}}</h2>
                      <h3>{{item.way}}</h3>
                      <p>{{item.mode}}</p>
                    </el-col>
                    <el-col :span="5">
                      <p>{{item.company}}</p>
                      <p>{{item.place}}</p>
                      <p>{{item.public}}</p>
                    </el-col>
                    <el-col :span="5" style="text-align:right">
                      <el-button type="primary" size="small" round class="button">申请职位</el-button>
                    </el-col>
                  </el-row>
                </div>
                <div class="foot_el">
                  <el-pagination
                    background
                    :page-size="1"
                    :hide-on-single-page="false"
                    :pager-count="7"
                    :current-page="1"
                    layout="prev, pager, next"
                    :total="10"
                  ></el-pagination>
                </div>
              </div>
            </el-col>
            <el-col :span="4" class="right">
              <p>哈哈，没有内容气不气</p>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "partTime",
  data() {
    return {
      search: "",
      navData: [
        "派单",
        "销售",
        "地推",
        "家教",
        "模特",
        "实习",
        "客服",
        "导购",
        "钟点工"
      ],
      placeData: [
        [
          "不限",
          "中牟县",
          "金水区",
          "二七区",
          "管城回族区",
          "中原区",
          "惠济区",
          "上街区"
        ],
        [
          "不限",
          "传单派发",
          "推广促销",
          "家教翻译",
          "服务员",
          "钟点工",
          "实习生",
          "市场销售",
          "校园代理",
          "客服话务",
          "展会演出",
          "礼仪模特",
          "安保人员",
          "调研问卷",
          "观众充场",
          "其他"
        ],
        ["周末兼职", "日结"]
      ],
      cur: 0,
      cur1: 0,
      cur2: false,
      checkvalue: [],
      seData: ["综合排序", "最新发布", "职位保障"],
      mount: 1083,
      pos_index: 0,
      content: [
        {
          title: "辅导机构诚聘话务员",
          way: "面议",
          mode: "客服方式",
          company: "海寂信息咨询有限公司",
          place: "郑州金水区",
          public: "当当网"
        },
        {
          title: "辅导机构诚聘话务员",
          way: "面议",
          mode: "客服方式",
          company: "海寂信息咨询有限公司",
          place: "郑州金水区",
          public: "当当网"
        },
        {
          title: "辅导机构诚聘话务员",
          way: "面议",
          mode: "客服方式",
          company: "海寂信息咨询有限公司",
          place: "郑州金水区",
          public: "当当网"
        },
        {
          title: "辅导机构诚聘话务员",
          way: "面议",
          mode: "客服方式",
          company: "海寂信息咨询有限公司",
          place: "郑州金水区",
          public: "当当网"
        },
        {
          title: "辅导机构诚聘话务员",
          way: "面议",
          mode: "客服方式",
          company: "海寂信息咨询有限公司",
          place: "郑州金水区",
          public: "当当网"
        },
        {
          title: "辅导机构诚聘话务员",
          way: "面议",
          mode: "客服方式",
          company: "海寂信息咨询有限公司",
          place: "郑州金水区",
          public: "当当网"
        }
      ]
    };
  },
  methods: {
    check() {
      this.cur2 = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  background: url(https://zhaopin.baidu.com/static/newpczhaopin/65e20c1232bbdbc9ede5d97b0a89c1d1.png)
    no-repeat;
  background-position: top;
  background-size: 100% 220px;
  .container {
    max-width: 1200px;
    margin: 0 auto;
    .box {
      width: 800px;
      margin: 0 auto;
      .search {
        padding-top: 50px;
        padding-bottom: 25px;
      }
      .nav {
        text-align: center;
        span:not(:nth-child(1)) {
          margin-left: 21px;
        }
        span {
          cursor: pointer;
          font-size: 14px;
          color: #666;
        }
        span:hover {
          color: #5183ff;
        }
      }
    }
    .content {
      max-width: 1200px;
      margin: 0 auto;
      background: #fff;
      border-radius: 6px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
      .content_box {
        box-sizing: border-box;
        margin-top: 30px;
        padding: 30px;
        .box_item {
          position: relative;
          padding-left: 54px;
          color: #666;
          font-size: 14px;
          em {
            position: absolute;
            top: 0;
            left: 0;
          }
          span {
            display: inline-block;
            margin-left: 21px;
            padding-bottom: 20px;
            color: #000;
            cursor: pointer;
          }
          .col-block {
            color: #5183ff;
          }
        }
      }
    }
    .pos {
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 30px;
      background: #fff;
      border-radius: 6px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
      .pos_box {
        padding: 30px;
        .box_header {
          font-size: 14px;
          color: #666;
          span {
            display: inline-block;
            margin-bottom: 10px;
            margin-right: 21px;
            cursor: pointer;
          }
          .col-block {
            color: #5183ff;
          }
          .msg {
            float: right;
          }
        }
        .pos_content {
          margin-top: 30px;
          .pos_content_box {
            padding-bottom: 20px;
            padding-top: 20px;
            border-bottom: 1px solid #eee;
            h3 {
              padding-top: 15px;
              color: orangered;
            }
            p {
              padding-top: 15px;
              color: #666;
              font-size: 14px;
            }
            .button {
              position: relative;
              top: 40px;
            }
          }
          .foot_el {
            text-align: center;
            margin-top: 20px;
          }
        }
      }
    }
  }
}
</style>